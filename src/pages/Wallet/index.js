import {
    Button,
    Grid,
    Typography,
    Box,
    Card,
    Icon,
    Modal,
    Backdrop,
    Fade,
} from '@mui/material'
import React, { useState } from 'react'
import classes from './Wallet.module.css'
import SendIcon from '@mui/icons-material/Send'
import SuiBox from 'components/SuiBox'
import MiniStatisticsCard from 'examples/Cards/StatisticsCards/MiniStatisticsCard/v2'
import OrdersOverview from 'layouts/dashboard/components/OrderOverview'
import SuiTypography from 'components/SuiTypography'
import TimelineItem from 'examples/Timeline/TimelineItem'
import { userApi } from 'apis/userApi'
import { ClosedCaptionDisabledOutlined } from '@mui/icons-material'
import BillingInformation from 'layouts/billing/components/BillingInformation'
import Invoices from 'layouts/billing/components/Invoices'
import Transactions from 'layouts/billing/components/Transactions/v2'
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart'
import reportsBarChartData from 'layouts/dashboard/data/reportsBarChartData'
import TransactionDetail from 'components/TransactionDetail'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { useAuthState } from 'context/authContext'
import { walletApi } from 'apis/walletApi'
import { transactionApi } from 'apis/transactionApi'
import { useEffect } from 'react'
import TopUp from 'components/TopUp'
import Transfer from 'components/Transfer'
import { useHistory } from 'react-router-dom'
import { USER_STATUS } from 'utils/enum'
import SuiButton from 'components/SuiButton'

import { fCurrency } from 'utils/formatNumber'
import { Helmet } from 'react-helmet'

const NotifiModal = ({ open, handleClose, onClick }) => {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',

                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <Typography
                            id="transition-modal-title"
                            variant="h2"
                            color="primary"
                            sx={{ textAlign: 'center' }}
                        >
                            Lưu ý
                        </Typography>
                        <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2, textAlign: 'center' }}
                        >
                            Tài khoản của bạn chưa được admin xác thực nên chưa
                            thể thực hiện hành động này.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px',
                            }}
                        >
                            <SuiButton
                                color="primary"
                                variant="contained"
                                onClick={onClick}
                            >
                                Xác thực tài khoản
                            </SuiButton>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

