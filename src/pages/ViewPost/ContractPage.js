import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Box, Container, Divider, Grid } from '@mui/material'

import { imageApi } from '../../apis/imageApi'

import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

import DownloadIcon from '@mui/icons-material/Download'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
export default function App() {
    const [numPages, setNumPages] = useState(null)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    const onDownload = async () => {
        await imageApi
            .downloadFileURL(
                'https://res.cloudinary.com/larrytran/image/upload/v1648997077/pdf/hmq3b48dybfpn1mvfqsa.pdf'
            )
            .then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                )
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', `hopdong.pdf`) //or any other extension
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            })
    }
    return (
        <>
            <Box>
                <Box display="flex" justifyContent="flex-end">
                    <SuiButton
                        startIcon={<DownloadIcon />}
                        onClick={onDownload}
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 0 }}
                    >
                        Download
                    </SuiButton>
                </Box>

                <Container maxWidth="sm">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <SuiTypography variant="button">
                                Mã hợp đồng
                            </SuiTypography>
                            <SuiInput disabled value="12/05/2022" />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SuiTypography variant="button">
                                Ngày bắt đầu
                            </SuiTypography>
                            <SuiInput disabled value="12/05/2022" />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SuiTypography variant="button">
                                Ngày kết thúc
                            </SuiTypography>
                            <SuiInput disabled value="12/05/2022" />
                        </Grid>
                    </Grid>

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        sx={{ width: { xs: '110%', md: '100%' } }}
                    >
                        <Document
                            file="https://res.cloudinary.com/larrytran/image/upload/v1648997077/pdf/hmq3b48dybfpn1mvfqsa.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <>
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                    />
                                    <Divider />
                                </>
                            ))}
                        </Document>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
