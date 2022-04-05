import SuiBox from 'components/SuiBox'
import Table from 'examples/Tables/Table'
import SuiTypography from 'components/SuiTypography'
import Card from '@mui/material/Card'
import SuiAvatar from 'components/SuiAvatar'
import SuiBadge from 'components/SuiBadge'

// Images
import team2 from 'assets/images/team-2.jpg'

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
                <SuiTypography variant="caption" color="secondary">
                    {email}
                </SuiTypography>
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

export default function InvestorTable() {
    const columns = [
        { name: 'investor', align: 'left' },
        { name: 'funding', align: 'left' },
        { name: 'status', align: 'center' },
        { name: 'employed', align: 'center' },
        { name: 'action', align: 'center' },
    ]

    const rows = [
        {
            investor: (
                <Author
                    image={team2}
                    name="John Michael"
                    email="john@creative-tim.com"
                />
            ),
            funding: <Function job="Manager" org="Organization" />,
            status: (
                <SuiBadge
                    variant="gradient"
                    badgeContent="online"
                    color="success"
                    size="xs"
                    container
                />
            ),
            employed: (
                <SuiTypography
                    variant="caption"
                    color="secondary"
                    fontWeight="medium"
                >
                    23/04/18
                </SuiTypography>
            ),
            action: (
                <SuiTypography
                    component="a"
                    href="#"
                    variant="caption"
                    color="secondary"
                    fontWeight="medium"
                >
                    Edit
                </SuiTypography>
            ),
        },
    ]

    return (
        <>
            <Card>
                <SuiBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={3}
                >
                    <SuiTypography variant="h6">Authors table</SuiTypography>
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
