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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
}

const rows = [
    createData(
        'Nguyễn Văn A',
        '02/05/1970',
        '0794485000',
        '123 Song Hành, Trung Mỹ Tay, Quận 12 123 Song Hành, Trung Mỹ Tay, Quận 12 123 Song Hành, Trung Mỹ Tay, Quận 12',
        'Cha'
    ),
]

export default function TutorTableCard() {
    return (
        <>
            <Box
                display="flex"
                sx={{ justifyContent: 'space-between', alignItem: 'center' }}
            >
                <SuiTypography variant="h4" fontWeight="regular" color="black" my={2}>
                    Thông tin người giám hộ
                </SuiTypography>
                <IconButton aria-label="delete" size="medium" onClick={() => window.location.href='/dashboard/tutordetail'}>
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
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
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
                                        <TableCell>{row.calories}</TableCell>
                                        <TableCell>{row.fat}</TableCell>
                                        <TableCell>{row.carbs}</TableCell>
                                        <TableCell>{row.protein}</TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                aria-label="delete"
                                                size="small"
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
