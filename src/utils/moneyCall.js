export function getOption(min, max) {
    var data = []
    for (let i = Number(min); i < Number(max) + 1; i++) {
        var num = i
        var object = {
            id: i,
            label: num.toString(),
        }
        data.push(object)
    }
    return data
}
