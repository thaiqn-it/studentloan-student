import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiAvatar from 'components/SuiAvatar'
import SuiBadge from 'components/SuiBadge'

import { fInvestPercent, fCurrencyNoVND } from 'utils/formatNumber'
import { Card } from '@mui/material'
import Table from 'examples/Tables/Table'
import { fDateTime,fDateTimeSuffix } from 'utils/formatTime'

function Author({ image, name, email }) {
    return (
        <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
            <SuiBox mr={2}>
                <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
            </SuiBox>
            <SuiBox display="flex" flexDirection="column">
                <SuiTypography variant="button" fontWeight="medium">
                    {name}
                </SuiTypography>
                {/* <SuiTypography variant="caption" color="secondary">
                    {email}
                </SuiTypography> */}
            </SuiBox>
        </SuiBox>
    )
}

function Function({ job, org }) {
    return (
        <SuiBox display="flex" flexDirection="column">
            <SuiTypography variant="caption" fontWeight="medium" color="text">
                {job}
            </SuiTypography>
            <SuiTypography variant="caption" color="secondary">
                {org}
            </SuiTypography>
        </SuiBox>
    )
}

export default function InvestorTable(props) {
    const { data, currecurrentMoney } = props

    const columns = [
        { name: 'investor', align: 'left' },
        { name: 'amount', align: 'left' },
        { name: 'status', align: 'center' },
        { name: 'date', align: 'left' },
        // { name: 'action', align: 'center' },
    ]

    const rows = data.map((item) => {
        var obj = {
            investor: (
                <Author
                    image={item?.Investor?.User?.profileUrl}
                    name={item?.Investor?.User?.firstName + " " + item?.Investor?.User?.lastName}
                    // email="john@creative-tim.com"
                />
            ),
            amount: (
                <Function
                    job={fCurrencyNoVND(item?.total)}
                    org={fInvestPercent(item?.total, currecurrentMoney) + '%'}
                />
            ),
            status: (
                <SuiBadge
                    variant="gradient"
                    badgeContent={item?.status}
                    color="warning"
                    size="xs"
                    container
                />
            ),
            date: (
                <SuiTypography
                    variant="caption"
                    color="secondary"
                    fontWeight="medium"
                >
                    {fDateTimeSuffix(item?.createdAt)}
                </SuiTypography>
            ),
            // action: (
            //     <SuiTypography
            //         component="a"
            //         href="#"
            //         variant="caption"
            //         color="secondary"
            //         fontWeight="medium"
            //     >
            //         view
            //     </SuiTypography>
            // ),
        }

        return obj
    })

    return (
        <>
            <Card sx={{ borderRadius: 0 }}>
                <SuiBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={2}
                >
                    <SuiTypography variant="h5">Khoản đầu tư</SuiTypography>
                </SuiBox>
                <SuiBox
                    sx={{
                        '& .MuiTableRow-root:not(:last-child)': {
                            '& td': {
                                borderBottom: ({
                                    borders: { borderWidth, borderColor },
                                }) => `${borderWidth[1]} solid ${borderColor}`,
                            },
                        },
                    }}
                >
                    <Table columns={columns} rows={rows} />
                </SuiBox>
            </Card>
        </>
    )
}
