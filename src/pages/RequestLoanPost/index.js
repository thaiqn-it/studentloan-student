import React, { useState, useEffect } from 'react'

import PostInfoPage from './PostInfoPage'
import ArchievementPage from './ArchievementPage'
import ConfirmPage from './ConfirmPage'

import Box from '@mui/material/Box'
import { ButtonGroup, Divider, Paper } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiBox from 'components/SuiBox'

import { Link } from 'react-scroll'

import { useParams } from 'react-router-dom'

import { loanApi } from '../../apis/loanApi'

const steps = ['Loan information', 'Archievement', 'Confirm information']

export default function RequestLoanPost() {
    const { id } = useParams()

    const [activeStep, setActiveStep] = useState(0)
    const [loan, setLoan] = useState({})

    useEffect(() => {
        loanApi
            .getLoanById(id)
            .then((res) => {
                setLoan(res.data.loan)
            })
            .catch((error) => console.log(error))
    }, [])

    const handleOnchange = (e, name, value) => {
        if(e){
            e.preventDefault()
            setLoan({
                ...loan,
                [e.target.name]: e.target.value,
            })
            console.log(loan)
        }else{
            setLoan({
                ...loan,
                [name]: value,
            })
            console.log(loan)

        }
     
    }

    const handleStep = (step) => () => {
        if (step <= steps.length + 1) {
            setActiveStep(step)
        }
    }

    return (
        <>
            <SuiBox position="fixed" sx={{ zIndex: 1, bottom: 0 }}>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Link
                        activeClass="active"
                        to="post-info"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <SuiButton
                            sx={{
                                borderRadius: 0,
                                color: '#FFFFFF',
                                bgcolor: '#357a38',
                            }}
                        >
                            Thông tin hồ sơ vay
                        </SuiButton>
                    </Link>
                    <Link
                        activeClass="active"
                        to="achievements"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <SuiButton
                            sx={{
                                borderRadius: 0,
                                color: '#FFFFFF',
                                bgcolor: '#3f51b5',
                            }}
                        >
                            Những thành tích
                        </SuiButton>
                    </Link>
                    <Link
                        activeClass="active"
                        to="personal-information"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <SuiButton
                            sx={{
                                borderRadius: 0,
                                color: '#FFFFFF',
                                bgcolor: '#f44336',
                            }}
                        >
                            Thông tin của bạn
                        </SuiButton>
                    </Link>
                </ButtonGroup>
            </SuiBox>
            <SuiBox>
                <Paper elevation={6} sx={{ borderRadius: 3 }}>
                    <Box sx={{ width: '100%' }}>
                        <PostInfoPage
                            loan={loan}
                            handleChange={handleOnchange}
                        />

                        <ArchievementPage
                            handleStep={(index) => handleStep(index)}
                        />
                        <ConfirmPage />
                        <Divider />

                        <Box
                            sx={{
                                m: 3,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <SuiButton
                                sx={{ mr: 3, mb: 3 }}
                                color="dark"
                                variant="outlined"
                                size="large"
                                onClick={handleStep(activeStep + 1)}
                            >
                                Lưu nháp
                            </SuiButton>
                            <SuiButton
                                color="primary"
                                size="large"
                                onClick={handleStep(activeStep + 1)}
                                sx={{ mb: 3 }}
                            >
                                Gửi
                            </SuiButton>
                        </Box>
                    </Box>
                </Paper>
            </SuiBox>
        </>
    )
}
