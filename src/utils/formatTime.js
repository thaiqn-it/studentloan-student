import {
    format,
    formatDistanceToNow,
    formatDistanceToNowStrict,
} from 'date-fns'

// ----------------------------------------------------------------------

export function fDate(date) {
    var returnDate = ''
    if (date) {
        returnDate = format(new Date(date), 'dd/MM/yyyy')
    }
    return returnDate
}

export function fDateTime(date) {
    return format(new Date(date), 'dd/MM/yyyy HH:mm')
}

export function fDateTimeSuffix(date) {
    if (date) {
        return format(new Date(date), 'dd/MM/yyyy hh:mm p')
    } else {
        return ''
    }
}

export function fToNow(date) {
    return formatDistanceToNow(new Date(date), {
        addSuffix: false,
        locale: 'vi-VN',
    })
}

export function fDateToNow(date) {
    return formatDistanceToNowStrict(new Date(date), {
        unit: 'day',
        addSuffix: false,
    })
}

export function fToNowNumber(date) {
    var day = new Date(date)
    var day2 = new Date()
    // var realValue = diff_months(day, day2)
    return Math.floor((day - day2) / (24 * 3600 * 1000) + 1)
}

// function diff_months(dt2, dt1) {
//     var diff = (dt2.getTime() - dt1.getTime()) / 1000
//     diff /= 60 * 60 * 24 * 7 * 4
//     return Math.abs(Math.round(diff))
// }

export function fDisplayDate(date) {
    var returnDate = ''
    if (date) {
        returnDate = format(new Date(date), 'yyyy-MM-dd')
    }
    return returnDate
}

export function fGetCurrentMonth() {
    var returnMonth = format(new Date(), 'YYYY-MM')
    return '2022-02'
}
