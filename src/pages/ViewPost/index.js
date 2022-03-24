import {
    Container,
    Typography,
    Box,
    Grid,
    LinearProgress,
    Divider,
    List,
    Paper,
    TextField,
    CardMedia,
} from '@mui/material'
import SuiBox from 'components/SuiBox'
import SuiButton from 'components/SuiButton'
import SuiProgress from 'components/SuiProgress'
import SuiTypography from 'components/SuiTypography'
import YoutubeEmbed from 'components/YoutubeEmbed'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react'
import CardInvestDetail from '../../components/CardInvestDetail'
import ImageModal from '../../components/ImageModal'
import Tab from './components/Tab'

export default function ViewPost() {
    const [currentTab, setCurrentTab] = useState('one')

    const investor = {
        avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg',
        name: 'Ha Nguyen',
        money: '200.000',
    }

    const onChangeTab = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <>
            <Paper>
                <Tab onChangeTab={onChangeTab} currentTab={currentTab} />
                {currentTab === 'one' ? (
                    <SuiBox py={5}>
                        <SuiBox mb={3}>
                            <Container maxWidth="xxl">
                                <Box>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={8}>
                                            <YoutubeEmbed
                                                embedId="y182SJTws8U"
                                                height="480"
                                            />
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="regular"
                                                color="black"
                                            >
                                                  T: Vay học phí tháng 4
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Grid container spacing={1}>
                                                <Grid item xs="12" md="12">
                                                    <SuiProgress
                                                        value={50}
                                                        color="dark"
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs="12"
                                                    md="12"
                                                    sx={{ marginTop: '1rem' }}
                                                >
                                                    <SuiTypography
                                                        variant="h3"
                                                        color="black"
                                                    >
                                                        100.000 VND
                                                    </SuiTypography>
                                                    <SuiTypography variant="h6">
                                                        /23.500.000
                                                    </SuiTypography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs="6"
                                                    md="12"
                                                    sx={{ marginTop: '1rem' }}
                                                >
                                                    <SuiTypography
                                                        variant="h3"
                                                        color="text"
                                                    >
                                                        0
                                                    </SuiTypography>
                                                    <SuiTypography
                                                        variant="h6"
                                                        color="text"
                                                        fontWeight="regular"
                                                    >
                                                        nhà đầu tư
                                                    </SuiTypography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs="6"
                                                    md="12"
                                                    sx={{ marginTop: '1rem' }}
                                                >
                                                    <SuiTypography
                                                        variant="h3"
                                                        color="text"
                                                    >
                                                        60
                                                    </SuiTypography>
                                                    <SuiTypography
                                                        variant="h6"
                                                        color="text"
                                                        fontWeight="regular"
                                                    >
                                                        ngày trước khi hết hạn
                                                    </SuiTypography>
                                                </Grid>
                                                <Grid item xs="12" md="12">
                                                    <SuiButton
                                                        color="primary"
                                                        fullWidth
                                                        sx={{
                                                            marginTop: {
                                                                xs: 0,
                                                                lg: 19,
                                                            },
                                                        }}
                                                    >
                                                        Chỉnh sửa
                                                    </SuiButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Divider sx={{ margin: '20px 0px' }} />
                            </Container>
                        </SuiBox>
                    </SuiBox>
                ) : null}
            </Paper>
        </>
    )
}
