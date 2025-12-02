// Validates input to allow only English, Persian, or Arabic digits
export function validateDigits(input: string): boolean {
    const digitRegex = /^[\u0030-\u0039\u06F0-\u06F9\u0660-\u0669]*$/;
    return digitRegex.test(input);
}

// Validates input to allow only English, Persian, or Arabic digits
export function formatToEnglishDigits(input: string): string {
    const digitMap: { [key: string]: string } = {
        '\u06F0': '0', // Persian ۰
        '\u06F1': '1', // Persian ۱
        '\u06F2': '2', // Persian ۲
        '\u06F3': '3', // Persian ۳
        '\u06F4': '4', // Persian ۴
        '\u06F5': '5', // Persian ۵
        '\u06F6': '6', // Persian ۶
        '\u06F7': '7', // Persian ۷
        '\u06F8': '8', // Persian ۸
        '\u06F9': '9', // Persian ۹
        '\u0660': '0', // Arabic ٠
        '\u0661': '1', // Arabic ١
        '\u0662': '2', // Arabic ٢
        '\u0663': '3', // Arabic ٣
        '\u0664': '4', // Arabic ٤
        '\u0665': '5', // Arabic ٥
        '\u0666': '6', // Arabic ٦
        '\u0667': '7', // Arabic ٧
        '\u0668': '8', // Arabic ٨
        '\u0669': '9', // Arabic ٩
        '\u0030': '0', // English 0
        '\u0031': '1', // English 1
        '\u0032': '2', // English 2
        '\u0033': '3', // English 3
        '\u0034': '4', // English 4
        '\u0035': '5', // English 5
        '\u0036': '6', // English 6
        '\u0037': '7', // English 7
        '\u0038': '8', // English 8
        '\u0039': '9'  // English 9
    };

    return input
        .split('')
        .map(char => digitMap[char] || '')
        .join('');
}