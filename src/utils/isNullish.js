export const isNullish = (obj) => {
    var flag = true
    if (obj === null) {
        flag = false
    } else {
        Object.values(obj).map((value) => {
            if (value === '' || value === null) {
                flag = false
            }
        })
    }

    return flag
}
