import React, { useState } from 'react'
import {
    Container,
    Typography,
    Grid,
    Divider,
    Box,
    TextField,
    CardMedia,
    Autocomplete,
    Button,
    ThemeProvider,
} from '@mui/material'
import DropFileInput from '../../components/DropFileZone'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

export default function ReportPage() {
    const [url, setUrl] = useState('')

    const top100Films = [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '7' },
        { label: '8' },
        { label: '9' },
    ]

    const onFileChangeURL = (newUrl) => {
        const id = new Date().getTime()
        const image = { description: 'Demand note', url: newUrl, id }
        // setDemandImages((current) => [...current, image]);
        setUrl(newUrl)
    }

    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
            {/* <Box component="div" sx={{ padding: '3rem 0rem' }}>
                <Typography variant="h5" align="center">
                    Báo cáo tình hình học tập / làm việc
                </Typography>
                <Typography variant="h6" align="center">
                    Hãy tạo niềm tin cho nhà đầu tư rằng bạn có khả năng chi trả
                    khoản vay
                </Typography>
            </Box> */}
            <Box sx={{ margin: '50px 0px' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs="12" md="5">
                            <SuiTypography
                                variant="h6"
                                fontWeight="regular"
                                textTransform="capitalize"
                                color="black"
                            >
                                Báo cáo (*)
                            </SuiTypography>
                            <SuiTypography
                                variant="button"
                                fontWeight="regular"
                                color="text"
                            >
                                Bạn cần cung cấp tình hình học tập/ làm việc
                                hiện tại cho hệ thống
                            </SuiTypography>
                        </Grid>
                        <Grid
                            item
                            xs="12"
                            md="7"
                            sx={{
                                h5: {
                                    fontSize: '15px',
                                },
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs="12" md="12">
                                    <Box>
                                        <SuiInput
                                            placeholder="Tiêu đề"
                                            // onChange={handleChangeTitle}
                                            // value={title}
                                        />
                                        <Box my={1}>
                                            <DropFileInput
                                            // image={url}
                                            // elementName="achievement"
                                            // elementId="achievement"
                                            // onDelete={onDelete}
                                            // onFileChangeURL={onFileChangeURL}
                                            />
                                        </Box>
                                        <SuiButton
                                            color="primary"
                                            // onClick={handleCreateAchieve}
                                        >
                                            Thêm
                                        </SuiButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Divider sx={{ margin: '50px 0px' }} />
                    <SuiButton
                        variant="contained"
                        color="secondary"
                        sx={{
                            margin: '0 auto',
                            display: 'block',
                            textTransform: 'none',
                            marginRight: '0',
                            backgroundColor: '#335188',
                        }}
                        size="large"
                    >
                        Send
                    </SuiButton> */}
                </Container>
            </Box>
            {/* </ThemeProvider> */}
        </>
    )
}
