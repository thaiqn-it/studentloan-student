import { Box, Divider, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { loanApi } from 'apis/loanApi'

import PostItem from './PostItem'
import Loading from '..//..//components/Loading'
import { setDocTitle } from 'utils/dynamicDocTitle'
import SuiTypography from 'components/SuiTypography'

export default function ViewAllPost() {
    const [listLoan, setListLoan] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setDocTitle('Tất cả hồ sơ vay-StudentLoan')
        setIsLoading(true)
        fetchData()
    }, [])

    const fetchData = async () => {
        await loanApi
            .getLoanStudent()
            .then((res) => {
                setListLoan(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    return (
        <>
            {isLoading ? <Loading /> : null}

            {listLoan.length > 0 ? (
                <>
                    <SuiTypography variant="button">Gần đây</SuiTypography>
                    <Divider sx={{ mb: 2 }} />

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={4}>
                            <PostItem loan={listLoan[0]} />
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                </>
            ) : null}

            <Grid container spacing={4}>
                {listLoan.map((item) => {
                    if (item !== listLoan[0]) {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={item.id}>
                                <PostItem loan={item} />
                            </Grid>
                        )
                    }
                })}
            </Grid>
        </>
    )
}
