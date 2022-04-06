export function fCurrency(text) {
    return Number(text).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
    })
}

export function fCurrencyNoVND(text) {
    return Number(text).toLocaleString('it-IT')
}

export function fProgress(number, total) {
    return Number.parseFloat((number / total) * 100).toFixed(2)
}

export function fInvestPercent(number, total) {
  return Number.parseFloat((number / total) * 100).toFixed(0)
}