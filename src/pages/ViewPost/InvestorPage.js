import React from 'react'
import SuiBox from 'components/SuiBox'
import InvestorTable from './components/InvestmentsTable'

export default function InvestorPage() {
    return (
        <>
            <SuiBox mb={3}>
                <InvestorTable />
            </SuiBox>
        </>
    )
}
