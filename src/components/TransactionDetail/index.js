import React from 'react'
import SuiTypography from 'components/SuiTypography'
import SuiBox from 'components/SuiBox'
import { Box } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'

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
                        {/* <ContentPasteIcon /> */}

                        <SuiTypography variant="body2">
                            Mã giao dịch
                        </SuiTypography>

                        <SuiTypography variant="body2">
                            {transaction?.id}
                        </SuiTypography>
                    </Box>
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
                            color={transaction?.money < 0 ? 'error' : 'success'}
                            variant="h2"
                        >
                            {`${String(transaction?.money).replace(
                                /(\d)(?=(\d{3})+$)/g,
                                '$1,'
                            )} đ`}
                        </SuiTypography>

                        <SuiTypography variant="subtitle2">
                            {transaction?.date}
                        </SuiTypography>
                        <Box></Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '10px',

                            marginTop: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                padding: '10px',
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
                                <ContentPasteIcon />
                                <SuiTypography variant="body2">
                                    Phí giao dịch
                                </SuiTypography>
                            </Box>
                            <SuiTypography color="error">
                                {`${String(transaction?.transactionFee).replace(
                                    /(.)(?=(\d{3})+$)/g,
                                    '$1,'
                                )} đ`}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                padding: '10px',
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
                                <ContentPasteIcon />

                                <SuiTypography variant="body2">
                                    Trạng thái
                                </SuiTypography>
                            </Box>

                            <SuiTypography
                                color={
                                    transaction?.status === 'SUCCESS'
                                        ? 'success'
                                        : 'error'
                                }
                            >
                                {transaction?.status}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                padding: '10px',
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
                                {' '}
                                <ContentPasteIcon />
                                <SuiTypography variant="body2">
                                    Nguồn tiền
                                </SuiTypography>
                            </Box>

                            <SuiTypography>
                                {transaction?.senderName}
                            </SuiTypography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                padding: '10px',
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
                                <ContentPasteIcon />

                                <SuiTypography variant="body2">
                                    Người nhận
                                </SuiTypography>
                            </Box>

                            <SuiTypography>
                                {transaction?.recipientName}
                            </SuiTypography>
                        </Box>
                        <SuiTypography>Nội dung giao dịch</SuiTypography>
                        <Box sx={{ paddingLeft: '15px', marginTop: '5px' }}>
                            <SuiTypography variant="h5">
                                {transaction?.description}
                            </SuiTypography>
                        </Box>
                    </Box>
                </SuiBox>
            )}
        </>
    )
}
