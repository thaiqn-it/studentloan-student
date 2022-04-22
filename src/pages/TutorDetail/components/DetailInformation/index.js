import React from 'react'

import { Autocomplete, Box, Grid, TextField, Paper } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import { fDisplayDate } from 'utils/formatTime'
import { TUTOR_STATUS } from 'utils/enum'

export default function DetailInformation(props) {
    const { tutor, onChangeTutorInfo, erroMess } = props
    const onChange = (e) => {
        onChangeTutorInfo(e)
    }
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
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Họ và tên
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Họ và tên"
                                name="name"
                                onChange={onChange}
                                value={tutor?.name}
                                error={erroMess && tutor?.name === ''}
                                disabled={
                                    tutor?.status === TUTOR_STATUS.VERIFIED
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Email
                            </SuiTypography>
                            <SuiInput
                                type="email"
                                placeholder="Email"
                                value={tutor?.email}
                                name="email"
                                onChange={onChange}
                                error={erroMess && tutor?.email === ''}
                                disabled={
                                    tutor?.status === TUTOR_STATUS.VERIFIED
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Ngày sinh
                            </SuiTypography>
                            <SuiInput
                                type="date"
                                value={fDisplayDate(tutor?.birthday)}
                                name="birthday"
                                onChange={onChange}
                                error={erroMess && tutor?.birthday === ''}
                                disabled={
                                    tutor?.status === TUTOR_STATUS.VERIFIED
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Quan hệ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Quan hệ"
                                value={tutor?.relation}
                                name="relation"
                                onChange={onChange}
                                error={erroMess && tutor?.relation === ''}
                                disabled={
                                    tutor?.status === TUTOR_STATUS.VERIFIED
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Số điện thoại
                            </SuiTypography>
                            <SuiInput
                                type="number"
                                placeholder="Số điện thoại"
                                value={tutor?.phone}
                                name="phone"
                                onChange={onChange}
                                error={erroMess && tutor?.phone === ''}
                                disabled={
                                    tutor?.status === TUTOR_STATUS.VERIFIED
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="h6" fontWeight="regular">
                                Địa chỉ
                            </SuiTypography>
                            <SuiInput
                                type="text"
                                placeholder="Địa chỉ"
                                value={tutor?.address}
                                name="address"
                                onChange={onChange}
                                error={erroMess && tutor?.address === ''}
                                disabled={
                                    tutor?.status === TUTOR_STATUS.VERIFIED
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}
