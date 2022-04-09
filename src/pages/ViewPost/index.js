import { Container, Box, Grid, Divider, Paper, CardMedia } from '@mui/material'
import ImageCard from 'components/ImageCard'
import SuiBox from 'components/SuiBox'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiProgress from 'components/SuiProgress'
import SuiTypography from 'components/SuiTypography'
import YoutubeEmbed from 'components/YoutubeEmbed'
import React, { useEffect, useState } from 'react'
import TabInfo from './components/TabInfo'
import PaymentPlanPage from './PaymentPlanPage'

import TimelineList from 'examples/Timeline/TimelineList'
import TimelineItem from 'examples/Timeline/TimelineItem'

import { useParams } from 'react-router-dom'
import { loanApi } from '../../apis/loanApi'
import { fCurrency } from 'utils/formatNumber'
import { fCurrencyNoVND } from 'utils/formatNumber'
import { fToNowNumber } from 'utils/formatTime'
import { getThumbnail } from 'utils/youtube'
import InvestorPage from './InvestorPage'
import ReportPage from './ReportPage'
import { fProgress } from 'utils/formatNumber'
import { setDocTitle } from 'utils/dynamicDocTitle'

import { useHistory } from 'react-router-dom'
import Loading from 'components/Loading'
import { renderStatus } from 'utils/renderStatus'

