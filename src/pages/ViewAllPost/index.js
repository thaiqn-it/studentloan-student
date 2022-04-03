import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { loanApi } from 'apis/loanApi'

import PostItem from './PostItem'

export default function ViewAllPost() {
    const [listLoan, setListLoan] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await loanApi.getLoanStudent().then((res) => {
            setListLoan(res.data)
        })
    }

    return (
        <Grid container spacing={4}>
            {/* <Grid item xs={12} md={6} lg={4}>
                <PostItem />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <PostItem />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <PostItem />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <PostItem />
            </Grid> */}
            {listLoan.map((item) => (
                <Grid item xs={12} md={6} lg={4}>
                    <PostItem loan={item} />
                </Grid>
            ))}
        </Grid>
    )
}
