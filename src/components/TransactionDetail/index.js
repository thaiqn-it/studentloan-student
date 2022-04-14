import React from 'react'
import SuiTypography from 'components/SuiTypography'
import SuiBox from 'components/SuiBox'
import { Box } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { fCurrency } from 'utils/formatNumber'
import { fDateTimeMin } from 'utils/formatTime'

export default function TransactionDetail({ transaction }) {
    return (
        <>
            {transaction && (
                <SuiBox pt={3} px={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: '30px',
                        }}
                    >
                        <SuiTypography variant="body2" fontWeight="bold">
                            Mã giao dịch
                        </SuiTypography>

                        <SuiTypography variant="body2">
                            {transaction?.id}
                        </SuiTypography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '10px',
                        }}
                    >
                        <Box
                            sx={{
                                marginTop: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                rowGap: '10px',
                            }}
                        >
                            <SuiTypography
                                color={
                                    transaction?.type === 'TRANSFER'
                                        ? 'error'
                                        : 'success'
                                }
                                variant="h3"
                            >
                                {fCurrency(transaction?.money)}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '15px',
                                marginTop: '20px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexDirection: 'row',
                                }}
                            >
                                <SuiTypography variant="h6">
                                    Thời gian
                                </SuiTypography>
                            </Box>

                            <SuiTypography variant="subtitle2">
                                {fDateTimeMin(transaction?.createdAt)}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '15px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexDirection: 'row',
                                }}
                            >
                                <SuiTypography variant="h6">
                                    Phí giao dịch
                                </SuiTypography>
                            </Box>
                            <SuiTypography color="error" variant="h5">
                                {`${String(transaction?.transactionFee).replace(
                                    /(.)(?=(\d{3})+$)/g,
                                    '$1,'
                                )} đ`}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '15px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexDirection: 'row',
                                }}
                            >
                                <SuiTypography variant="h6">
                                    Trạng thái
                                </SuiTypography>
                            </Box>

                            <SuiTypography
                                color={
                                    transaction?.status === 'SUCCESS'
                                        ? 'success'
                                        : 'error'
                                }
                                variant="h6"
                            >
                                {transaction?.status}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '15px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexDirection: 'row',
                                }}
                            >
                                <SuiTypography variant="h6">
                                    Nguồn tiền
                                </SuiTypography>
                            </Box>

                            <SuiTypography variant="h6">
                                {transaction?.senderName}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '15px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexDirection: 'row',
                                }}
                            >
                                <SuiTypography variant="h6">
                                    Người nhận
                                </SuiTypography>
                            </Box>

                            <SuiTypography variant="h6">
                                {transaction?.recipientName}
                            </SuiTypography>
                        </Box>
                    </Box>
                    <SuiTypography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ mt: 5 }}
                    >
                        Nội dung giao dịch
                    </SuiTypography>
                    <Box sx={{ marginTop: '5px' }}>
                        <SuiTypography variant="h6">
                            {transaction?.description}
                        </SuiTypography>
                    </Box>
                </SuiBox>
            )}
        </>
    )
}
