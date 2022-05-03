import React from 'react'
import { Card, Grid, CardMedia, Box } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'

export default function PaymentTuitionItem() {
    return (
        <>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderRadius: '10',
                    height: 230,
                    maxHeight: 230,
                }}
            >
                <Box
                    width="35%"
                    component="img"
                    src="https://cdn.tgdd.vn/Files/2016/06/16/842694/fpt_1280x720-800-resize.jpg"
                    alt="FPT"
                    sx={{ m: 0, p: 0 }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        ml: 1,
                        rowGap: 1,
                        width: '100%',
                        p: 1,
                    }}
                >
                    <SuiTypography variant="h4" fontWeight="regular">
                        Trường đại học FPT
                    </SuiTypography>
                    <SuiTypography variant="button" fontWeight="regular">
                        Hồ sơ:{' '}
                        <SuiTypography variant="button">
                            01a40cb8-c342-495f-a40e-60e497582ef9
                        </SuiTypography>
                    </SuiTypography>
                    <SuiTypography variant="button" fontWeight="regular">
                        Trạng thái: {' '}
                        <SuiTypography variant="button">
                            Kêu gọi thành công
                        </SuiTypography>
                    </SuiTypography>

                    <SuiTypography variant="button" fontWeight="regular">
                        Ngày hoàn thành:{' '}
                        <SuiTypography variant="button">
                            12/12/2022
                        </SuiTypography>
                    </SuiTypography>

                    <Box
                        alignItems="baseline"
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            rowGap: 1,
                        }}
                    >
                        <SuiTypography variant="button" fontWeight="regular">
                            Số tiền:
                        </SuiTypography>

                        <SuiTypography variant="h4" sx={{ ml: 1 }} color="primary">
                            23.000.000 VND
                        </SuiTypography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <SuiButton color="dark" sx={{ float: 'right' }}>
                            Xác nhận
                        </SuiButton>
                    </Box>
                </Box>
            </Card>
        </>
    )
}
