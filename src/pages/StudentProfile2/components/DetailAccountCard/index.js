import React, { useEffect, useState } from 'react'

import { Autocomplete, Box, Grid, TextField, Paper } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'
import { fDisplayDate } from 'utils/formatTime'
import { schoolApi } from 'apis/shoolApi'
import { majorApi } from 'apis/majorApi'

export default function DetailAccountCard(props) {
    const { studentInfo, userInfo, onChangeUser } = props

    const [school, setSchool] = useState([])
    const [major, setMajor] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        schoolApi.getAllSchool().then((res) => {
            setSchool(res.data)
        })
        majorApi.getAllMajor().then((res) => {
            setMajor(res.data)
        })
    }

    const onChangeUserInfo = (e) => {
            onChangeUser(e)
    }

    const onChangeShoolMajor = () => {}

    return (
        <>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Box p={2}>
                    <Box py={2}>
                        <SuiTypography variant="h5">
                            Thông tin chi tiết
                        </SuiTypography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Họ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Họ"
                                name="firstName"
                                onChange={onChangeUserInfo}
                                value={userInfo?.firstName || ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Tên
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Tên"
                                name="lastName"
                                onChange={onChangeUserInfo}
                                value={userInfo?.lastName || ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Email
                            </SuiTypography>
                            <SuiInput
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={onChangeUserInfo}
                                value={userInfo?.email || ""}
                            />
                        </Grid>
                        {/* <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Mật khẩu
                            </SuiTypography>
                            <SuiInput
                                type="password"
                                // placeholder="Email"
                                value="password"
                            />
                        </Grid> */}
                        <Grid item xs={12} md={6}>
                        <SuiTypography variant="h6" fontWeight="regular">
                                Ngày sinh
                            </SuiTypography>
                            <SuiInput
                                type="date"
                                value={fDisplayDate(userInfo?.birthDate)}
                                name="birthDate"
                                onChange={onChangeUserInfo}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Số điện thoại
                            </SuiTypography>
                            <SuiInput
                                type="number"
                                placeholder="Số điện thoại"
                                name="phoneNumber"
                                value={userInfo?.phoneNumber || ""}
                                onChange={onChangeUserInfo}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Trường
                            </SuiTypography>
                            {/* <Autocomplete
                                id="combo-box-demo"
                                // getOptionLabel={(item) => `${item.name}`}
                                options={school}
                                value="FPT"
                                // sx={{ width: 300 }}
                                noOptionsText={'Trường không hợp lệ'}
                                renderOption={(props, school) => (
                                    <Box
                                        component="li"
                                        {...props}
                                        key={school.id}
                                    >
                                        {school.name}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField {...params} label="" />
                                )} */}
                            {/* /> */}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Chuyên ngành
                            </SuiTypography>
                            {/* <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                // options={top100Films}
                                // sx={{ width: 300 }}
                                // value="FPT"
                                disabled={true}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            /> */}
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Địa chỉ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Địa chỉ"
                                value={userInfo?.address || ""}
                                name="address"
                                onChange={onChangeUserInfo}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}
