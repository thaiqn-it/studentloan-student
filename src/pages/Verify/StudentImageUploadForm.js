import React, { useState } from 'react'
import DropFileInput from 'components/DropFileZone/v2'
import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material'

export default function StudentImageUploadForm({
    userData,
    handleChange,
    handleFileDrop,
    handleDelete,
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
                    {!citizenIdFrontUrl && (
                        <DropFileInput
                            onFileChangeURL={(url) =>
                                handleChange('citizenIdFrontUrl', url)
                            }
                            onFileDrop={handleFileDrop}
                            name="citizenIdFrontUrl"
                        />
                    )}

                    {citizenIdFrontUrl && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={citizenIdFrontUrl}
                                        alt="uploaded CitizenId"
                                        onClick={() =>
                                            handleDelete('citizenIdFrontUrl')
                                        }
                                    />
                                </CardActionArea>
                            </Card>
                        </>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hình CCCD/CMND sau</Typography>
                    {!citizenIdBehindUrl && (
                        <DropFileInput
                            onFileChangeURL={(url) =>
                                handleChange('citizenIdBehindUrl', url)
                            }
                            onFileDrop={handleFileDrop}
                            name="citizenIdBehindUrl"
                        />
                    )}

                    {citizenIdBehindUrl && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={citizenIdBehindUrl}
                                        alt="uploaded CitizenId"
                                        onClick={() =>
                                            handleDelete('citizenIdBehindUrl')
                                        }
                                    />
                                </CardActionArea>
                            </Card>
                        </>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hình thẻ sinh viên mặt trước</Typography>
                    {!studentIdFront && (
                        <DropFileInput
                            onFileChangeURL={(url) =>
                                handleChange('studentIdFront', url)
                            }
                            onFileDrop={handleFileDrop}
                            name="studentIdFront"
                        />
                    )}

                    {studentIdFront && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={studentIdFront}
                                        alt="uploaded CitizenId"
                                        onClick={() =>
                                            handleDelete('studentIdFront')
                                        }
                                    />
                                </CardActionArea>
                            </Card>
                        </>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hình thẻ sinh viên mặt sau</Typography>
                    {!studentIdBehind && (
                        <DropFileInput
                            onFileChangeURL={(url) =>
                                handleChange('studentIdBehind', url)
                            }
                            onFileDrop={handleFileDrop}
                            name="studentIdBehind"
                        />
                    )}

                    {studentIdBehind && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={studentIdBehind}
                                        alt="uploaded CitizenId"
                                        onClick={() =>
                                            handleDelete('studentIdBehind')
                                        }
                                    />
                                </CardActionArea>
                            </Card>
                        </>
                    )}
                </Grid>
            </Grid>
        </>
    )
}
