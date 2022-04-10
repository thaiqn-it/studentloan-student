import React, { useState } from 'react'
import { Container, Grid, Box } from '@mui/material'
import DropFileInput from '../../components/DropFileZone'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

export default function ReportPage(props) {
    const { reportMedia, loanId } = props
    const [url, setUrl] = useState('')

    const data = {
        loanId: loanId,
        description: '',
        imageUrl: '',
        type: 'REPORT',
        status: 'isActive',
    }

    const [report, setReport] = useState(null)

    const onFileChangeURL = (newUrl) => {
        setUrl(newUrl)
    }

    return (
        <>
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
                                            image={url}
                                            elementName="imageUrl"
                                            elementId="imageUrl"
                                            // onDelete={onDelete}
                                            onFileChangeURL={onFileChangeURL}
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
