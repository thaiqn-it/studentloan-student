import { LOAN_STATUS_MESSAGE } from './enum'

export function renderStatus(status) {
    var statusObject = {
        status: 'Nháp',
        color: 'dark',
        message: '',
    }

    switch (status) {
        case 'DRAFT':
            statusObject.color = 'dark'
            statusObject.status = 'Nháp'
            statusObject.message = LOAN_STATUS_MESSAGE.DRAFT
            break
        case 'DELETED':
            statusObject.color = 'secondary'
            statusObject.status = 'Đã xóa'
            statusObject.message = LOAN_STATUS_MESSAGE.DELETED
            break
        case 'WAITING':
            statusObject.color = 'warning'
            statusObject.status = 'Đang chờ duyệt'
            statusObject.message = LOAN_STATUS_MESSAGE.WAITING
            break
        case 'REJECTED':
            statusObject.color = 'error'
            statusObject.status = 'Bị từ chối'
            statusObject.message = LOAN_STATUS_MESSAGE.REJECTED
            break
        case 'FUNDING':
            statusObject.color = 'primary'
            statusObject.status = 'Đang kêu gọi'
            statusObject.message = LOAN_STATUS_MESSAGE.FUNDING
            break
        case 'FAIL':
            statusObject.color = 'error'
            statusObject.status = 'Kêu gọi thất bại'
            statusObject.message = LOAN_STATUS_MESSAGE.FAIL
            break
        case 'ONGOING':
            statusObject.color = 'info'
            statusObject.status = 'Đang thanh toán nợ'
            statusObject.message = LOAN_STATUS_MESSAGE.ONGOING
            break
        case 'FINISH':
            statusObject.color = 'success'
            statusObject.status = 'Thành công'
            statusObject.message = LOAN_STATUS_MESSAGE.FINISH
            break
        case 'INCOMPLETE':
            statusObject.color = 'error'
            statusObject.status = 'Không thể trả'
            statusObject.message = LOAN_STATUS_MESSAGE.INCOMPLETE
            break
    }
    return statusObject
}
