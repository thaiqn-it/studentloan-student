import { Container, Box, Grid, Divider, Paper, CardMedia } from '@mui/material'
import ImageCard from 'components/ImageCard'
import SuiBox from 'components/SuiBox'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiProgress from 'components/SuiProgress'
import SuiTypography from 'components/SuiTypography'
import YoutubeEmbed from 'components/YoutubeEmbed'
import React, { useEffect, useState } from 'react'
import Tab from './components/Tab'
import ContractPage from './ContractPage'
import PaymentPlanPage from './PaymentPlanPage'
import NotFound from 'pages/NotFound'

// Soft UI Dashboard React examples
import TimelineList from 'examples/Timeline/TimelineList'
import TimelineItem from 'examples/Timeline/TimelineItem'

import { useParams } from 'react-router-dom'
import { loanApi } from '../../apis/loanApi'
import { fCurrency } from 'utils/formatNumber'
import { fCurrencyNoVND } from 'utils/formatNumber'
import { fToNowNumber } from 'utils/formatTime'
import { getThumbnail } from 'utils/youtube'

export default function ViewPost() {
    const { id } = useParams()
    const [currentTab, setCurrentTab] = useState('one')
    const [loan, setLoan] = useState({})

    const [isFound, setIsFound] = useState(true)

    useEffect(() => {
        loanApi
            .getLoanById(id)
            .then((res) => {
                setLoan(res.data.loan)
            })
            .catch((error) => {
                setIsFound(false)
            })
    }, [])

    const onChangeTab = (tab) => {
        setCurrentTab(tab)
        console.log(loan.LoanHistories)
    }

    return (
        <>
            {isFound ? (
                <>
                    <Paper>
                        <Tab
                            onChangeTab={onChangeTab}
                            currentTab={currentTab}
                        />
                        {currentTab === 'one' ? (
                            <SuiBox py={5}>
                                <SuiBox mb={3}>
                                    <Container maxWidth="xxl">
                                        <Box>
                                            <Grid container spacing={4}>
                                                <Grid item xs={12} md={9}>
                                                    {loan?.LoanMedia?.filter(
                                                        (item) =>
                                                            item.type ===
                                                            'VIDEO'
                                                    ).length ? (
                                                        loan?.LoanMedia?.filter(
                                                            (item) =>
                                                                item.type ===
                                                                'VIDEO'
                                                        ).map((item) => (
                                                            <YoutubeEmbed
                                                                url={
                                                                    item.imageUrl
                                                                }
                                                                height="480"
                                                            />
                                                        ))
                                                    ) : (
                                                        <CardMedia
                                                            sx={{
                                                                maxWidth:
                                                                    '100%',
                                                                height: '100%',
                                                                margin: 0,
                                                            }}
                                                            component="img"
                                                            image={getThumbnail(
                                                                null
                                                            )}
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
                                                        <Grid
                                                            item
                                                            xs="12"
                                                            md="12"
                                                        >
                                                            <SuiProgress
                                                                value={50}
                                                                color="primary"
                                                            />
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs="12"
                                                            md="12"
                                                            sx={{
                                                                marginTop:
                                                                    '1rem',
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
                                                                marginTop:
                                                                    '1rem',
                                                            }}
                                                        >
                                                            <SuiTypography
                                                                variant="h3"
                                                                color="text"
                                                            >
                                                                {
                                                                    loan.InvestorCount
                                                                }
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
                                                                marginTop:
                                                                    '1rem',
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
                                                                ngày trước khi
                                                                hết hạn
                                                            </SuiTypography>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs="12"
                                                            md="12"
                                                        >
                                                            <SuiButton
                                                                color="primary"
                                                                fullWidth
                                                                href={`/dashboard/request/${id}`}
                                                                sx={{
                                                                    marginTop: {
                                                                        xs: 0,
                                                                        lg: 20,
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
                                            <TimelineList title="Trạng thái">
                                                <TimelineItem
                                                    color="success"
                                                    icon="notifications"
                                                    title="$2400 Design changes"
                                                    dateTime="22 DEC 7:20 PM"
                                                    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                                    badges={['design']}
                                                />
                                                <TimelineItem
                                                    color="error"
                                                    icon="inventory_2"
                                                    title="New order #1832412"
                                                    dateTime="21 DEC 11 PM"
                                                    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                                                    badges={[
                                                        'order',
                                                        '#1832412',
                                                    ]}
                                                />
                                                <TimelineItem
                                                    icon="shopping_cart"
                                                    title="Server payments for April"
                                                    dateTime="21 DEC 9:34 PM"
                                                    description={null}
                                                    badges={[
                                                        'server',
                                                        'payments',
                                                    ]}
                                                    lastItem
                                                />
                                            </TimelineList>
                                        </Box>
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
                                                    (item) =>
                                                        item.type !== 'VIDEO'
                                                ).map((item) => (
                                                    <Grid item xs={12} md={6}>
                                                        <SuiTypography
                                                            color="black"
                                                            mb={1}
                                                        >
                                                            {item.description}
                                                        </SuiTypography>
                                                        <ImageCard
                                                            image={
                                                                item.imageUrl
                                                            }
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
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            md={6}
                                                        >
                                                            <SuiInput
                                                                value={
                                                                    item.description
                                                                }
                                                                disabled
                                                            />
                                                            <ImageCard
                                                                mt={1}
                                                                image={
                                                                    item.imageUrl
                                                                }
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
                        {currentTab === 'two' ? <ContractPage /> : null}
                        {currentTab === 'three' ? <PaymentPlanPage /> : null}
                    </Paper>
                </>
            ) : (
                <NotFound title="Không tìm thấy hồ sơ" />
            )}
        </>
    )
}
