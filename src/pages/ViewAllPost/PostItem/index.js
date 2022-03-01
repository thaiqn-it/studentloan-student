import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'
import SuiAvatar from 'components/SuiAvatar'
import SuiProgress from 'components/SuiProgress'

import { Link } from 'react-router-dom'
import { Divider, Grid } from '@mui/material'

export default function PostItem() {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'none',
                // boxShadow: 'none',
                // overflow: 'visible',
            }}
        >
            <SuiBox position="relative" width="100.25%">
                <CardMedia
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    component="img"
                    sx={{
                        // maxWidth: '100%',
                        margin: 0,
                        height: '15rem',
                        width: '100%',
                    }}
                />
            </SuiBox>

            <SuiBox pt={3} px={0.5} padding={2}>
                {/* <SuiBox display="flex" justifyContent="space-between">
                    <SuiTypography
                        variant="button"
                        fontWeight="medium"
                        textTransform="none"
                        textGradient
                    >
                        Ngày tạo: 24/12/2021
                    </SuiTypography>

                    <SuiTypography
                        variant="button"
                        fontWeight="medium"
                        textTransform="none"
                        textGradient
                    >
                        Ngày hết hạn: 24/6/2022
                    </SuiTypography>
                </SuiBox> */}

                <SuiProgress value={50} label color="primary" />

                <SuiBox mb={3} mt={3}>
                    <Grid container>
                        <Grid item xs={4} md={4}>
                            <SuiTypography variant="h5" textTransform="none">
                                122.850.000
                            </SuiTypography>
                            <SuiTypography
                                variant="button"
                                textTransform="none"
                                color="text"
                            >
                                Số tiền
                            </SuiTypography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <SuiTypography variant="h5" textTransform="none">
                                55
                            </SuiTypography>
                            <SuiTypography
                                variant="button"
                                textTransform="none"
                                color="text"
                            >
                                Người đầu tư
                            </SuiTypography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <SuiTypography variant="h5" textTransform="none">
                                180
                            </SuiTypography>
                            <SuiTypography
                                variant="button"
                                textTransform="none"
                                color="text"
                            >
                                Số ngày còn lại
                            </SuiTypography>
                        </Grid>
                    </Grid>
                    {/* <SuiTypography
                        variant="h6"
                        textTransform="capitalize"
                        align="right"
                    >
                        122.850.000 VND
                    </SuiTypography> */}
                </SuiBox>

                <Divider variant="fullWidth" />

                <SuiBox mb={1} mt={1}>
                    <SuiTypography
                        component={Link}
                        // to={action.route}
                        variant="h5"
                        textTransform="capitalize"
                    >
                        Vay học phí cho 9 kỳ
                    </SuiTypography>
                </SuiBox>
                <SuiBox mb={2} lineHeight={0}>
                    <SuiTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                    >
                        Tôi đang là sinh viên đai học FPT, tôi đang cần xin vay
                        để đóng học phí từ kỳ 1 đến kỳ 9
                    </SuiTypography>
                </SuiBox>

                <SuiBox mb={1} display="flex" justifyContent="space-between">
                    <SuiTypography
                        variant="button"
                        fontWeight="regular"
                        textTransform="none"
                    >
                        Số tiền vay:
                    </SuiTypography>
                    <SuiTypography variant="button" textTransform="none">
                        245.700.000 VND
                    </SuiTypography>
                </SuiBox>

                <SuiBox mb={1} display="flex" justifyContent="space-between">
                    <SuiTypography
                        variant="button"
                        fontWeight="regular"
                        textTransform="none"
                    >
                        Ngày tạo:
                    </SuiTypography>
                    <SuiTypography variant="button" textTransform="none">
                        24/12/2021
                    </SuiTypography>
                </SuiBox>

                <SuiBox mb={3} display="flex" justifyContent="space-between">
                    <SuiTypography
                        variant="button"
                        fontWeight="regular"
                        textTransform="none"
                    >
                        Ngày hết hạn:
                    </SuiTypography>
                    <SuiTypography variant="button" textTransform="none">
                        24/6/2022
                    </SuiTypography>
                </SuiBox>

                <SuiBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <SuiButton
                        component={Link}
                        to="/dashboard/view-post"
                        variant="outlined"
                        size="small"
                        color="primary"
                    >
                        Xem
                    </SuiButton>
                </SuiBox>
            </SuiBox>
        </Card>
    )
}
