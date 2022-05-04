import {
    Container,
    Box,
    Grid,
    Divider,
    Paper,
    CardMedia,
    Link,
} from '@mui/material'
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

import { useHistory } from 'react-router-dom'
import Loading from 'components/Loading'
import { renderStatus } from 'utils/renderStatus'
import { fDateTime } from 'utils/formatTime'

import { LOAN_STATUS } from 'utils/enum'
import { Helmet } from 'react-helmet'
import { investmentApi } from 'apis/investmentApi'

export default function ViewPost() {
    const { id } = useParams()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [currentTab, setCurrentTab] = useState('1')
    const [loan, setLoan] = useState({})
    const [loanHistories, setLoanHistories] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setIsLoading(true)

        loanApi
            .getLoanById(id, 'view')
            .then((res) => {
                setLoan(res.data.loan)
                var loanHist = res.data.loan.LoanHistories

                setLoanHistories(loanHist)
                setIsLoading(false)
                if (
                    loanHist.lenght > 0 &&
                    loanHist[loanHist.length - 1].type === LOAN_STATUS.DELETED
                ) {
                    throw new Error()
                }
            })
            .catch((error) => {
                setIsLoading(false)
                history.push({
                    pathname: '/trang-chu/404',
                    state: { content: 'Không tìm thấy hồ sơ' },
                })
            })
    }

    const onChangeTab = (tab) => {
        setCurrentTab(tab)
    }

    function getFileName(url) {
        var splittedArr = url.split('/')
        var name = splittedArr[splittedArr.length - 1]
        var fileName = name.substring(name.indexOf('-') + 1, name.length)
        return fileName
    }

    const renderEditButton = () => {
        if (loanHistories !== null) {
            var current = loanHistories[loanHistories?.length - 1]?.type
            if (
                current === LOAN_STATUS.DRAFT ||
                current === LOAN_STATUS.WAITING ||
                current === LOAN_STATUS.CANCEL ||
                current === LOAN_STATUS.REJECTED
            ) {
                return (
                    <>
                        <Grid
                            item
                            xs="6"
                            md="12"
                            sx={{
                                marginTop: '1rem',
                            }}
                        >
                            <SuiTypography variant="h3" color="text">
                                {fToNowNumber(loan.postExpireAt)}
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
                                href={`/trang-chu/ho-so/chinh-sua/${id}`}
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
                    </>
                )
            }
        } else {
            return null
        }
    }

    const renderCancelButton = () => {
        if (loanHistories !== null) {
            var current = loanHistories[loanHistories?.length - 1]?.type
            if (current === LOAN_STATUS.FUNDING) {
                return (
                    <>
                        <Grid item xs="12" md="12">
                            <SuiButton
                                color="warning"
                                fullWidth
                                sx={{
                                    marginTop: {
                                        xs: 0,
                                        lg: 27,
                                    },
                                }}
                                onClick={handleCancel}
                            >
                                Thu hồi
                            </SuiButton>
                        </Grid>
                    </>
                )
            }
        } else {
            return null
        }
    }

    const handleCancel = () => {
        loanApi
            .updateLoanPost(id, 'CANCEL', {
                loan,
                loanHistory: loanHistories[loanHistories.length - 1],
            })
            .then((res) => {
                investmentApi
                    .updateInvestmentByLoanId(id, { status: 'FAIL' })
                    .then((res) => {
                        fetchData()
                    })
            })
    }

    const renderStatusTimeline = (item, index) => {
        var objectStatus = renderStatus(item.type)
        var isLastItem = index === loanHistories?.length - 1
        return (
            <TimelineItem
                key={index}
                color={objectStatus.color}
                icon={objectStatus.icon}
                title={objectStatus.message}
                dateTime={fDateTime(item.updatedAt)}
                description={item.description}
                badges={[item.type]}
                lastItem={isLastItem}
                information={
                    <>
                        {item.LoanHistoryImages.map((item) => (
                            <Link
                                href={item.imageUrl}
                                underline="hover"
                                color="black"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box>
                                    <SuiTypography variant="caption">
                                        {getFileName(item.imageUrl)}
                                    </SuiTypography>
                                </Box>
                            </Link>
                        ))}
                    </>
                }
            />
        )
    }
    return (
        <>
            <Helmet>
                <title>
                    {loan.title === null
                        ? 'Xem hồ sơ vay-StudentLoan'
                        : loan.title + '-StudentLoan'}
                </title>
            </Helmet>
            <Paper sx={{ boxShadow: 0 }}>
                <TabInfo
                    onChangeTab={onChangeTab}
                    currentTab={currentTab}
                    status={loanHistories}
                />
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
                                                    <Box width="100%">
                                                        <SuiProgress
                                                            value={fProgress(
                                                                loan.AccumulatedMoney,
                                                                loan.totalMoney
                                                            )}
                                                            label
                                                            color="primary"
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                        />
                                                    </Box>
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
                                                {renderEditButton()}
                                                {renderCancelButton()}
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
                                        {loanHistories?.map((item, index) =>
                                            renderStatusTimeline(item, index)
                                        )}
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
                                        value={loan.description || ''}
                                        disabled
                                    />
                                </Box>
                                <Divider sx={{ my: 5 }} />
                                <Box mb={5}>
                                    <Grid container spacing={3}>
                                        {loan?.LoanMedia?.filter(
                                            (item) => item.type !== 'VIDEO'
                                        ).map((item) => {
                                            if (item.imageUrl !== '') {
                                                return (
                                                    <Grid item xs={12} md={4}>
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
                                                )
                                            }
                                        })}

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
                                                    key={item.id}
                                                >
                                                    <SuiInput
                                                        value={
                                                            item.description ||
                                                            ''
                                                        }
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
                {/* {currentTab === '3' ? <ReportPage /> : null} */}
                {currentTab === '4' ? <PaymentPlanPage /> : null}
            </Paper>
        </>
    )
}
