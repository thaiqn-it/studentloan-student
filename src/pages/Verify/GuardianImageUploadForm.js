import React, { useState } from 'react'
import DropFileInput from 'components/DropFileZone'
import { Card, CardMedia, Grid, Typography } from '@mui/material'

export default function GuardianImageUploadForm({
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
            </Grid>
        </>
    )
}
