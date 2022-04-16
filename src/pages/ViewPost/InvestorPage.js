import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import InvestorTable from './components/InvestmentsTable'
import MiniStatisticsCard from 'examples/Cards/StatisticsCards/MiniStatisticsCard'
import { Box, Grid } from '@mui/material'
import { fCurrency } from 'utils/formatNumber'
import SuiButton from 'components/SuiButton'

import DownloadIcon from '@mui/icons-material/Download'

import Loading from 'components/Loading'

import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { imageApi } from 'apis/imageApi'
import SnackbarMessage from 'components/SnackbarMessage'
import { investmentApi } from 'apis/investmentApi'

export default function InvestorPage(props) {
    const { id } = useParams()
    const [currentMoney, setCurrentMoney] = useState(0)
    const [investments, setInvestments] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenSnack, setIsOpenSnack] = useState(false)
    const [snack, setSnack] = useState({
        message: 'Không thể tải hợp đồng',
        color: 'error',
    })

    useEffect(() => {
        investmentApi
            .getInvestmentByLoanId(id)
            .then((res) => {
                var invest = res.data
                if (res.data.length != 0) {
                    setInvestments(invest)
                    console.log(invest)
                    var sum = 0
                    invest.map((item) => {
                        sum += item.total
                    })
                    setCurrentMoney(sum)
                }
            })
            .catch((err) => {})
    }, [])

    function getFileName(url) {
        var splittedArr = url.split('/')
        var name = splittedArr[splittedArr.length - 1]
        var fileName = name.substring(name.indexOf('-') + 1, name.length)
        return fileName
    }

    const downloadAllContract = () => {
        if (investments) {
            setIsLoading(true)
            var zip = JSZip()
            var requests = investments.map((item) => {
                return imageApi.downloadFileURL(item?.Contract?.contractUrl)
            })
            Promise.all(requests)
                .then((responses) => {
                    responses.map((item) => {
                        const blob = new Blob([item.data])
                        zip.file(getFileName(item.config.url), blob, {
                            binary: true,
                        })
                    })

                    zip.generateAsync({ type: 'blob' }).then(function (blob) {
                        saveAs(blob, 'hop-dong.zip')
                    })
                    setIsLoading(false)
                })
                .catch((err) => {
                    setIsLoading(false)
                    console.log(err)
                })
        } else {
            setIsOpenSnack(true)
        }
    }

    const onClickClose = () => {
        setIsOpenSnack(false)
    }

    return (
        <>
            {isLoading ? <Loading /> : null}
            <SnackbarMessage
                open={isOpenSnack}
                onClickClose={onClickClose}
                snack={snack}
            />
            <Box pb={3} pl={3} sx={{ background: '#f7f5f2' }}>
                <Box display="flex" justifyContent="flex-end">
                    <SuiButton
                        startIcon={<DownloadIcon />}
                        onClick={downloadAllContract}
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 0 }}
                    >
                        Tải tất cả hợp đồng
                    </SuiButton>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <MiniStatisticsCard
                            title={{ text: 'Số tiền đang kêu gọi' }}
                            count={fCurrency(currentMoney)}
                            // percentage={{ color: 'success', text: '+55%' }}
                            icon={{ color: 'info', component: 'paid' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <MiniStatisticsCard
                            title={{ text: 'Nhà đầu tư' }}
                            count={
                                investments?.length === undefined
                                    ? '0'
                                    : investments?.length + ' thành viên'
                            }
                            // percentage={{ color: 'success', text: '+55%' }}
                            icon={{ color: 'success', component: 'people' }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box mb={3}>
                <InvestorTable data={investments} currecurrentMoney={currentMoney} />
            </Box>
        </>
    )
}
