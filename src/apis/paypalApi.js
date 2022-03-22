const { defaultInstance } = require('apis')

const topUp = (money) => {
    return defaultInstance.post('/paypal/top-up', { money: money })
}

const transfer = (data) => {
    return defaultInstance.post('/paypal/transfer', { ...data })
}

export const paypalApi = { topUp , transfer}