import React, { useState } from 'react'
import DropFileInput from 'components/DropFileZone/v2'
import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material'

export default function GuardianImageUploadForm({
    userData,
    handleChange,
    handleFileDrop,
    handleDelete,
    error,
}) {
    const { frontCitizenCardImageUrl, backCitizenCardImageUrl } = userData

    return (
        <>
            <Grid container columnSpacing={3} rowSpacing={3}>
                <Grid item xs={6}>
                    <Typography>Hình CCCD/CMND trước</Typography>
                    {!frontCitizenCardImageUrl && (
                        <DropFileInput
                            onFileChangeURL={(url) =>
                                handleChange('frontCitizenCardImageUrl', url)
                            }
                            onFileDrop={handleFileDrop}
                            name="frontCitizenCardImage"
                        />
                    )}

                    {frontCitizenCardImageUrl && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={frontCitizenCardImageUrl}
                                        alt="uploaded CitizenId"
                                        onClick={() =>
                                            handleDelete(
                                                'frontCitizenCardImageUrl'
                                            )
                                        }
                                    />
                                </CardActionArea>
                            </Card>
                        </>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hình CCCD/CMND sau</Typography>
                    {!backCitizenCardImageUrl && (
                        <DropFileInput
                            onFileChangeURL={(url) =>
                                handleChange('backCitizenCardImageUrl', url)
                            }
                            onFileDrop={handleFileDrop}
                            name="backCitizenCardImageUrl"
                        />
                    )}

                    {backCitizenCardImageUrl && (
                        <>
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={backCitizenCardImageUrl}
                                        alt="uploaded CitizenId"
                                        onClick={() =>
                                            handleDelete(
                                                'backCitizenCardImageUrl'
                                            )
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
