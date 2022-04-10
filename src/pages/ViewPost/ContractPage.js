import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Box, Container, Divider, Grid, Paper } from '@mui/material'

import { imageApi } from '../../apis/imageApi'

import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'

import DownloadIcon from '@mui/icons-material/Download'
import { useParams } from 'react-router-dom'
import { fDate } from 'utils/formatTime'

import JSZip from 'jszip'
import { saveAs } from 'file-saver'

var zip = JSZip()

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
export default function ContractPage(props) {
    // const { id } = useParams()
    const { contractInfo } = props
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
                // const url = window.URL.createObjectURL(
                //     new Blob([response.data])
                // )

                const blob = new Blob([response.data])

                zip.file('hopdong.pdf', blob, {
                    binary: true,
                })

                zip.generateAsync({ type: "blob" }).then(function(blobi) {
                    saveAs(blobi, "test_archive.zip");
                  });
                // const link = document.createElement('a')
                // link.href = url
                // link.setAttribute('download', `hopdong-${contractInfo[0]?.id}.pdf`) //or any other extension
                // document.body.appendChild(link)
                // link.click()
                // document.body.removeChild(link)
            })
    }
    return (
        <>
            <Paper sx={{ background: '#e6e6e6' }}>
                <Box display="flex" justifyContent="flex-end">
                    <SuiButton
                        startIcon={<DownloadIcon />}
                        onClick={onDownload}
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 0 }}
                    >
                        Tải hợp đồng
                    </SuiButton>
                </Box>

                <Container maxWidth="md">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                background: '#ffffff',
                                maxWidth: '612px',
                                p: 3,
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12}>
                                    <SuiTypography variant="button">
                                        Mã hợp đồng
                                    </SuiTypography>
                                    <SuiInput
                                        disabled
                                        value={contractInfo[0]?.id}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <SuiTypography variant="button">
                                        Ngày bắt đầu
                                    </SuiTypography>
                                    <SuiInput
                                        disabled
                                        value={fDate(
                                            contractInfo[0]?.startDate
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <SuiTypography variant="button">
                                        Ngày kết thúc
                                    </SuiTypography>
                                    <SuiInput
                                        disabled
                                        value={fDate(contractInfo[0]?.endDate)}
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            sx={{ width: { xs: '110%', md: '100%' }, mt: 3 }}
                        >
                            <Document
                                file={contractInfo[0]?.contractNote}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                {Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <>
                                            <Page
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                            />
                                            <Divider sx={{ mb: 3 }} />
                                        </>
                                    )
                                )}
                            </Document>
                        </Box>
                    </Box>
                </Container>
            </Paper>
        </>
    )
}
