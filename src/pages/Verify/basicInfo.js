import { Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SuiInput from 'components/SuiInput'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import classes from './basicInfo.module.css'
import { InputField } from '.'

export default function BasicInfo({ userData, handleChange, error }) {
    const {
        firstname,
        lastname,
        address,
        school,
        major,
        citizenId,
        birthday,
        totalSemester,
        currentSemester,
        citizenCardCreatedDate,
        citizenCardCreatedPlace,
    } = userData

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <InputField
                            value={firstname}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ họ"
                            label="Họ"
                            error={error}
                            name="firstname"
                            type="text"
                        />
                        <InputField
                            value={citizenId}
                            handleInputState={handleChange}
                            name="citizenId"
                            helperText="Cần điền đầy số CMND hoặc CCCD"
                            label="Số CCCD hoặc CMND"
                            error={error}
                            type="number"
                        />{' '}
                        <InputField
                            value={citizenCardCreatedPlace}
                            handleInputState={handleChange}
                            name="citizenCardCreatedPlace"
                            helperText="Cần điền đầy đủ nơi cấp CCCD/CMND"
                            label="Nơi cấp CCCD/CMND"
                            error={error}
                            type="text"
                        />
                        <InputField
                            value={address}
                            handleInputState={handleChange}
                            name="address"
                            helperText="Cần điền đầy đủ địa chỉ"
                            label="Địa Chỉ (Theo sổ hộ khẩu)"
                            error={error}
                            type="text"
                        />
                        
                         <InputField
                            value={major}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ tên ngành"
                            label="Ngành Học"
                            error={error}
                            name="major"
                            type="text"
                        />
                        <InputField
                            value={currentSemester}
                            handleInputState={handleChange}
                            name="currentSemester"
                            helperText="Cần điền đầy đủ họ"
                            label="Kì Hiện tại"
                            error={error}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField
                            value={lastname}
                            handleInputState={handleChange}
                            name="lastname"
                            helperText="Cần điền đầy đủ tên"
                            label="Tên"
                            error={error}
                            type="text"
                        />
                        <InputField
                            value={birthday}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ngày tháng năm sinh"
                            label="Ngày Sinh"
                            name="birthday"
                            error={error}
                            type="date"
                        />
                        <InputField
                            value={citizenCardCreatedDate}
                            handleInputState={handleChange}
                            name="citizenCardCreatedDate"
                            helperText="Cần điền đầy đủ ngày tháng cấp CCCD/CMND"
                            label="Ngày cấp CCCD/CMND"
                            error={error}
                            type="date"
                        />
                        <InputField
                            value={school}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ tên trường"
                            label="Trường"
                            error={error}
                            name="school"
                            type="text"
                        />
                       <InputField
                            value={totalSemester}
                            handleInputState={handleChange}
                            name="totalSemester"
                            helperText="Cần điền đầy đủ ô này"
                            label="Tổng số kì cần học"
                            error={error}
                            type="number"
                        />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}
