import { LOAN_STATUS_MESSAGE } from './enum'

export function renderStatus(status) {
    var statusObject = {
        status: 'Nháp',
        color: 'dark',
        message: '',
        icon: "drafts",
    }

    switch (status) {
        case 'DRAFT':
            statusObject.color = 'dark'
            statusObject.status = 'Nháp'
            statusObject.message = LOAN_STATUS_MESSAGE.DRAFT
            statusObject.icon = "drafts"
            break
        case 'DELETED':
            statusObject.color = 'secondary'
            statusObject.status = 'Đã xóa'
            statusObject.message = LOAN_STATUS_MESSAGE.DELETED
            statusObject.icon = "delete"
            break
        case 'WAITING':
            statusObject.color = 'warning'
            statusObject.status = 'Đang chờ duyệt'
            statusObject.message = LOAN_STATUS_MESSAGE.WAITING
            statusObject.icon = "access_time"
            break
        case 'REJECTED':
            statusObject.color = 'error'
            statusObject.status = 'Bị từ chối'
            statusObject.message = LOAN_STATUS_MESSAGE.REJECTED
            statusObject.icon = "do_disturb_on"
            break
        case 'FUNDING':
            statusObject.color = 'primary'
            statusObject.status = 'Đang kêu gọi'
            statusObject.message = LOAN_STATUS_MESSAGE.FUNDING
            statusObject.icon = "monetization_on"
            break
        case 'FAIL':
            statusObject.color = 'error'
            statusObject.status = 'Kêu gọi thất bại'
            statusObject.message = LOAN_STATUS_MESSAGE.FAIL
            statusObject.icon = "cancel"
            break
        case 'ONGOING':
            statusObject.color = 'info'
            statusObject.status = 'Đang thanh toán nợ'
            statusObject.message = LOAN_STATUS_MESSAGE.ONGOING
            statusObject.icon = "play_circle_filled"
            break
        case 'FINISH':
            statusObject.color = 'success'
            statusObject.status = 'Thành công'
            statusObject.message = LOAN_STATUS_MESSAGE.FINISH
            statusObject.icon = "check_circle"
            break
        case 'INCOMPLETE':
            statusObject.color = 'error'
            statusObject.status = 'Không thể trả'
            statusObject.message = LOAN_STATUS_MESSAGE.INCOMPLETE
             statusObject.icon = "do_disturb_on"
            break
    }
    return statusObject
}
