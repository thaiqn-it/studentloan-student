export function million(min, max) {
    var data = []
    for (let i = min; i < max + 1; i++) {
        var num = i
        var object = {
            id: i,
            label: num.toString(),
        }
        data.push(object)
    }
    return data
}
