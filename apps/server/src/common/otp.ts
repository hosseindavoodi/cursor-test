export type OtpOptions = {
  length?: number;
  charset?: "numeric" | "alphanumeric" | string;
  excludeSimilar?: boolean;
};

export function generateOtp(opts: OtpOptions = {}): string {
  const {
    length = 6,
    charset = "numeric",
    excludeSimilar = true,
  } = opts;

  // Build character set
  let chars: string;
  if (charset === "numeric") {
    chars = "0123456789";
  } else if (charset === "alphanumeric") {
    chars = excludeSimilar
      ? "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789" // no 0,O,1,l,I
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else {
    chars = charset;
  }
  if (chars.length < 2) throw new Error("Charset must contain at least 2 characters.");

  // Secure random index 0..n-1 without modulo bias
  const randBelow = (n: number): number => {
    // Try Node's crypto.randomInt first
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const nodeCrypto: typeof import("crypto") = require("crypto");
      if (typeof nodeCrypto.randomInt === "function") {
        return nodeCrypto.randomInt(0, n);
      }
      if (nodeCrypto.webcrypto?.getRandomValues) {
        const buf = new Uint32Array(1);
        const max = Math.floor(0xffffffff / n) * n;
        let x = 0;
        do {
          nodeCrypto.webcrypto.getRandomValues(buf);
          x = buf[0] >>> 0;
        } while (x >= max);
        return x % n;
      }
    } catch {
      /* not in Node or require blocked; fall through to Web Crypto */
    }

    // Browser/Web Crypto
    const webCrypto: Crypto | undefined = (globalThis as any).crypto;
    if (webCrypto?.getRandomValues) {
      const buf = new Uint32Array(1);
      const max = Math.floor(0xffffffff / n) * n;
      let x = 0;
      do {
        webCrypto.getRandomValues(buf);
        x = buf[0] >>> 0;
      } while (x >= max);
      return x % n;
    }

    throw new Error("No secure RNG available on this platform.");
  };

  let out = "";
  for (let i = 0; i < length; i++) {
    out += chars[randBelow(chars.length)];
  }
  return out;
}
