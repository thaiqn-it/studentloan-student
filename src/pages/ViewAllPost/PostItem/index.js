import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import SuiProgress from 'components/SuiProgress'
import { Grid, Link } from '@mui/material'

import {
    fCurrency,
    fCurrencyNoVND,
    fProgress,
} from '..//..//..//utils/formatNumber'
import { fDate, fDateToNow, fToNow, fToNowNumber } from '..//..//..//utils/formatTime'
import { getThumbnail } from 'utils/youtube'
import { renderStatus } from 'utils/renderStatus'

export default function PostItem(props) {
    const { loan } = props

    function status() {
        var statusObject = renderStatus(loan.LoanHistories[0].type)

        return (
            <SuiButton
                color={statusObject.color}
                size="small"
                sx={{
                    pointerEvents: 'none',
                    float: 'right',
                    borderRadius: '0',
                }}
            >
                {statusObject.status}
            </SuiButton>
        )
    }

    return (
        <Link href={`/trang-chu/ho-so/xem/${loan.id}`}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '0',
                    maxHeight: '40rem',
                }}
            >
                <SuiBox position="relative" sx={{ width: '100%' }}>
                    <CardMedia
                        src={getThumbnail(loan?.LoanMedia[0]?.imageUrl)}
                        component="img"
                        sx={{
                            margin: 0,
                            height: '10rem',
                            width: '100%',
                            borderRadius: '0',
                            position: 'absolute',
                        }}
                    />
                    {status()}
                </SuiBox>

                <SuiBox
                    p={2}
                    sx={{ border: '0.1rem solid #DCDEDD' }}
                    mt="7.5rem"
                >
                    <SuiBox mb={1}>
                        <SuiTypography
                            variant="h5"
                            textTransform="capitalize"
                            fontWeight="regular"
                        >
                            {loan.title ? loan.title : 'Chưa điền tiêu đề'}
                        </SuiTypography>
                    </SuiBox>
                    <SuiBox mb={2} lineHeight={0}>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                            sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1,
                            }}
                        >
                            {loan.description
                                ? loan.description
                                : 'Chưa điền nội dung'}
                        </SuiTypography>
                    </SuiBox>

                    <SuiBox
                        mb={1}
                        display="flex"
                        justifyContent="space-between"
                    >
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            textTransform="none"
                        >
                            Số tiền vay:
                        </SuiTypography>
                        <SuiTypography variant="button" textTransform="none">
                            {fCurrency(loan.totalMoney)}
                        </SuiTypography>
                    </SuiBox>

                    <SuiBox display="flex" justifyContent="space-between">
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            textTransform="none"
                        >
                            Ngày hết hạn:
                        </SuiTypography>
                        <SuiTypography variant="button" textTransform="none">
                            {fDate(loan.postExpireAt)}
                        </SuiTypography>
                    </SuiBox>

                    <SuiProgress
                        value={fProgress(
                            loan.AccumulatedMoney,
                            loan.totalMoney
                        )}
                        label
                        color="primary"
                    />

                    <SuiBox mt={3}>
                        <Grid container>
                            <Grid item xs={4} md={4}>
                                <SuiTypography
                                    variant="h5"
                                    textTransform="none"
                                    color="primary"
                                >
                                    {fCurrencyNoVND(loan.AccumulatedMoney)}
                                </SuiTypography>
                                <SuiTypography
                                    variant="button"
                                    textTransform="none"
                                    color="text"
                                    sx={{ float: 'left' }}
                                >
                                    Số tiền đã đầu tư
                                </SuiTypography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <SuiTypography
                                    variant="h5"
                                    textTransform="none"
                                    align="right"
                                >
                                    {loan.InvestorCount}
                                </SuiTypography>
                                <SuiTypography
                                    variant="button"
                                    textTransform="none"
                                    color="text"
                                    sx={{ float: 'right' }}
                                >
                                    Người đầu tư
                                </SuiTypography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <SuiTypography
                                    variant="h5"
                                    textTransform="none"
                                    align="right"
                                    color={fToNowNumber(loan.postExpireAt) < 6 ? "error": "dark"}
                                >
                                    {fToNowNumber(loan.postExpireAt)}
                                </SuiTypography>
                                <SuiTypography
                                    variant="button"
                                    textTransform="none"
                                    color="text"
                                    sx={{ float: 'right' }}
                                >
                                    Số ngày còn lại
                                </SuiTypography>
                            </Grid>
                        </Grid>
                    </SuiBox>
                </SuiBox>
            </Card>
        </Link>
    )
}
