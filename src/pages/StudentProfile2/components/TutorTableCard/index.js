import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import theme from '../../../../theme'
import { Box, Button, IconButton, ThemeProvider } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SuiTypography from 'components/SuiTypography'
import { fDisplayDate } from 'utils/formatTime'

export default function TutorTableCard(props) {
    const {tutorInfo} = props

    return (
        <>
            <Box
                display="flex"
                sx={{ justifyContent: 'space-between', alignItem: 'center' }}
            >
                <SuiTypography variant="h4" fontWeight="regular" color="black" my={2}>
                    Thông tin người giám hộ
                </SuiTypography>
                <IconButton aria-label="delete" size="medium" href="/trang-chu/nguoi-giam-ho/tao">
                    <AddCircleIcon fontSize="medium" color="black" /> <SuiTypography variant="button" color="black">Thêm thông tin người giám hộ</SuiTypography>
                </IconButton>
            </Box>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <ThemeProvider theme={theme}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead >
                                <TableRow>
                                    <TableCell>Họ tên</TableCell>
                                    <TableCell>Ngày sinh</TableCell>
                                    <TableCell>Số điện thoại</TableCell>
                                    <TableCell width="40%">Địa chỉ</TableCell>
                                    <TableCell>Quan hệ</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tutorInfo?.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{fDisplayDate(row.birthday)}</TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                        <TableCell>{row.address}</TableCell>
                                        <TableCell>{row.relation}</TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                aria-label="delete"
                                                size="small"
                                                href={`/trang-chu/nguoi-giam-ho/${row.id}`}
                                            >
                                                <EditIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton
                                                aria-label="delete"
                                                size="small"
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </ThemeProvider>
            </Paper>
        </>
    )
}
