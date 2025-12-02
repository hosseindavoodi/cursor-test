export type IkcConfig = {
    /** Base API URL, e.g. https://ikc.shaparak.ir */
    baseUrl: string;
    /** Terminal ID (8 numeric chars) */
    terminalId: string;
    /** Acceptor ID (up to 15 numeric) */
    acceptorId: string;
    /** 16-char pass phrase (hex allowed), used in base string */
    passPhrase: string;
    /** AES-128 key as HEX (32 hex chars) */
    aesKeyHex?: string;
    /** AES IV as HEX (32 hex chars) */
    aesIvHex?: string;
    /** IKC RSA public key in PEM */
    rsaPublicKeyPem: string;
    /** Optional: default revert/return URL host enforcement (must match merchant site host) */
    enforceRevertHost?: string;
    /** Optional: default headers */
    defaultHeaders?: Record<string, string>;
};

export const IKC_CONFIG = Symbol('IKC_CONFIG');