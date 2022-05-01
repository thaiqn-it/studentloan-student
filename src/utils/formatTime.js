import { ElevatorSharp } from '@mui/icons-material'
import {
    format,
    formatDistanceToNow,
    formatDistanceToNowStrict,
    add,
    differenceInMonths,
} from 'date-fns'

import vi from 'date-fns/locale/vi'

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

export function fDateTimeMin(date) {
    if (date) {
        return format(new Date(date), 'dd/MM/yyyy HH:mm:ss')
    } else {
        return ''
    }
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
        locale: vi,
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
    var value = Math.floor((day - day2) / (24 * 3600 * 1000) + 1)
    if (value < 0) value = 0
    return value
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

export function fDisplayMonth(date) {
    var returnDate = ''
    if (date === null) {
        date = new Date()
    }
    returnDate = format(new Date(date), 'yyyy-MM')
    return returnDate
}

export function addMonth(date, duration) {
    if (date === null) {
        date = new Date()
    }
    return format(add(date, { months: duration }), 'yyyy-MM-dd')
}

// export function getDifferenceMonth(dateLeft,dateRight) {
//     return differenceInMonths(dateLeft, dateRight)
// }

// export function fGetCurrentMonth() {
//     var returnMonth = format(new Date(), 'YYYY-MM')
//     return '2022-02'
// }

export function fTimeDiff(date1, date2, interval) {
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7
    date1 = new Date(date1)

    // date2 = new Date(date2)
    var timediff = date2 - date1

    if (isNaN(timediff)) return NaN
    switch (interval) {
        case 'years':
            return date2.getFullYear() - date1.getFullYear()
        case 'months':
            return (
                date2.getFullYear() * 12 +
                date2.getMonth() -
                (date1.getFullYear() * 12 + date1.getMonth())
            )
        case 'weeks':
            return Math.floor(timediff / week)
        case 'days':
            return Math.floor(timediff / day)
        case 'hours':
            return Math.floor(timediff / hour)
        case 'minutes':
            return Math.floor(timediff / minute)
        case 'seconds':
            return Math.floor(timediff / second)
        default:
            return undefined
    }
}
