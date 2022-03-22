import React, { useState } from 'react'

import PostInfoPage from './PostInfoPage'
import ArchievementPage from './ArchievementPage'
import ConfirmPage from './ConfirmPage'
import ThankyouPage from './ThankyouPage'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import { ButtonGroup, Divider, Paper } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiBox from 'components/SuiBox'

import { Link } from 'react-scroll'

import { loanApi } from '../../apis/loanApi'
import SuiTypography from 'components/SuiTypography'

const steps = ['Loan information', 'Archievement', 'Confirm information']

export default function RequestLoanPost() {
    const [activeStep, setActiveStep] = React.useState(0)
    const [completed, setCompleted] = React.useState({})

    const data = {
        totalMoney: 1000,
        interest: 20,
        expectedGraduationDay: 2,
        expectedGraduationTime: 3,
        title: 'Test create',
        description: 'des',
        duration: 36,
        loanStartAt: '1900-01-01 00:00:00',
        loanEndAt: '1900-01-01 00:00:00',
        postCreatedAt: '1900-01-01 00:00:00',
        postExpireAt: '1900-01-01 00:00:00',
        expectedMoney: 200,
        status: 'DRAFT',
    }

    const completedSteps = () => {
        return Object.keys(completed).length
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
                            color="error"
                            sx={{
                                borderRadius: 0,
                                outline: 'none',
                                boxShadow: 'none',
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
                        // onClick={() => redirect("/request")}
                    >
                        <SuiButton color="success" sx={{ borderRadius: 0 }}>
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
                        // onClick={() => redirect("/request")}
                    >
                        <SuiButton color="info" sx={{ borderRadius: 0 }}>
                            Thông tin của bạn
                        </SuiButton>
                    </Link>
                </ButtonGroup>
            </SuiBox>
            <SuiBox>
                <Paper elevation={6} sx={{ borderRadius: 3 }}>
                    <Box sx={{ width: '100%' }}>
                        <PostInfoPage
                            handleStep={(index) => handleStep(index)}
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
                        {/* <Stepper
                            nonLinear
                            activeStep={activeStep}
                            alternativeLabel
                        >
                            {steps.map((label, index) => (
                                <Step key={label} completed={completed[index]}>
                                    <StepButton onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>

                        {activeStep === 0 ? (
                            <PostInfoPage
                                handleStep={(index) => handleStep(index)}
                            />
                        ) : null}
                        {activeStep === 1 ? (
                            <ArchievementPage
                                handleStep={(index) => handleStep(index)}
                            />
                        ) : null}
                        {activeStep === 2 ? <ConfirmPage /> : null}
                        {activeStep === 3 ? <ThankyouPage /> : null}

                        <Container
                            sx={{ padding: '3rem 3rem', display: 'flex' }}
                        >
                            {activeStep === 2 ? (
                                <>
                                    <SuiButton
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            margin: '0 auto',
                                            display: 'block',
                                            textTransform: 'none',
                                            marginRight: '0',
                                            // backgroundColor: '#f44336',
                                        }}
                                        size="large"
                                    >
                                        Send form
                                    </SuiButton>
                                </>
                            ) : (
                                <SuiButton
                                    color="dark"
                                    size="large"
                                    onClick={handleStep(activeStep + 1)}
                                    sx={{
                                        margin: '0 auto',
                                        display: 'block',
                                        textTransform: 'none',
                                        marginRight: '0',
                                    }}
                                >
                                    Next
                                </SuiButton>
                            )}
                        </Container> */}
                    </Box>
                </Paper>
            </SuiBox>
        </>
    )
}



