import { Box, Grid, Paper } from '@mui/material'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React from 'react'

import { fDisplayDate } from 'utils/formatTime'

import DropFileZone from '../../../../components/DropFileZone'

export default function PaperCard(props) {
    const { studentInfo, onChangeStudent } = props
    const onFileChangeURL = (url, e) => {
        onChangeStudent(null,e.target.name, url)
    }

    const onChange = (e) => {
        onChangeStudent(e)
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
                                            type="number"
                                            placeholder="Số CMND"
                                            value={studentInfo?.citizenId || ""}
                                            name="citizenId"
                                            onChange={onChange}
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
                                            value={fDisplayDate(
                                                studentInfo?.citizenCardCreatedDate
                                            )|| ""}
                                            name="citizenCardCreatedDate"
                                            onChange={onChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <SuiTypography
                                            variant="h6"
                                            fontWeight="regular"
                                        >
                                            Nơi cấp CMND/CCCD
                                        </SuiTypography>
                                        <SuiInput
                                            type="text"
                                            placeholder="Nơi cấp"
                                            value={
                                                studentInfo?.citizenCardCreatedPlace || ""
                                            }
                                            name="citizenCardCreatedPlace"
                                            onChange={onChange}
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
                                    image={
                                        studentInfo?.frontCitizenCardImageUrl
                                            ? studentInfo.frontCitizenCardImageUrl
                                            : ''
                                    }
                                    flexEnd="flex-start"
                                    elementId="frontCitizenCardImageUrl"
                                    elementName="frontCitizenCardImageUrl"
                                    onFileChangeURL={(url,e) =>
                                        onFileChangeURL(url,e)
                                    }
                                />
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
                                />
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
                                        type="number"
                                        placeholder="Mã sinh viên"
                                        value={studentInfo?.studentCardId || ""}
                                        name="studentCardId"
                                        onChange={onChange}
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
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    mb={1}
                                >
                                    Mặt sau thẻ sinh viên
                                </SuiTypography>
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
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}
