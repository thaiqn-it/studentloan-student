import React, { useState } from 'react'
import DropFileInput from 'components/DropFileZone'
import { Card, CardMedia, Grid, Typography } from '@mui/material'

export default function StudentImageUploadForm({
    userData,
    handleChange,
    error,
}) {
    const {
        citizenIdFrontUrl,
        citizenIdBehindUrl,
        studentIdFront,
        studentIdBehind,
    } = userData

    return (
        <>
            <Grid container columnSpacing={3} rowSpacing={3}>
                <Grid item xs={6}>
                    <Typography>Hình CCCD/CMND trước</Typography>
                    <DropFileInput
                        onFileChangeURL={(url) =>
                            handleChange('citizenIdFrontUrl', url)
                        }
                    />
                    {citizenIdFrontUrl && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardMedia
                                    component="img"
                                    image={citizenIdFrontUrl}
                                    alt="uploaded CitizenId"
                                />
                            </Card>
                        </>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hình CCCD/CMND sau</Typography>
                    <DropFileInput
                        onFileChangeURL={(url) =>
                            handleChange('citizenIdBehindUrl', url)
                        }
                    />
                    {citizenIdBehindUrl && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardMedia
                                    component="img"
                                    image={citizenIdBehindUrl}
                                    alt="uploaded CitizenId"
                                />
                            </Card>
                        </>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hình thẻ sinh viên mặt trước</Typography>
                    <DropFileInput
                        onFileChangeURL={(url) =>
                            handleChange('studentIdFront', url)
                        }
                    />
                    {studentIdFront && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardMedia
                                    component="img"
                                    image={studentIdFront}
                                    alt="uploaded StudentId "
                                />
                            </Card>
                        </>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hình thẻ sinh viên mặt sau</Typography>
                    <DropFileInput
                        onFileChangeURL={(url) =>
                            handleChange('studentIdBehind', url)
                        }
                    />
                    {studentIdBehind && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardMedia
                                    component="img"
                                    image={studentIdBehind}
                                    alt="uploaded StudentId"
                                />
                            </Card>
                        </>
                    )}
                </Grid>
            </Grid>
        </>
    )
}
