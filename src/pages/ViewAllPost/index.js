import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { loanApi } from 'apis/loanApi'

import PostItem from './PostItem'
import Loading from '..//..//components/Loading'

export default function ViewAllPost() {
    const [listLoan, setListLoan] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
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
            {isLoading ? (
                <Loading />
            ) : (
                <Grid container spacing={4}>
                    {listLoan.map((item) => (
                        <Grid item xs={12} md={6} lg={4}>
                            <PostItem loan={item} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    )
}
