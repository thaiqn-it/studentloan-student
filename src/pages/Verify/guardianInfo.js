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
        guardianLastName,
        guardianFirstName,
        guardianAddress,
        guardianBirthday,
        guardianRelation,
        guardianCitizenId,
        guardianPhoneNumber,
        guardianEmail,
        guardianCitizenCardCreatedDate,
        guardianCitizenCardCreatedPlace,
    } = userData

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <InputField
                            value={guardianLastName}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ họ"
                            label="Họ"
                            name="guardianLastName"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={guardianEmail}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ email"
                            label="Email của người giám hộ"
                            name="guardianEmail"
                            error={false}
                            type="text"
                        />{' '}
                        <InputField
                            value={guardianPhoneNumber}
                            name="guardianPhoneNumber"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ô này"
                            label="Số điện thoại"
                            error={false}
                            type="number"
                        />
                        <InputField
                            value={guardianCitizenCardCreatedDate}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ngày tháng "
                            label="Ngày cấp CCCD/CMND của người giám hộ"
                            name="guardianCitizenCardCreatedDate"
                            error={false}
                            type="date"
                        />
                        <InputField
                            value={guardianAddress}
                            name="guardianAddress"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ địa chỉ"
                            label="Địa Chỉ (Theo sổ hộ khẩu)"
                            error={false}
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField
                            value={guardianFirstName}
                            name="guardianFirstName"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ tên"
                            label="Tên"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={guardianBirthday}
                            name="guardianBirthday"
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ ngày tháng năm sinh"
                            label="Ngày Sinh"
                            error={false}
                            type="date"
                        />
                        <InputField
                            value={guardianCitizenId}
                            handleInputState={handleChange}
                            name="guardianCitizenId"
                            helperText="Cần điền đầy đủ số CMND hoặc CCCD"
                            label="Số CCCD hoặc CMND"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={guardianCitizenCardCreatedPlace}
                            handleInputState={handleChange}
                            helperText="Cần điền đầy đủ nơi cấp CCCD/CMND của người giám hộ"
                            label="Nơi cấp CCCD/CMND của người giám hộ"
                            name="guardianCitizenCardCreatedPlace"
                            error={false}
                            type="text"
                        />
                        <InputField
                            value={guardianRelation}
                            name="guardianRelation"
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
