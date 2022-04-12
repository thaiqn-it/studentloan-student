import fx from 'money'
import axios from 'axios'

export const exchangeCurrency = async (money) => {
    try {
        const data = await axios.get(
            'https://openexchangerates.org/api//latest.json?app_id=a000e28ba6634a789d21e69912092c3e',
            {
                headers: { 'Access-Control-Allow-Origin': '*' },
            }
        )

        fx.rates = data.rates
        fx.base = data.base
        var value = fx.convert(money, { from: 'VND', to: 'USD' })
        return value
    } catch (e) {
        console.log(e)
        fx.base = 'USD'
        fx.rates = { USD: 1, VND: 22862.368541 }

        return fx.convert(money, { from: 'VND', to: 'USD' })
    }
}
