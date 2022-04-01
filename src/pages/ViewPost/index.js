import { Container, Box, Grid, Divider, Paper } from '@mui/material'
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

import { useParams } from 'react-router-dom'
import { loanApi } from '../../apis/loanApi'
import { fCurrency } from 'utils/formatNumber'
import { fCurrencyNoVND } from 'utils/formatNumber'
import { fToNowNumber } from 'utils/formatTime'

export default function ViewPost() {
    const { id } = useParams()
    const [currentTab, setCurrentTab] = useState('one')
    const [loan, setLoan] = useState({})

    useEffect(() => {
        loanApi
            .getLoanById(id)
            .then((res) => {
                setLoan(res.data.loan)
            })
            .catch((error) => console.log(error))
    })

    const onChangeTab = (tab) => {
        setCurrentTab(tab)
        console.log(loan.LoanMedia)
    }

    const initiateYoutubeVideo = (url) => {
        var regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
        var match = url.match(regExp)
        var returnUrl = match && match[7].length == 11 ? match[7] : false
        return returnUrl
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
                                        <Grid item xs={12} md={9}>
                                            {/* {loan?.LoanMedia?.filter(
                                                (item) => (item.type = 'VIDEO')
                                            ).length
                                                ? loan.LoanMedia.filter(
                                                      (item) =>
                                                          (item.type = 'VIDEO')
                                                  ).map((item) => (
                                                      <YoutubeEmbed
                                                          embedId={initiateYoutubeVideo(
                                                              item.imageUrl
                                                          )}
                                                          height="480"
                                                      />
                                                  ))
                                                : null} */}
                                            {loan?.LoanMedia?.filter(
                                                (item) => item.type === 'VIDEO'
                                            ).length
                                                ? loan?.LoanMedia?.filter(
                                                      (item) =>
                                                          item.type === 'VIDEO'
                                                  ).map((item) => (
                                                      <YoutubeEmbed
                                                          embedId={initiateYoutubeVideo(
                                                              item.imageUrl
                                                          )}
                                                          height="480"
                                                      />
                                                  ))
                                                : null}

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
                                                        value={50}
                                                        color="primary"
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs="12"
                                                    md="12"
                                                    sx={{ marginTop: '1rem' }}
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
                                                    sx={{ marginTop: '1rem' }}
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
                                                    sx={{ marginTop: '1rem' }}
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
                {currentTab === 'two' ? <ContractPage /> : null}
                {currentTab === 'three' ? <PaymentPlanPage /> : null}
            </Paper>
        </>
    )
}
