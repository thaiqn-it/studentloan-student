export function fCurrency(text) {
    if (!text) {
        text = 0
    }
    return Number(text).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
    })
}

export function fCurrencyNoVND(text) {
    if (!text) {
        text = 0
    }
    return Number(text).toLocaleString('it-IT')
}

export function fProgress(number, total) {
    if (number > total) {
        return 100
    }
    return Number.parseFloat((number / total) * 100).toFixed(2)
}

export function fInvestPercent(number, total) {
    return Number.parseFloat((number / total) * 100).toFixed(0)
}
