import * as crypto from 'crypto';

export type BaseStringParts = {
    terminalId: string;
    passPhrase: string;
    amount: number;
    multiplex?: { iban: string; amount: number }[];
};


export function padNumber(n: number, width: number): string {
    const s = Math.trunc(Math.abs(n)).toString(10);
    return s.length >= width ? s : '0'.repeat(width - s.length) + s;
}

export function buildBaseHexString({ terminalId, passPhrase, amount }: BaseStringParts): string {
    return (
        (terminalId ?? '').toUpperCase() +
        (passPhrase ?? '').toUpperCase() +
        padNumber(amount, 12) +
        '00'
    ).toUpperCase();
}


export function aesCbcEncryptHex(plaintextHex: string, keyHex: string, ivHex: string): Buffer {
    const key = Buffer.from(keyHex, 'hex');
    const iv = Buffer.from(ivHex, 'hex');
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    const input = Buffer.from(plaintextHex, 'hex');
    const part1 = cipher.update(input);
    const part2 = cipher.final();
    return Buffer.concat([part1, part2]);
}


export function sha256Hex(buf: Buffer): string {
    return crypto.createHash('sha256').update(buf).digest('hex').toUpperCase();
}

export function makeAuthenticationEnvelopeHex(params: {
    baseStringHex: string;
    aesKeyHex: string;
    aesIvHex: string;
    rsaPublicKeyPem: string;
}): { dataHex: string; ivHex: string } {
    const aesEncrypted = aesCbcEncryptHex(params.baseStringHex, params.aesKeyHex, params.aesIvHex);
    const digestHex = sha256Hex(aesEncrypted);
    const combo = Buffer.from((params.aesKeyHex + digestHex).toUpperCase(), 'hex');
    const rsaEncrypted = crypto.publicEncrypt(
        { key: params.rsaPublicKeyPem, padding: crypto.constants.RSA_PKCS1_PADDING },
        combo,
    );
    return {
        dataHex: rsaEncrypted.toString('hex').toUpperCase(),
        ivHex: params.aesIvHex.toUpperCase(),
    };
}