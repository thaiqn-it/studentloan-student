import { Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SuiInput from 'components/SuiInput'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import classes from './basicInfo.module.css'
import { InputField } from '.'

export default function GuardianInfo({ handleChange, userData, error }) {
    const {
        lastname,
        firstname,
        address,
        birthday,
        relation,
        citizenId,
        phone,
        email,
        citizenCardCreatedDate,
        citizenCardCreatedPlace,
    } = userData

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <InputField
                            value={lastname}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ họ"
                            label="Họ"
                            name="lastname"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={email}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ email"
                            label="Email của người giám hộ"
                            name="email"
                            error={false}
                            type="text"
                        />{' '}
                        <InputField
                            value={phone}
                            name="phone"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ô này"
                            label="Số điện thoại"
                            error={false}
                            type="number"
                        />
                        <InputField
                            value={citizenCardCreatedDate}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ngày tháng "
                            label="Ngày cấp CCCD/CMND của người giám hộ"
                            name="citizenCardCreatedDate"
                            error={false}
                            type="date"
                        />
                        <InputField
                            value={address}
                            name="address"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ địa chỉ"
                            label="Địa Chỉ (Theo sổ hộ khẩu)"
                            error={false}
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField
                            value={firstname}
                            name="firstname"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ tên"
                            label="Tên"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={birthday}
                            name="birthday"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ngày tháng năm sinh"
                            label="Ngày Sinh"
                            error={false}
                            type="date"
                        />
                        <InputField
                            value={citizenId}
                            handleInputState={handleChange}
                            name="citizenId"
                            helperText="Cần điền đầy đủ số CMND hoặc CCCD"
                            label="Số CCCD hoặc CMND"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={citizenCardCreatedPlace}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ nơi cấp CCCD/CMND của người giám hộ"
                            label="Nơi cấp CCCD/CMND của người giám hộ"
                            name="citizenCardCreatedPlace"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={relation}
                            name="relation"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ô này"
                            label="Quan hệ với sinh viên"
                            error={false}
                            type="text"
                        />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}
