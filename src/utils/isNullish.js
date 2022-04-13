export const isNullish = (obj) => {
    var flag = true
    Object.values(obj).map((value) => {
        if (value === '') {
            flag = false
        }
    })

    return flag
}
