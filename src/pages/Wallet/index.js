import { Button, Grid, Typography, Box, Card, Icon } from '@mui/material'
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
import { accountApi } from 'apis/accountApi'
import { transactionApi } from 'apis/transactionApi'
import { useEffect } from 'react'
import TopUp from 'components/TopUp'
import Transfer from 'components/Transfer'

const demoData = []

const Wallet = () => {
    const [wallet, setWallet] = useState({})
    const userObj = useAuthState()

    const initData = async () => {
        try {
            const userId = userObj.userId

            const walletRes = await accountApi.getWalletByUserId(userId)
            const wallet = walletRes.data
            setWallet(wallet)
            const transactionRes =
                await transactionApi.getTransactionByWalletId(wallet.id)
            const transactions = transactionRes.data

            setTransactions(transactions)
            setSelectedTransaction(transactions[0].transactions[0])
        } catch (e) {}
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

    const [transactions, setTransactions] = useState(demoData)
    const [selectedTransaction, setSelectedTransaction] = useState()
    const [topUpOpen, setTopUpOpen] = useState(false)

    const [transfer, setTransfer] = useState(false)

    const handleTransactionClick = (id, date) => {
        const group = transactions.find((trans) => trans.date === date)
        const transaction = group.transactions.find((trans) => trans.id === id)

        setSelectedTransaction(transaction)
    }

    useEffect(() => {
        initData()
    }, [])

    return (
        <>
            <SuiBox mb={3}>
                <SuiBox mb={3} sx={{ marginTop: '20px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} xl={3}>
                            <MiniStatisticsCard
                                title={{ text: 'So Tien Trong Vi' }}
                                count={`${String(wallet?.money).replace(
                                    /(\d)(?=(\d{3})+$)/g,
                                    '$1,'
                                )} d`}
                                // percentage={{ color: 'success', text: '+55%' }}
                                icon={{ color: 'info', component: 'paid' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <Box onClick={() => setTopUpOpen(true)}>
                                <MiniStatisticsCard
                                    title={{ text: 'Nap Tien' }}
                                    // percentage={{ color: 'success', text: '+55%' }}
                                    icon={{ color: 'info', component: 'paid' }}
                                />
                            </Box>

                            <TopUp
                                open={topUpOpen}
                                handleClose={() => setTopUpOpen(false)}
                                reloadData={initData}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} xl={3}>
                            <Box onClick={() => setTransfer(true)}>
                                <MiniStatisticsCard
                                    title={{ text: 'Rut Tien' }}
                                    // percentage={{ color: 'success', text: '+55%' }}
                                    icon={{ color: 'info', component: 'paid' }}
                                />
                            </Box>

                            <Transfer
                                open={transfer}
                                handleClose={() => setTransfer(false)}
                                reloadData={initData}
                                accountId={wallet.id}
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
                        {transactions && (
                            <Transactions
                                data={transactions}
                                handleClick={handleTransactionClick}
                                selectedTransaction={selectedTransaction}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%' }}>
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
                    <Grid item xs={12} md={7}>
                        <BillingInformation />
                    </Grid>
                </Grid>
            </SuiBox>
        </>
    )
}

export default Wallet
