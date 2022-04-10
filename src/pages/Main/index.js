import {
    Box,
    Card,
    CardActionArea,
    Grid,
    Paper,
    Typography,
} from '@mui/material'
import Footer from 'components/Footer'
import LoanRepaymentProgress from 'components/LoanRepaymentProgress.js'
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'

import React from 'react'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import LoanCalendar from 'components/LoanCalendar'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <>
            <SuiBox mt={4}>
                <SuiBox mb={1.5}>
                    <Paper sx={{ height: '100%', padding: '30px' }}>
                        <LoanRepaymentProgress />
                    </Paper>
                </SuiBox>

                <SuiBox mb={1.5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={5}>
                            <SuiBox my={3} sx={{ paddingLeft: '5px' }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} sm={6} xl={6}>
                                        <Card>
                                            <CardActionArea
                                                sx={{ height: '150px' }}
                                            >
                                                <Link to="">
                                                    <SuiBox
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                            flexDirection:
                                                                'column',
                                                            justifyContent:
                                                                'center',
                                                            rowGap: '10px',
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <LocalAtmIcon fontSize="large" />
                                                        <SuiTypography
                                                            variant="h4"
                                                            color={'text'}
                                                            opacity={1}
                                                            textTransform="capitalize"
                                                        >
                                                            Yêu cầu vay
                                                        </SuiTypography>
                                                    </SuiBox>
                                                </Link>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} xl={6}>
                                        <Link to="./payment">
                                            {' '}
                                            <Card sx={{ height: '150px' }}>
                                                <CardActionArea
                                                    sx={{ height: '150px' }}
                                                >
                                                    <SuiBox
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                            flexDirection:
                                                                'column',
                                                            justifyContent:
                                                                'center',
                                                            rowGap: '10px',
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <LocalAtmIcon fontSize="large" />
                                                        <SuiTypography
                                                            variant="h4"
                                                            color={'text'}
                                                            opacity={1}
                                                            textTransform="capitalize"
                                                        >
                                                            Trả nợ
                                                        </SuiTypography>
                                                    </SuiBox>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={6} xl={6}>
                                        <Link to="./wallet">
                                            <Card sx={{ height: '150px' }}>
                                                <CardActionArea
                                                    sx={{ height: '150px' }}
                                                >
                                                    <SuiBox
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                            flexDirection:
                                                                'column',
                                                            justifyContent:
                                                                'center',
                                                            rowGap: '10px',
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <LocalAtmIcon fontSize="large" />
                                                        <SuiTypography
                                                            variant="h4"
                                                            color={'text'}
                                                            opacity={1}
                                                            textTransform="capitalize"
                                                        >
                                                            Ví
                                                        </SuiTypography>
                                                    </SuiBox>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={6} xl={6}>
                                        <Link to="./contract">
                                            <Card sx={{ height: '150px' }}>
                                                <CardActionArea
                                                    sx={{ height: '150px' }}
                                                >
                                                    {' '}
                                                    <SuiBox
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                            flexDirection:
                                                                'column',
                                                            justifyContent:
                                                                'center',
                                                            rowGap: '10px',
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <LocalAtmIcon fontSize="large" />
                                                        <SuiTypography
                                                            variant="h4"
                                                            color={'text'}
                                                            opacity={1}
                                                            textTransform="capitalize"
                                                        >
                                                            Xem hợp đồng
                                                        </SuiTypography>
                                                    </SuiBox>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </SuiBox>
                        </Grid>
                        <Grid item xs={12} lg={7}>
                            <LoanCalendar />
                        </Grid>
                    </Grid>
                </SuiBox>
            </SuiBox>

            {/* <Footer /> */}
        </>
    )
}
