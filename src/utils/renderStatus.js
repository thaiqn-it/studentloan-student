import {
    LOAN_STATUS_MESSAGE,
    USER_STATUS,
    LOAN_STATUS,
    USER_STATUS_MESSAGE,
    TUTOR_STATUS_MESSAGE,
} from './enum'

export function renderStatus(status) {
    var statusObject = {
        status: 'Nháp',
        color: 'dark',
        message: '',
        icon: 'drafts',
    }

    switch (status) {
        case LOAN_STATUS.DRAFT:
            statusObject.color = 'dark'
            statusObject.status = 'Nháp'
            statusObject.message = LOAN_STATUS_MESSAGE.DRAFT
            statusObject.icon = 'drafts'
            break
        case LOAN_STATUS.DELETED:
            statusObject.color = 'secondary'
            statusObject.status = 'Đã xóa'
            statusObject.message = LOAN_STATUS_MESSAGE.DELETED
            statusObject.icon = 'delete'
            break
        case LOAN_STATUS.WAITING:
            statusObject.color = 'warning'
            statusObject.status = 'Đang chờ duyệt'
            statusObject.message = LOAN_STATUS_MESSAGE.WAITING
            statusObject.icon = 'access_time'
            break
        case LOAN_STATUS.REJECTED:
            statusObject.color = 'error'
            statusObject.status = 'Từ chối'
            statusObject.message = LOAN_STATUS_MESSAGE.REJECTED
            statusObject.icon = 'do_disturb_on'
            break
        case LOAN_STATUS.FUNDING:
            statusObject.color = 'primary'
            statusObject.status = 'Đang kêu gọi'
            statusObject.message = LOAN_STATUS_MESSAGE.FUNDING
            statusObject.icon = 'monetization_on'
            break
        case LOAN_STATUS.CANCEL:
            statusObject.color = 'warning'
            statusObject.status = 'Thu hồi'
            statusObject.message = LOAN_STATUS_MESSAGE.CANCEL
            statusObject.icon = 'replay'
            break
        case LOAN_STATUS.FAIL:
            statusObject.color = 'error'
            statusObject.status = 'Không thành công'
            statusObject.message = LOAN_STATUS_MESSAGE.FAIL
            statusObject.icon = 'cancel'
            break
        case LOAN_STATUS.ONGOING:
            statusObject.color = 'info'
            statusObject.status = 'Đang thanh toán'
            statusObject.message = LOAN_STATUS_MESSAGE.ONGOING
            statusObject.icon = 'play_circle_filled'
            break
        case LOAN_STATUS.FINISH:
            statusObject.color = 'success'
            statusObject.status = 'Thành công'
            statusObject.message = LOAN_STATUS_MESSAGE.FINISH
            statusObject.icon = 'check_circle'
            break
        case LOAN_STATUS.INCOMPLETE:
            statusObject.color = 'error'
            statusObject.status = 'Không thanh toán'
            statusObject.message = LOAN_STATUS_MESSAGE.INCOMPLETE
            statusObject.icon = 'do_disturb_on'
            break
    }
    return statusObject
}

export function renderUserStatus(status) {
    var statusObject = {
        status: 'Chưa xác thực',
        color: 'error',
        message: '',
    }

    switch (status) {
        case USER_STATUS.VERIFIED:
            statusObject.color = 'primary'
            statusObject.status = USER_STATUS_MESSAGE.VERIFIED
            statusObject.message = USER_STATUS_MESSAGE.VERIFIED
            break
        case USER_STATUS.UNVERIFIED:
            statusObject.color = 'info'
            statusObject.status = USER_STATUS_MESSAGE.UNVERIFIED
            statusObject.message = USER_STATUS_MESSAGE.UNVERIFIED
            break
        case USER_STATUS.PENDING:
            statusObject.color = 'warning'
            statusObject.status = USER_STATUS_MESSAGE.PENDING
            statusObject.message = USER_STATUS_MESSAGE.PENDING
            break
        case USER_STATUS.BAN:
            statusObject.color = 'error'
            statusObject.status = USER_STATUS_MESSAGE.BAN
            statusObject.message = USER_STATUS_MESSAGE.BAN
            break
    }
    return statusObject
}

export function renderTutorStatus(status) {
    var statusObject = {
        status: 'Chưa xác thực',
        color: 'error',
        message: '',
    }

    switch (status) {
        case USER_STATUS.VERIFIED:
            statusObject.color = 'primary'
            statusObject.status = TUTOR_STATUS_MESSAGE.VERIFIED
            statusObject.message = TUTOR_STATUS_MESSAGE.VERIFIED
            break
        case USER_STATUS.UNVERIFIED:
            statusObject.color = 'error'
            statusObject.status = TUTOR_STATUS_MESSAGE.UNVERIFIED
            statusObject.message = TUTOR_STATUS_MESSAGE.UNVERIFIED
            break
    }
    return statusObject
}

export function paramToType(param) {
    var value = ''
    if (param != '') {
        switch (param) {
            case 'dang-cho-duyet':
                value = LOAN_STATUS.WAITING
                break
            case 'dang-keu-goi':
                value = LOAN_STATUS.FUNDING
                break
            case 'thanh-cong':
                value = LOAN_STATUS.FINISH
                break

            case 'dang-thanh-toan':
                value = LOAN_STATUS.ONGOING
                break
            case 'tat-ca':
                value = null
                break
            default:
                value = ''
        }
    }

    return value
}
