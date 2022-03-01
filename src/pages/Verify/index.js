import {
    Button,
    Grid,
    Paper,
    Step,
    StepButton,
    Stepper,
    TextField,
    Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { studentApi } from 'apis/studentApi'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import React, { useEffect, useState } from 'react'
import BasicInfo from './basicInfo'
import GuardianInfo from './guardianInfo'
import StudentImageUploadForm from './StudentImageUploadForm'

import classes from './Verify.module.css'
import GuardianImageUploadForm from './GuardianImageUploadForm'

export const InputField = ({
    type,
    value,
    handleInputState,
    error,
    helperText,
    label,
    name,
}) => {
    return (
        <>
            <Box className={classes.inputBox}>
                <Typography variant="caption" className={classes.title}>
                    {label}
                </Typography>
                <SuiInput
                    type={type}
                    value={value}
                    onChange={handleInputState}
                    name={name}
                />
                {error && (
                    <Typography variant="caption" className={classes.error}>
                        {helperText}
                    </Typography>
                )}
            </Box>
        </>
    )
}

export default function Verify() {
    const data = {
        firstname: '',
        lastname: '',
        birthDate: '',
        citizenId: '',
        studentCardId: '',
        address: '',
        school: '',
        currentSemester: '',
        totalSemester: '',
        major: '',
        frontCitizenCardImageUrl: '',
        backCitizenCardImageUrl: '',
        frontStudentCardImageUrl: '',
        backStudentCardImageUrl: '',
        citizenCardCreatedDate: '',
        citizenCardCreatedPlace: '',
        guardianLastName: '',
        guardianFirstName: '',
        guardianBirthDay: '',
        guardianAddress: '',
        guardianRelation: '',
        guardianCitizenId: '',
        guardianPhoneNumber: '',
        guardianEmail: '',
        guardianCitizenCardCreatedDate: '',
        guardianCitizenCardCreatedPlace: '',
    }

    const error = {}
    const [activeStep, setActiveStep] = useState(0)
    const steps = [
        'Nhập Thông Tin Cá Nhân',
        'Gửi hình giấy tờ tuỳ thân',
        'Nhập thông tin người giám hộ',
        'Gửi hình giấy tờ người giám hộ',
    ]
    const [completed, setCompleted] = useState(0)
    const [userData, setUserData] = useState(data)

    const handleStep = (step) => () => {
        if (step <= steps.length + 1) {
            setActiveStep(step)
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        window.scrollTo(0, 0)
    }

    const handleNext = () => {
        if (haveInputError(activeStep)) return setError(activeStep)

        if (activeStep === steps.length - 1) return handleSubmit()

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        window.scrollTo(0, 0)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangeV2 = (stateName, value) => {
        setUserData({
            ...userData,
            [stateName]: value,
        })
    }
    const handleSubmit = async () => {
        try {
            const data = userData
            const student = await studentApi.update(data)
            if (!student) throw new Error()
        } catch (err) {}
    }

    const haveInputError = (step) => {
        switch (step) {
            case 0: //Basic Info Step
                verifyBasicInfo()
                break
            case 1: //Student Image Steo
                verifyStudentImage()
                break
            case 2: //Guardian Info Step
                verifyGuardianInfo()
                break
            case 3: //Guardian Image Step
                verifyGuardianImage()
                break
            default:
                return false
        }
    }

    const verifyBasicInfo = () => {
        return true
    }

    const verifyGuardianInfo = () => {
        return true
    }

    const verifyStudentImage = () => {
        return true
    }
    const verifyGuardianImage = () => {
        return true
    }

    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={10}>
                    <form>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label, index) => (
                                <Step key={label} completed={completed[index]}>
                                    <StepButton onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>

                        <Paper elevation={8}>
                            <Box className={classes.formBox}>
                                {' '}
                                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                                    {steps[activeStep]}
                                </Typography>
                                <Typography variant="button">
                                    Nhâp đầy đủ thông tin
                                </Typography>
                                <Box className={classes.form}>
                                    {activeStep === 0 && (
                                        <BasicInfo
                                            userData={userData}
                                            handleChange={handleChange}
                                            error={false}
                                        />
                                    )}
                                    {activeStep === 1 && (
                                        <StudentImageUploadForm
                                            userData={userData}
                                            handleChange={handleChangeV2}
                                            error={error}
                                        />
                                    )}
                                    {activeStep === 2 && (
                                        <GuardianInfo
                                            userData={userData}
                                            handleChange={handleChange}
                                            error={error}
                                        />
                                    )}
                                    {activeStep === 3 && (
                                        <GuardianImageUploadForm
                                            userData={userData}
                                            handleChange={handleChangeV2}
                                            error={error}
                                        />
                                    )}
                                </Box>
                                <React.Fragment>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            pt: 2,
                                        }}
                                    >
                                        {activeStep !== 0 && (
                                            <SuiButton
                                                color="light"
                                                variant="gradient"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                            >
                                                Trở lại
                                            </SuiButton>
                                        )}

                                        <Box sx={{ flex: '1 1 auto' }} />

                                        <SuiButton
                                            onClick={handleNext}
                                            variant="gradient"
                                            color="dark"
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Hoàn Thành'
                                                : 'Tiếp tục'}
                                        </SuiButton>
                                    </Box>
                                </React.Fragment>
                            </Box>
                        </Paper>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}