const Wallet = () => {
    const [wallet, setWallet] = useState({})
    const history = useHistory()
    const userObj = useAuthState()
    // const [transactions, setTransactions] = useState()
    const [transactionsList, setTransactionsList] = useState()
    const [selectedTransaction, setSelectedTransaction] = useState()
    const [topUpOpen, setTopUpOpen] = useState(false)

    const [transfer, setTransfer] = useState(false)
    const [notVerify, setNotVerify] = useState(false)
    const handleNotVerifyClose = () => setNotVerify(false)
    const handleNotVerifyOpen = () => setNotVerify(true)
    const initData = async () => {
        try {
            const userId = userObj.userId

            const walletRes = await walletApi.getWalletByUserId(userId)
            const wallet = walletRes.data
            setWallet(wallet)
            const transactionRes =
                await transactionApi.getTransactionByWalletId(wallet.id)
            const trans = transactionRes.data
            console.log(trans)

            setTransactionsList(trans)
            setSelectedTransaction(trans[0].transaction[0])
        } catch (e) {
            console.log(e)
        }
    }

    const getTransactionsByDate = async () => {
        try {
            // const transactionRes =
            //     await transactionApi.getTransactionByWalletId(wallet.id , begin , end)
            // const transactions = transactionRes.data
            // console.log(transactions)
            // setTransactions(transactions)
        } catch (e) {}
    }

    // const formattedBalance = `${String(wallet?.money).replace(
    //     /(\d)(?=(\d{3})+$)/g,
    //     '$1,'
    // )} đ`

    const handleTransactionClick = (id, date) => {
        const group = transactionsList.find((trans) => trans.date === date)

        const transaction = group.transaction.find((trans) => trans.id === id)

        setSelectedTransaction(transaction)
    }

    const authObj = useAuthState()
    const user = authObj.user

    useEffect(() => {
        initData()
    }, [])

    const checkAction = (action) => {
        if (user.data.status !== USER_STATUS.VERIFIED)
            return handleNotVerifyOpen()

        switch (action) {
            case 'TopUp':
                setTopUpOpen(true)
                break
            case 'Transfer':
                setTransfer(true)
                break
            default:
                console.log('action not defined')
        }
    }

    return (
        <>
            <Helmet>
                <title>Quản lí ví-StudentLoan</title>
            </Helmet>
            <NotifiModal
                open={notVerify}
                handleClose={handleNotVerifyClose}
                onClick={() => {
                    history.push('/trang-chu/thong-tin')
                }}
            />
            <SuiBox mb={3}>
                <SuiBox mb={3} sx={{ marginTop: '20px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} xl={3}>
                            <Card style={{ boxShadow: '1px 2px 4px #9E9E9E' }}>
                                <SuiBox variant="gradient">
                                    <SuiBox p={2}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={10}>
                                                <SuiBox ml={0} lineHeight={1}>
                                                    <SuiTypography
                                                        variant="button"
                                                        color={'text'}
                                                        opacity={1}
                                                        textTransform="capitalize"
                                                    >
                                                        Số tiền trong ví
                                                    </SuiTypography>
                                                    <Box>
                                                        <SuiTypography
                                                            variant="h4"
                                                            fontWeight="bold"
                                                            color="dark"
                                                        >
                                                            {/* {formattedBalance} */}
                                                            {fCurrency(
                                                                wallet?.money
                                                            )}
                                                        </SuiTypography>
                                                    </Box>
                                                </SuiBox>
                                            </Grid>
                                        </Grid>
                                    </SuiBox>
                                </SuiBox>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} xl={2}>
                            <Box onClick={() => checkAction('TopUp')}>
                                <MiniStatisticsCard
                                    title={{ text: 'Nạp tiền' }}
                                    // percentage={{ color: 'success', text: '+55%' }}
                                    icon={{ color: 'info', component: 'paid' }}
                                />
                            </Box>

                            <TopUp
                                open={topUpOpen}
                                handleClose={() => setTopUpOpen(false)}
                                reloadData={initData}
                                walletId={wallet.id}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={2}>
                            <Box onClick={() => checkAction('Transfer')}>
                                <MiniStatisticsCard
                                    title={{ text: 'Rút tiền' }}
                                    // percentage={{ color: 'success', text: '+55%' }}
                                    icon={{
                                        color: 'warning',
                                        component: 'logout',
                                    }}
                                />
                            </Box>

                            <Transfer
                                open={transfer}
                                handleClose={() => setTransfer(false)}
                                reloadData={initData}
                                walletId={wallet.id}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} xl={3}>
                            <MiniStatisticsCard
                                title={{ text: "today's users" }}
                                count="2,300"
                                percentage={{ color: 'success', text: '+3%' }}
                                icon={{ color: 'info', component: 'public' }}
                            />
                        </Grid> */}
                    </Grid>
                </SuiBox>
                {/* <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <ReportsBarChart
                            title="current status"
                            description={
                                <>
                                    (<strong>+23%</strong>) than last week
                                </>
                            }
                            chart={chart}
                            items={items}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Invoices />
                    </Grid>
                </Grid> */}
            </SuiBox>

            <SuiBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        {transactionsList && (
                            <Transactions
                                data={transactionsList}
                                handleClick={handleTransactionClick}
                                selectedTransaction={selectedTransaction}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card
                            sx={{ height: '70%' }}
                            style={{ boxShadow: '1px 2px 4px #9E9E9E' }}
                        >
                            {/* <SuiBox pt={3} px={2}>
                                <SuiTypography>
                                    Transaction detail
                                </SuiTypography>
                                <Box
                                    sx={{
                                        marginTop: 5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        rowGap: '15px',
                                    }}
                                >
                                    <SuiTypography>
                                        {selectedTransaction?.money}
                                    </SuiTypography>
                                    <SuiTypography>
                                        {selectedTransaction?.status}
                                    </SuiTypography>
                                    <SuiTypography>
                                        {selectedTransaction?.senderName}
                                    </SuiTypography>
                                    <SuiTypography>
                                        {selectedTransaction?.recipientName}
                                    </SuiTypography>
                                    <SuiTypography>
                                        {selectedTransaction?.transactionFee}
                                    </SuiTypography>
                                    <SuiTypography>
                                        {selectedTransaction?.date}
                                    </SuiTypography>
                                    <SuiTypography>
                                        {selectedTransaction?.description}
                                    </SuiTypography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        marginTop: '40px',
                                    }}
                                >
                                    <SuiTypography>Balance</SuiTypography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                        }}
                                    >
                                        <AccountBalanceWalletIcon />
                                        <SuiTypography>Balance</SuiTypography>
                                    </Box>
                                    <SuiTypography>Invoice</SuiTypography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '15px',
                                        }}
                                    >
                                        <ContentPasteIcon />
                                        <SuiTypography>
                                            {selectedTransaction?.id}
                                        </SuiTypography>
                                    </Box>
                                </Box>
                            </SuiBox> */}
                            <TransactionDetail
                                transaction={selectedTransaction}
                            />
                        </Card>
                    </Grid>
                    {/* <Grid item xs={12} md={7}>
                        <BillingInformation />
                    </Grid> */}
                </Grid>
            </SuiBox>
        </>
    )
}

export default Wallet