export default function ViewPost() {
    const { id } = useParams()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [currentTab, setCurrentTab] = useState('1')
    const [loan, setLoan] = useState({})

    useEffect(() => {
        setIsLoading(true)
        loanApi
            .getLoanById(id)
            .then((res) => {
                setLoan(res.data.loan, 'view')
                setDocTitle(res.data.loan.title)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                history.push({
                    pathname: '/dashboard/404',
                    state: { content: 'Không tìm thấy hồ sơ' },
                })
            })
    }, [])

    const onChangeTab = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <>
            <Paper sx={{ boxShadow: 0 }}>
                <TabInfo onChangeTab={onChangeTab} currentTab={currentTab} />
                {isLoading ? <Loading /> : null}
                {currentTab === '1' ? (
                    <SuiBox py={5}>
                        <SuiBox mb={3}>
                            <Container maxWidth="xxl">
                                <Box>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={9}>
                                            {loan?.LoanMedia?.filter(
                                                (item) => item.type === 'VIDEO'
                                            ).length ? (
                                                loan?.LoanMedia?.filter(
                                                    (item) =>
                                                        item.type === 'VIDEO'
                                                ).map((item) => (
                                                    <YoutubeEmbed
                                                        url={item.imageUrl}
                                                        height="480"
                                                    />
                                                ))
                                            ) : (
                                                <CardMedia
                                                    sx={{
                                                        maxWidth: '100%',
                                                        height: '100%',
                                                        margin: 0,
                                                    }}
                                                    component="img"
                                                    image={getThumbnail(null)}
                                                />
                                            )}

                                            <SuiTypography
                                                variant="h5"
                                                fontWeight="regular"
                                                color="black"
                                                align="center"
                                            >
                                                T: {loan.title}
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Grid container spacing={1}>
                                                <Grid item xs="12" md="12">
                                                    <SuiProgress
                                                        value={fProgress(
                                                            loan.AccumulatedMoney,
                                                            loan.totalMoney
                                                        )}
                                                        label
                                                        color="primary"
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs="12"
                                                    md="12"
                                                    sx={{
                                                        marginTop: '1rem',
                                                    }}
                                                >
                                                    <SuiTypography
                                                        variant="h4"
                                                        color="black"
                                                    >
                                                        {fCurrency(
                                                            loan.AccumulatedMoney
                                                        )}
                                                    </SuiTypography>
                                                    <SuiTypography variant="h6">
                                                        /
                                                        {fCurrencyNoVND(
                                                            loan.totalMoney
                                                        )}
                                                    </SuiTypography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs="6"
                                                    md="12"
                                                    sx={{
                                                        marginTop: '1rem',
                                                    }}
                                                >
                                                    <SuiTypography
                                                        variant="h3"
                                                        color="text"
                                                    >
                                                        {loan.InvestorCount}
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
                                                    sx={{
                                                        marginTop: '1rem',
                                                    }}
                                                >
                                                    <SuiTypography
                                                        variant="h3"
                                                        color="text"
                                                    >
                                                        {fToNowNumber(
                                                            loan.postExpireAt
                                                        )}
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
                                                        href={`/dashboard/loan/edit/${id}`}
                                                        sx={{
                                                            marginTop: {
                                                                xs: 0,
                                                                lg: 16,
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

                                <Divider sx={{ my: 5 }} />
                                <Box mb={3}>
                                    <SuiTypography color="black">
                                        Trạng thái
                                    </SuiTypography>
                                    <TimelineList title="">
                                        <TimelineItem
                                            color="dark"
                                            icon="drafts"
                                            title="Hồ sơ đang ở dạng nháp"
                                            dateTime="22 DEC 7:20 PM"
                                            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                            badges={['DRAFT']}
                                        />
                                        <TimelineItem
                                            color="secondary"
                                            icon="delete"
                                            title="New order #1832412"
                                            dateTime="21 DEC 11 PM"
                                            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                            badges={['DELETED']}
                                        />
                                        <TimelineItem
                                            color="warning"
                                            icon="access_time"
                                            title="Server payments for April"
                                            dateTime="21 DEC 9:34 PM"
                                            description={null}
                                            badges={['WAITING']}
                                        />
                                        <TimelineItem
                                            color="error"
                                            icon="do_disturb_on"
                                            title="$2400 Design changes"
                                            dateTime="22 DEC 7:20 PM"
                                            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                            badges={['REJECTED']}
                                        />
                                        <TimelineItem
                                            color="primary"
                                            icon="monetization_on"
                                            title="$2400 Design changes"
                                            dateTime="22 DEC 7:20 PM"
                                            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                            badges={['FUNDING']}
                                        />
                                        <TimelineItem
                                            color="error"
                                            icon="cancel"
                                            title="$2400 Design changes"
                                            dateTime="22 DEC 7:20 PM"
                                            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                            badges={['FAIL']}
                                        />
                                        <TimelineItem
                                            color="info"
                                            icon="play_circle_filled"
                                            title="$2400 Design changes"
                                            dateTime="22 DEC 7:20 PM"
                                            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                            badges={['ONGOING']}
                                        />
                                        <TimelineItem
                                            color="success"
                                            icon="check_circle"
                                            title="$2400 Design changes"
                                            dateTime="22 DEC 7:20 PM"
                                            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                            badges={['FINISH']}
                                            lastItem
                                        />
                                    </TimelineList>
                                </Box>
                                <Divider sx={{ my: 5 }} />
                                <Box mb={3}>
                                    <SuiTypography color="black">
                                        Mô tả
                                    </SuiTypography>
                                    <SuiInput
                                        rows={10}
                                        multiline
                                        placeholder="Mô tả..."
                                        name="description"
                                        value={loan.description}
                                        disabled
                                    />
                                </Box>
                                <Divider sx={{ my: 5 }} />
                                <Box mb={5}>
                                    <Grid container spacing={3}>
                                        {loan?.LoanMedia?.filter(
                                            (item) => item.type !== 'VIDEO'
                                        ).map((item) => (
                                            <Grid item xs={12} md={6}>
                                                <SuiTypography
                                                    color="black"
                                                    mb={1}
                                                >
                                                    {item.description}
                                                </SuiTypography>
                                                <ImageCard
                                                    image={item.imageUrl}
                                                />
                                            </Grid>
                                        ))}

                                        {/* <Grid item xs={12} md={6}>
                                            <SuiTypography color="black" mb={1}>
                                                Giấy xác nhận sinh viên
                                            </SuiTypography>
                                            <ImageCard image="https://res.cloudinary.com/larrytran/image/upload/v1648212014/image/fy9zzzjipvyznttejuhr.jpg" />
                                        </Grid> */}
                                    </Grid>
                                </Box>
                                <Divider sx={{ my: 5 }} />
                                <Box mb={5}>
                                    <SuiTypography color="black" mb={1}>
                                        Những thành tựu
                                    </SuiTypography>
                                    <Grid container spacing={3}>
                                        {loan?.Student?.Archievements.map(
                                            (item) => (
                                                <Grid item xs={12} md={6}>
                                                    <SuiInput
                                                        value={item.description}
                                                        disabled
                                                    />
                                                    <ImageCard
                                                        mt={1}
                                                        image={item.imageUrl}
                                                    />
                                                </Grid>
                                            )
                                        )}
                                    </Grid>
                                </Box>
                            </Container>
                        </SuiBox>
                    </SuiBox>
                ) : null}
                {/* {currentTab === '2' ? (
                    <ContractPage contractInfo={loan.Contracts} />
                ) : null} */}
                {currentTab === '2' ? (
                    <InvestorPage
                        investments={loan.Investments}
                        currentMoney={loan.AccumulatedMoney}
                        investors={loan.InvestorCount}
                    />
                ) : null}
                {currentTab === '3' ? <ReportPage /> : null}
                {currentTab === '4' ? <PaymentPlanPage /> : null}
            </Paper>
        </>
    )
}
