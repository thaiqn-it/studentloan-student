import {
    Box,
    Divider,
    Grid,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

import { loanApi } from 'apis/loanApi'
import NotFoundImage from '../../assets/searching2.svg'

import PostItem from './PostItem'
import Loading from '..//..//components/Loading'
import SuiTypography from 'components/SuiTypography'
import { paramToType } from 'utils/renderStatus'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function ViewAllPost() {
    const location = useLocation()

    const [listLoan, setListLoan] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchData(paramToType(location.pathname.split('/')[3]))
    }, [])

    const fetchData = async (type) => {
        await loanApi
            .getLoanStudent(type)
            .then((res) => {
                console.log(res)
                setListLoan(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    const [age, setAge] = React.useState(10)
    const handleChange = (event) => {
        setAge(event.target.value)
    }
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {listLoan.length > 0 ? (
                        <>
                            <Helmet>
                                <title>Tất cả hồ sơ vay-StudentLoan</title>
                            </Helmet>
                            <SuiTypography variant="button">
                                Gần đây
                            </SuiTypography>
                            <Divider sx={{ mb: 2 }} />

                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6} lg={4}>
                                    <PostItem loan={listLoan[0]} />
                                </Grid>
                            </Grid>
                            <Divider sx={{ my: 2 }} />
                            <Grid container spacing={4}>
                                {listLoan.map((item) => {
                                    if (item !== listLoan[0]) {
                                        return (
                                            <Grid
                                                item
                                                xs={12}
                                                md={6}
                                                lg={4}
                                                key={item.id}
                                            >
                                                <PostItem loan={item} />
                                            </Grid>
                                        )
                                    }
                                })}
                            </Grid>
                            {/* <Box
                                m={2}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Pagination count={10} />
                            </Box> */}
                        </>
                    ) : (
                        <>
                            <Box sx={{ mt: { md: '50%', xs: '100%' } }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={NotFoundImage}
                                        sx={{
                                            width: '50%',
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                    />
                                    <SuiTypography
                                        variant="h3"
                                        textTransform="uppercase"
                                        align="center"
                                        color="black"
                                        mt={5}
                                    >
                                        Hiện chưa có hồ sơ
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </>
                    )}
                </>
            )}
        </>
    )
}
