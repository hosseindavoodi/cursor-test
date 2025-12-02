export const formatPrice = (amount: number, currency = 'IRR', locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};