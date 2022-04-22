/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from 'react'
// @mui material components
import Card from '@mui/material/Card'
// import Divider from "@mui/material/Divider";
import Icon from '@mui/material/Icon'

// Soft UI Dashboard React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'

// Billing page components
import Transaction from 'layouts/billing/components/Transaction/v2'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateRangePicker from '@mui/lab/DateRangePicker'
import { Box, TextField } from '@mui/material'
import SuiInput from 'components/SuiInput'

import moment from 'moment'

const Group = ({ transactions, handleClick, selectedTransaction }) => {
    return (
        <>
            <SuiBox mb={2}>
                <SuiTypography
                    variant="h6"
                    color="text"
                    fontWeight="medium"
                    textTransform="uppercase"
                    opacity={0.8}
                >
                    {transactions.date}
                </SuiTypography>
            </SuiBox>
            <SuiBox
                component="ul"
                display="flex"
                flexDirection="column"
                p={0}
                m={0}
                sx={{ listStyle: 'none' }}
            >
                {transactions?.transaction.map((transaction) => {
                    return (
                        <>
                            <Transaction
                                date={transaction.date}
                                color={
                                    transaction.type !== "TRANSFER" ? 'success' : 'error'
                                }
                                icon={
                                    transaction.type !== "TRANSFER"
                                        ? 'arrow_upward'
                                        : 'arrow_downward'
                                }
                                name={transaction.description}
                                description={transaction.date}
                                value={transaction.type !== "TRANSFER" ? transaction.money : -transaction.money}
                                handleClick={handleClick}
                                id={transaction.id}
                                selected={
                                    selectedTransaction?.id === transaction.id
                                }
                            />
                        </>
                    )
                })}
                {/* <Transaction
                    color="error"
                    icon="arrow_downward"
                    name="Netflix"
                    description="27 March 2020, at 12:30 PM"
                    value="- $ 2,500"
                />
                <Transaction
                    color="success"
                    icon="arrow_upward"
                    name="Apple"
                    description="27 March 2020, at 04:30 AM"
                    value="+ $ 2,000"
                /> */}
            </SuiBox>
        </>
    )
}

function Transactions({ handleClick, data, selectedTransaction }) {
    const [range, setRange] = useState([null, null])

    return (
        <Card sx={{ height: '100%' }} style={{ boxShadow: "1px 2px 4px #9E9E9E"}}>
            <SuiBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                pt={3}
                px={2}
            >
                <SuiTypography
                    variant="h5"
                    fontWeight="bold"
                    textTransform="capitalize"
                >
                    Các giao dịch của bạn
                </SuiTypography>
                <SuiBox display="flex" alignItems="flex-start">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="Check-in"
                            endText="Check-out"
                            value={range}
                            onChange={(newValue) => {
                                setRange(newValue)
                            }}
                            renderInput={(startProps, endProps) => (
                                <>
                                    <SuiInput {...startProps} />
                                    <Box sx={{ mx: 1, fontSize : 16 }}> đến </Box>
                                    <SuiInput {...endProps} />
                                </>
                            )}
                        />
                    </LocalizationProvider>
                </SuiBox>
            </SuiBox>
            <SuiBox pt={3} pb={2} px={2}>
                {data.map((group) => {
                    return (
                        <>
                            <Group
                                transactions={group}
                                handleClick={handleClick}
                                selectedTransaction={selectedTransaction}
                            />
                        </>
                    )
                })}
                {/* <SuiBox mb={2}>
                    <SuiTypography
                        variant="caption"
                        color="text"
                        fontWeight="bold"
                        textTransform="uppercase"
                    >
                        newest
                    </SuiTypography>
                </SuiBox>
                <SuiBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                    sx={{ listStyle: 'none' }}
                >
                    <Transaction
                        color="error"
                        icon="arrow_downward"
                        name="Netflix"
                        description="27 March 2020, at 12:30 PM"
                        value="- $ 2,500"
                    />
                    <Transaction
                        color="success"
                        icon="arrow_upward"
                        name="Apple"
                        description="27 March 2020, at 04:30 AM"
                        value="+ $ 2,000"
                    />
                </SuiBox>
                <SuiBox mt={1} mb={2}>
                    <SuiTypography
                        variant="caption"
                        color="text"
                        fontWeight="bold"
                        textTransform="uppercase"
                    >
                        yesterday
                    </SuiTypography>
                </SuiBox>
                <SuiBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                    sx={{ listStyle: 'none' }}
                >
                    <Transaction
                        color="success"
                        icon="arrow_upward"
                        name="Stripe"
                        description="26 March 2020, at 13:45 PM"
                        value="+ $ 750"
                    />
                    <Transaction
                        color="success"
                        icon="arrow_upward"
                        name="HubSpot"
                        description="26 March 2020, at 12:30 PM"
                        value="+ $ 1,000"
                    />
                    <Transaction
                        color="success"
                        icon="arrow_upward"
                        name="Creative Tim"
                        description="26 March 2020, at 08:30 AM"
                        value="+ $ 2,500"
                    />
                    <Transaction
                        color="dark"
                        icon="priority_high"
                        name="Webflow"
                        description="26 March 2020, at 05:00 AM"
                        value="Pending"
                    /> */}
                {/* </SuiBox> */}
            </SuiBox>
        </Card>
    )
}

export default Transactions
