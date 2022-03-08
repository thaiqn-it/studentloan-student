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

import { resizeImage } from 'utils/resizeImage'
import { imageApi } from 'apis/imageApi'
import { tutorApi } from 'apis/tutorApi'

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
    const student = {
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
    }

    const tutor = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        birthday: '',
        email: '',
        relation: '',
        citizenId: '',
        citizenCardCreatedDate: '',
        citizenCardCreatedPlace: '',
        frontCitizenCardImageUrl: '',
        backCitizenCardImageUrl: '',
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
    const [studentData, setStudentData] = useState(student)
    const [tutorData, setTutorData] = useState(tutor)

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

    const handleStudentChange = (e) => {
        e.preventDefault()
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value,
        })
    }

    const handleStudentChangeV2 = (stateName, value) => {
        setStudentData({
            ...studentData,
            [stateName]: value,
        })
    }

    const handleTutorChange = (e) => {
        e.preventDefault()
        setTutorData({
            ...tutorData,
            [e.target.name]: e.target.value,
        })
    }
    const handleTutorChangeV2 = (stateName, value) => {
        setTutorData({
            ...tutorData,
            [stateName]: value,
        })
    }

    const handleStudentFileDrop = async (stateName, file) => {
        const resizeImg = resizeImage(file)

        const formData = new FormData()
        formData.append('file', resizeImg)

        try {
            const res = await imageApi.uploadImage(formData)
            if (res.status !== 200) throw new Error()
            const url = res.data.url
            setStudentData({ ...studentData, [stateName]: url })
        } catch (err) {}
    }

    const handleTutorFileDrop = async (stateName, file) => {
        const resizeImg = await resizeImage(file)
        console.log(resizeImg)
        const formData = new FormData()
        formData.append('file', resizeImg)
        console.log('img resiezed')
        try {
            console.log('send Data')

            const res = await imageApi.uploadImage(formData)
            console.log(res)
            if (res.status !== 200) throw new Error(res)
            console.log(res.data.url)
            const url = res.data.url
            setTutorData({ ...tutorData, [stateName]: url })
        } catch (err) {}
    }
    const handleSubmit = async () => {
        try {
            const tutor = { ...tutorData }
            const tutorRes = await tutorApi.createTutor(tutorData)
            if (tutorRes.status !== 200) throw new Error()

            const student = { ...studentData, tutorId: tutorRes.data.id }
            const studentRes = await studentApi.update(data)
            if (!student) throw new Error()
        } catch (err) {}
    }

    const handleStudentImageDelete = (stateName) => {
        setStudentData({ ...studentData, [stateName]: '' })
    }
    const handleTutorImageDelete = (stateName) => {
        setTutorData({ ...tutorData, [stateName]: '' })
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
                                            userData={studentData}
                                            handleChange={handleStudentChange}
                                            error={false}
                                        />
                                    )}
                                    {activeStep === 1 && (
                                        <StudentImageUploadForm
                                            userData={studentData}
                                            handleChange={handleStudentChangeV2}
                                            handleFileDrop={
                                                handleStudentFileDrop
                                            }
                                            handleDelete={
                                                handleStudentImageDelete
                                            }
                                            error={error}
                                        />
                                    )}
                                    {activeStep === 2 && (
                                        <GuardianInfo
                                            userData={tutorData}
                                            handleChange={handleTutorChange}
                                            error={error}
                                        />
                                    )}
                                    {activeStep === 3 && (
                                        <GuardianImageUploadForm
                                            userData={tutorData}
                                            handleFileDrop={handleTutorFileDrop}
                                            handleChange={handleTutorChangeV2}
                                            handleDelete={
                                                handleTutorImageDelete
                                            }
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
