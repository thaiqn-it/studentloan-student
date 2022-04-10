import fx from 'money'
import axios from 'axios'

export const exchangeCurrency = (money) => {
    fx.base = 'USD'
    fx.rates = { USD: 1, VND: 22862.368541 }

    var value = fx.convert(money, { from: 'VND', to: 'USD' })
    return value
}
