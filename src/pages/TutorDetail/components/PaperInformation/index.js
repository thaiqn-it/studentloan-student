import { Box, Grid, Paper, Autocomplete, TextField } from '@mui/material'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'

import { fDisplayDate } from 'utils/formatTime'
import { PROVINCEVN } from '..//..//..//..//apis/static/provinceVN'

import DropFileZone from '../../../../components/DropFileZone'
import { TUTOR_STATUS } from 'utils/enum'

export default function PaperInformation(props) {
    const { tutor, onChangeTutorInfo, erroMess } = props
    const [listCity, setListCity] = useState()
    const [city, setCity] = useState(null)

    useEffect(() => {
        getCity()
    }, [])

    const getCity = () => {
        var list = PROVINCEVN.province
        var city = list.filter(
            (item) => item.name === tutor?.citizenCardCreatedPlace
        )
        if (city.length !== 0) {
            setCity(city[0])
        } else {
            setCity(null)
        }
        setListCity(PROVINCEVN.province)
    }

    const onChangeCity = (value) => {
        setCity(value)
        if (value) {
            onChangeTutorInfo(null, 'citizenCardCreatedPlace', value.name)
        } else {
            onChangeTutorInfo(null, 'citizenCardCreatedPlace', '')
        }
    }

    const onChange = (e) => {
        onChangeTutorInfo(e)
    }
    const onFileChangeURL = (newUrl, event) => {
        onChangeTutorInfo(null, event.target.name, newUrl)
    }
    const onDelete = (id) => {
        onChangeTutorInfo(null, id, '')
    }
    return (
        <>
            <Box>
                <SuiTypography
                    variant="h4"
                    fontWeight="regular"
                    my={2}
                    color="black"
                >
                    Giấy tờ
                </SuiTypography>
                <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                    <Box p={2}>
                        <Box>
                            <SuiTypography
                                variant="h5"
                                fontWeight="regular"
                                my={2}
                            >
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
                                                type="number"
                                                placeholder="Số CMND"
                                                onChange={onChange}
                                                name="citizenId"
                                                value={tutor?.citizenId}
                                                error={
                                                    erroMess &&
                                                    tutor?.citizenId === ''
                                                }
                                                disabled={
                                                    tutor?.status ===
                                                    TUTOR_STATUS.VERIFIED
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
                                                type="date"
                                                placeholder="Ngày cấp"
                                                onChange={onChange}
                                                name="citizenCardCreatedDate"
                                                value={fDisplayDate(
                                                    tutor?.citizenCardCreatedDate
                                                )}
                                                error={
                                                    erroMess &&
                                                    tutor?.citizenCardCreatedDate ===
                                                        ''
                                                }
                                                disabled={
                                                    tutor?.status ===
                                                    TUTOR_STATUS.VERIFIED
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
                                            {/* <SuiInput
                                                type="text"
                                                placeholder="Nơi cấp"
                                                onChange={onChange}
                                                name="citizenCardCreatedPlace"
                                                value={
                                                    tutor?.citizenCardCreatedPlace
                                                }
                                            /> */}
                                            <Autocomplete
                                                disabled={
                                                    tutor?.status ===
                                                    TUTOR_STATUS.VERIFIED
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
                                                renderOption={(
                                                    props,
                                                    option
                                                ) => (
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
                                                        error={
                                                            erroMess &&
                                                            city === null
                                                        }
                                                        helperText={
                                                            erroMess &&
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
                                    <DropFileZone
                                        elementId="frontCitizenCardImageUrl"
                                        elementName="frontCitizenCardImageUrl"
                                        flexEnd="flex-start"
                                        image={
                                            tutor?.frontCitizenCardImageUrl
                                                ? tutor.frontCitizenCardImageUrl
                                                : ''
                                        }
                                        onFileChangeURL={(url, event) =>
                                            onFileChangeURL(url, event)
                                        }
                                        onDelete={onDelete}
                                    />
                                    {erroMess &&
                                    tutor?.frontCitizenCardImageUrl === '' ? (
                                        <SuiTypography
                                            variant="caption"
                                            fontWeight="regular"
                                            color="error"
                                        >
                                            Mặt trước CMND/CCCD không được để
                                            trống
                                        </SuiTypography>
                                    ) : null}
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        mb={1}
                                    >
                                        Mặt sau CMND/CCCD
                                    </SuiTypography>
                                    <DropFileZone
                                        elementId="backCitizenCardImageUrl"
                                        elementName="backCitizenCardImageUrl"
                                        flexEnd="flex-start"
                                        image={
                                            tutor?.backCitizenCardImageUrl
                                                ? tutor.backCitizenCardImageUrl
                                                : ''
                                        }
                                        onFileChangeURL={(url, event) =>
                                            onFileChangeURL(url, event)
                                        }
                                        onDelete={onDelete}
                                    />
                                    {erroMess &&
                                    tutor?.backCitizenCardImageUrl === '' ? (
                                        <SuiTypography
                                            variant="caption"
                                            fontWeight="regular"
                                            color="error"
                                        >
                                            Mặt sau CMND/CCCD không được để
                                            trống
                                        </SuiTypography>
                                    ) : null}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}
