import { Autocomplete, Box, Grid, Paper, TextField } from '@mui/material'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'

import { fDisplayDate } from 'utils/formatTime'

import { PROVINCEVN } from '..//..//..//..//apis/static/provinceVN'

import DropFileZone from '../../../../components/DropFileZone'
import { USER_STATUS } from 'utils/enum'
import ImageCard from 'components/ImageCard'

export default function PaperCard(props) {
    const { studentInfo, onChangeStudent, userStatus } = props
    const [listCity, setListCity] = useState()
    const [city, setCity] = useState(null)

    const onFileChangeURL = (url, e) => {
        onChangeStudent(null, e.target.name, url)
    }

    const onChange = (e) => {
        onChangeStudent(e)
    }

    const onChangeCity = (value) => {
        setCity(value)
        if (value) {
            onChangeStudent(null, 'citizenCardCreatedPlace', value.name)
        } else {
            onChangeStudent(null, 'citizenCardCreatedPlace', '')
        }
    }

    useEffect(() => {
        getCity()
    }, [studentInfo])

    const getCity = () => {
        var list = PROVINCEVN.province
        var city = list.filter(
            (item) => item.name === studentInfo?.citizenCardCreatedPlace
        )
        if (city.length !== 0) {
            setCity(city[0])
        } else {
            setCity(null)
        }
        setListCity(PROVINCEVN.province)
    }

    const onDelete = (id) => {
        onChangeStudent(null, id, null)
    }

    return (
        <>
            <SuiTypography
                variant="h4"
                fontWeight="regular"
                color="black"
                my={2}
            >
                Giấy tờ
            </SuiTypography>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <Box p={2}>
                    <Box>
                        <SuiTypography variant="h5" fontWeight="regular" my={2}>
                            CMND/CCCD
                        </SuiTypography>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Số CMND/CCCD
                                        </SuiTypography>
                                        <SuiInput
                                            disabled={
                                                userStatus ===
                                                USER_STATUS.VERIFIED
                                            }
                                            type="number"
                                            placeholder="Số CMND"
                                            value={studentInfo?.citizenId || ''}
                                            name="citizenId"
                                            onChange={onChange}
                                            error={
                                                studentInfo?.citizenId ===
                                                    null ||
                                                studentInfo?.citizenId === ''
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Ngày cấp CMND/CCCD
                                        </SuiTypography>
                                        <SuiInput
                                            disabled={
                                                userStatus ===
                                                USER_STATUS.VERIFIED
                                            }
                                            type="date"
                                            placeholder="Ngày cấp"
                                            value={
                                                fDisplayDate(
                                                    studentInfo?.citizenCardCreatedDate
                                                ) || ''
                                            }
                                            name="citizenCardCreatedDate"
                                            onChange={onChange}
                                            error={
                                                studentInfo?.citizenCardCreatedDate ===
                                                    null ||
                                                studentInfo?.citizenCardCreatedDate ===
                                                    ''
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Nơi cấp CMND/CCCD
                                        </SuiTypography>
                                        <Autocomplete
                                            disabled={
                                                userStatus ===
                                                USER_STATUS.VERIFIED
                                            }
                                            name="citizenCardCreatedPlace"
                                            onChange={(event, value) =>
                                                onChangeCity(value)
                                            }
                                            isOptionEqualToValue={(
                                                option,
                                                value
                                            ) =>
                                                option.idProvince ===
                                                value.idProvince
                                            }
                                            value={city}
                                            id="school-select"
                                            sx={{ width: 300 }}
                                            options={listCity}
                                            autoHighlight
                                            getOptionLabel={(option) =>
                                                option.name
                                            }
                                            renderOption={(props, option) => (
                                                <Box
                                                    component="li"
                                                    {...props}
                                                    key={option.idProvince}
                                                >
                                                    {option.name}
                                                </Box>
                                            )}
                                            renderInput={(params) => (
                                                <TextField
                                                    error={city === null}
                                                    helperText={
                                                        city === null
                                                            ? 'Nơi cấp không được để trống'
                                                            : null
                                                    }
                                                    {...params}
                                                    inputProps={{
                                                        ...params.inputProps,
                                                    }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    mb={1}
                                >
                                    Mặt trước CMND/CCCD
                                </SuiTypography>
                                {userStatus === USER_STATUS.VERIFIED ? (
                                    <ImageCard
                                        image={
                                            studentInfo?.frontCitizenCardImageUrl
                                        }
                                    />
                                ) : (
                                    <DropFileZone
                                        image={
                                            studentInfo?.frontCitizenCardImageUrl
                                                ? studentInfo.frontCitizenCardImageUrl
                                                : ''
                                        }
                                        flexEnd="flex-start"
                                        elementId="frontCitizenCardImageUrl"
                                        elementName="frontCitizenCardImageUrl"
                                        onFileChangeURL={(url, e) =>
                                            onFileChangeURL(url, e)
                                        }
                                        onDelete={onDelete}
                                    />
                                )}

                                {studentInfo?.frontCitizenCardImageUrl ? null : (
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="regular"
                                        color="error"
                                    >
                                        Mặt trước CMND/CCCD không được để trống
                                    </SuiTypography>
                                )}
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    mb={1}
                                >
                                    Mặt sau CMND/CCCD
                                </SuiTypography>
                                {userStatus === USER_STATUS.VERIFIED ? (
                                    <ImageCard
                                        image={
                                            studentInfo?.backCitizenCardImageUrl
                                        }
                                    />
                                ) : (
                                    <DropFileZone
                                        image={
                                            studentInfo?.backCitizenCardImageUrl
                                                ? studentInfo.backCitizenCardImageUrl
                                                : ''
                                        }
                                        flexEnd="flex-start"
                                        elementId="backCitizenCardImageUrl"
                                        elementName="backCitizenCardImageUrl"
                                        onFileChangeURL={(url, e) =>
                                            onFileChangeURL(url, e)
                                        }
                                        onDelete={onDelete}
                                    />
                                )}
                                {studentInfo?.backCitizenCardImageUrl ? null : (
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="regular"
                                        color="error"
                                    >
                                        Mặt sau CMND/CCCD không được để trống
                                    </SuiTypography>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={10}>
                        <SuiTypography variant="h5" fontWeight="regular" my={2}>
                            Thẻ sinh viên
                        </SuiTypography>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Grid item xs={12} md={4}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                    >
                                        Mã sinh viên
                                    </SuiTypography>
                                    <SuiInput
                                        disabled={
                                            userStatus === USER_STATUS.VERIFIED
                                        }
                                        placeholder="Mã sinh viên"
                                        value={studentInfo?.studentCardId || ''}
                                        name="studentCardId"
                                        onChange={onChange}
                                        error={
                                            studentInfo?.studentCardId ===
                                                null ||
                                            studentInfo?.studentCardId === ''
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    mb={1}
                                >
                                    Mặt trước thẻ sinh viên
                                </SuiTypography>
                                {userStatus === USER_STATUS.VERIFIED ? (
                                    <ImageCard
                                        image={
                                            studentInfo?.frontStudentCardImageUrl
                                        }
                                    />
                                ) : (
                                    <DropFileZone
                                        image={
                                            studentInfo?.frontStudentCardImageUrl
                                                ? studentInfo.frontStudentCardImageUrl
                                                : ''
                                        }
                                        flexEnd="flex-start"
                                        elementId="frontStudentCardImageUrl"
                                        elementName="frontStudentCardImageUrl"
                                        onFileChangeURL={(url, e) =>
                                            onFileChangeURL(url, e)
                                        }
                                        onDelete={onDelete}
                                    />
                                )}
                                {studentInfo?.frontStudentCardImageUrl ? null : (
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="regular"
                                        color="error"
                                    >
                                        Mặt trước thẻ sinh viên không được để
                                        trống
                                    </SuiTypography>
                                )}
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    mb={1}
                                >
                                    Mặt sau thẻ sinh viên
                                </SuiTypography>
                                {userStatus === USER_STATUS.VERIFIED ? (
                                    <ImageCard
                                        image={
                                            studentInfo?.backStudentCardImageUrl
                                        }
                                    />
                                ) : (
                                    <DropFileZone
                                        image={
                                            studentInfo?.backStudentCardImageUrl
                                                ? studentInfo.backStudentCardImageUrl
                                                : ''
                                        }
                                        flexEnd="flex-start"
                                        elementId="backStudentCardImageUrl"
                                        elementName="backStudentCardImageUrl"
                                        onFileChangeURL={(url, e) =>
                                            onFileChangeURL(url, e)
                                        }
                                        onDelete={onDelete}
                                    />
                                )}
                                {studentInfo?.backStudentCardImageUrl ? null : (
                                    <SuiTypography
                                        variant="caption"
                                        fontWeight="regular"
                                        color="error"
                                    >
                                        Mặt sau thẻ sinh viên không được để
                                        trống
                                    </SuiTypography>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}
