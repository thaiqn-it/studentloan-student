exports.LOAN_STATUS_MESSAGE = {
    DRAFT: 'Hồ sơ đang ở dạng nháp',
    DELETED: 'Hồ sơ đã bị xóa',
    WAITING: 'Hồ sơ đang chờ xét duyệt',
    REJECTED: 'Hồ sơ đã bị từ chối',
    FUNDING: 'Hồ sơ đã được duyệt và đang kêu gọi',
    FAIL: 'Hồ sơ kêu gọi không thành công',
    ONGOING: 'Hồ sơ đang trong quá trình thanh toán',
    FINISH: 'Hồ sơ đã hoàn thành',
    INCOMPLETE: 'Người vay không có khả năng thanh toán',
    CANCEL: 'Hồ sơ thu hồi bởi người tạo',
}

exports.USER_STATUS_MESSAGE = {
    VERIFIED: 'Đã xác thực',
    UNVERIFIED: 'Chưa xác thực',
    PENDING: 'Đang chờ xác thực',
    BAN: 'Bị chặn',
}

exports.TUTOR_STATUS_MESSAGE = {
    VERIFIED: 'Đang sử dụng',
    UNVERIFIED: 'Chưa xác thực',
}

exports.LOAN_STATUS = {
    DRAFT: 'DRAFT',
    DELETED: 'DELETED',
    WAITING: 'WAITING',
    REJECTED: 'REJECTED',
    FUNDING: 'FUNDING',
    FAIL: 'FAIL',
    ONGOING: 'ONGOING',
    FINISH: 'FINISH',
    CANCEL: 'CANCEL',
    INCOMPLETE: 'INCOMPLETE',
}

exports.LOAN_SCHEDULE_STATUS = {
    ONGOING: 'ONGOING',
    COMPLETED: 'COMPLETED',
    INCOMPLETE: 'INCOMPLETE',
}

exports.LOAN_SCHEDULE_TYPE = {
    STP: 'STUDYING_PAID',
    GP: 'GRADUATED_PAID',
}

exports.USER_TYPE = {
    STUDENT: 'STUDENT',
    INVESTOR: 'INVESTOR',
    ADMIN: 'ADMIN',
}

exports.USER_STATUS = {
    VERIFIED: 'VERIFIED',
    UNVERIFIED: 'UNVERIFIED',
    PENDING: 'PENDING',
    BAN: 'BAN',
}

exports.WALLET_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.WALLET_TYPE = {
    TOPUP: 'TOPUP',
    WITHDRAW: 'WITHDRAW',
    TRANSFER: 'TRANSFER',
    RECEIVE: 'RECEIVE',
}
exports.CONTRACT_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.TRANSACTION_STATUS = {
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
}
exports.INVESTMENT_STATUS = {
    PENDING: 'PENDING',
    CANCEL: 'CANCEL',
    INVESTED: 'INVESTED',
    FAIL: 'FAIL',
}

exports.INVESTOR_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.STUDENT_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.ACHIEVEMENT_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.CONTRACT_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.LOANMEDIA_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.LOANMEDIA_TYPE = {
    STUDENTCERT: 'STUDENTCERT',
    DEMANDNOTE: 'DEMANDNOTE',
    VIDEO: 'VIDEO',
    REPORT: 'REPORT',
}

exports.TUTOR_STATUS = {
    VERIFIED: 'VERIFIED',
    UNVERIFIED: 'UNVERIFIED',
    DELETED: 'DELETED',
}

exports.ADMIN_STATUS = {
    VERIFIED: 'VERIFIED',
    UNVERIFIED: 'UNVERIFIED',
}

exports.SCHOOL_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}
exports.MAJOR_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}
exports.SCHOOLMAJOR_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.REPORT_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.SYSTEM_CONFIG_TYPE = {
    TF: 'TRANSACTION_FEE',
    FF: 'FIXED_FEE',
    INTEREST: 'INTEREST',
}

exports.NOTIFICATION_STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
}

exports.NOTIFICATION_TYPE = {
    USER: 'USER',
    LOAN: 'LOAN',
}
