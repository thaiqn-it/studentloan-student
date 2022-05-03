import React, { useEffect, useState } from 'react'

import {
    Autocomplete,
    Box,
    Grid,
    TextField,
    Paper,
    Select,
    MenuItem,
    Tooltip,
    IconButton,
} from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'
import EditIcon from '@mui/icons-material/Edit'
import { fDisplayDate } from 'utils/formatTime'
import { schoolApi } from 'apis/shoolApi'
import { majorApi } from 'apis/majorApi'
import { USER_STATUS } from 'utils/enum'

export default function DetailAccountCard(props) {
    const { userInfo, schoolMajor, onChangeUser, onChangeSchoolMajor } = props

    const [schoolList, setSchoolList] = useState([])
    const [majorList, setMajorList] = useState([])

    const [school, setSchool] = useState(null)
    const [major, setMajor] = useState(null)

    const [isSelectedSchool, setIsSelectedSchool] = useState(false)

    const [error, setError] = useState({
        firstName: {
            error: false,
            title: '',
        },
        lastName: {
            error: false,
            title: '',
        },
        birthDate: {
            error: false,
            title: '',
        },
        school: {
            error: false,
            title: '',
        },
        major: {
            error: false,
            title: '',
        },
        address: {
            error: false,
            title: '',
        },
    })

    useEffect(() => {
        getSchool()
    }, [schoolMajor])

    const getSchool = () => {
        schoolApi
            .getAllSchool()
            .then((res) => {
                var schools = res.data

                setSchoolList(schools)
                var value = schools.filter(
                    (item) => item.id === schoolMajor.schoolId
                )
                if (value.length !== 0) {
                    setSchool(value[0])
                    getMajor(value[0])
                } else {
                    setSchool(null)
                }
            })
            .catch((err) => {})
    }

    const getMajor = (item) => {
        majorApi
            .getBySchoolId(item.id)
            .then((res) => {
                setIsSelectedSchool(true)
                var majors = res.data
                setMajorList(majors)
                var value = majors.filter(
                    (item) => item.id === schoolMajor.majorId
                )
                if (value.length !== 0) {
                    setMajor(value[0])
                } else {
                    setMajor(null)
                }
            })
            .catch((err) => {})
    }

    const handleChangeSchool = (item) => {
        setSchool(item)
        setMajor(null)
        onChangeSchoolMajor('schoolId', item.id)
        if (item) {
            getMajor(item)
        } else {
            setIsSelectedSchool(false)
        }
    }

    const handleChangeMajor = (item) => {
        setMajor(item)
        onChangeSchoolMajor('majorId', item.id)
    }

    const onChangeUserInfo = (e) => {
        onChangeUser(e)
    }

    return (
        <>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Box p={2}>
                    <Box py={2} display="flex" justifyContent="space-between" alignItems="center">
                        <SuiTypography variant="h5">
                            Thông tin chi tiết
                        </SuiTypography>

                        <IconButton size="medium" href="/trang-chu/mat-khau">
                            <SuiTypography variant="caption" color="black" fontWeight="bold">
                                Thay đổi mật khẩu
                            </SuiTypography>
                        </IconButton>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Họ
                            </SuiTypography>
                            <SuiInput
                                disabled={
                                    userInfo?.status === USER_STATUS.VERIFIED
                                }
                                type="text"
                                placeholder="Họ"
                                name="firstName"
                                onChange={onChangeUserInfo}
                                value={userInfo?.firstName || ''}
                                error={
                                    userInfo?.firstName === null ||
                                    userInfo?.firstName === ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Tên
                            </SuiTypography>
                            <SuiInput
                                disabled={
                                    userInfo?.status === USER_STATUS.VERIFIED
                                }
                                type="text"
                                placeholder="Tên"
                                name="lastName"
                                onChange={onChangeUserInfo}
                                value={userInfo?.lastName || ''}
                                error={
                                    userInfo?.lastName === null ||
                                    userInfo?.lastName === ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Email
                            </SuiTypography>
                            <SuiInput
                                disabled
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={userInfo?.email || ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Số điện thoại
                            </SuiTypography>
                            <SuiInput
                                disabled
                                type="number"
                                placeholder="Số điện thoại"
                                name="phoneNumber"
                                value={userInfo?.phoneNumber || ''}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Ngày sinh
                            </SuiTypography>
                            <SuiInput
                                disabled={
                                    userInfo?.status === USER_STATUS.VERIFIED
                                }
                                type="date"
                                value={fDisplayDate(userInfo?.birthDate)}
                                name="birthDate"
                                onChange={onChangeUserInfo}
                                error={
                                    userInfo?.birthDate === null ||
                                    userInfo?.birthDate === ''
                                }
                            />
                        </Grid>
                        <Grid item xs={0} md={6}></Grid>

                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Trường
                            </SuiTypography>
                            <Autocomplete
                                disabled={
                                    userInfo?.status === USER_STATUS.VERIFIED
                                }
                                onChange={(event, value) =>
                                    handleChangeSchool(value)
                                }
                                isOptionEqualToValue={(option, value) =>
                                    option.id === value.id
                                }
                                value={school}
                                id="school-select"
                                sx={{ width: 300 }}
                                options={schoolList}
                                autoHighlight
                                getOptionLabel={(option) => option.name}
                                renderOption={(props, option) => (
                                    <Box
                                        component="li"
                                        {...props}
                                        key={option.id}
                                    >
                                        {option.name} {option.district}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        error={school === null}
                                        helperText={
                                            school === null
                                                ? 'Trường không được để trống'
                                                : null
                                        }
                                        {...params}
                                        inputProps={{
                                            ...params.inputProps,
                                            // autoComplete: 'new-password',
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Chuyên ngành
                            </SuiTypography>
                            <Tooltip title="Chọn trường trước tiên">
                                <Autocomplete
                                    disabled={
                                        !isSelectedSchool ||
                                        userInfo?.status ===
                                            USER_STATUS.VERIFIED
                                    }
                                    onChange={(event, value) =>
                                        handleChangeMajor(value)
                                    }
                                    isOptionEqualToValue={(option, value) =>
                                        option.id === value.id
                                    }
                                    value={major}
                                    id="school-select"
                                    sx={{ width: 300 }}
                                    options={majorList}
                                    autoHighlight
                                    getOptionLabel={(option) => option.name}
                                    renderOption={(props, option) => (
                                        <Box
                                            component="li"
                                            {...props}
                                            key={option.id}
                                        >
                                            {option.name}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            error={major === null}
                                            helperText={
                                                major === null
                                                    ? 'Chuyên ngành không được để trống'
                                                    : null
                                            }
                                            {...params}
                                            inputProps={{
                                                ...params.inputProps,
                                                // autoComplete: 'new-password',
                                            }}
                                        />
                                    )}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Địa chỉ
                            </SuiTypography>
                            <SuiInput
                                disabled={
                                    userInfo?.status === USER_STATUS.VERIFIED
                                }
                                type="text"
                                placeholder="Địa chỉ"
                                value={userInfo?.address || ''}
                                name="address"
                                onChange={onChangeUserInfo}
                                error={
                                    userInfo?.address === null ||
                                    userInfo?.address === ''
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}
