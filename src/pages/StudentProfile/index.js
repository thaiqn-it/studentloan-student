import React, { useState } from 'react'

import {
    TextField,
    Typography,
    Input,
    Button,
    Grid,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    InputLabel,
    FormControl,
    Avatar,
    DialogContentText,
    Box,
} from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import IconButton from '@mui/material/IconButton'
import SchoolIcon from '@mui/icons-material/School'
import MailIcon from '@mui/icons-material/Mail'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import CakeIcon from '@mui/icons-material/Cake'
import classes from './StudentProfile.module.css'

import SuiBox from 'components/SuiBox'
import CreateIcon from '@mui/icons-material/Create'
import { DesktopDatePicker } from '@mui/lab'
import ProfileFormDialog from 'components/ProfileFormDialog'
import { userApi } from 'apis/userApi'

const StudentProfile = () => {
    const [gender, setGender] = useState(true)
    const [isEditProfile, setIsEditProfile] = useState(false)
    const [isEditSummary, setIsEditSummary] = useState(false)
    const [userProfile, setUserProfile] = useState({})

    const getUserProfile = async () => {
        try {
            const userProfile = await userApi.getUserProfile()
            if (userProfile === null) throw new Error()

            setUserProfile(userProfile)
        } catch (e) {}
    }

    const isEditProfileChangeHandler = () => {
        setIsEditProfile(!isEditProfile)
    }

    const isEditSummaryChangeHandler = () => {
        setIsEditSummary(!isEditSummary)
    }

    const EditProfile = () => {
        const [gender, setGender] = useState(true)
        const [birthDate, setBirthDate] = useState(new Date())

        const genderChangeHandler = () => {
            setGender(!gender)
        }
        const birthDateChangeHandler = (value) => {
            setBirthDate(value)
        }
        return (
            <>
                <ProfileFormDialog
                    open={isEditProfile}
                    handleClose={isEditProfileChangeHandler}
                    handleFormSubmit={isEditProfileChangeHandler}
                    title="Edit Profile"
                >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonOutlineIcon
                            style={{ color: 'action.active', mr: 1, my: 0.5 }}
                        />
                        <TextField
                            label="First name"
                            variant="standard"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        ></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonOutlineIcon
                            style={{ color: 'action.active', mr: 1, my: 0.5 }}
                        />
                        <TextField
                            label="Last name"
                            variant="standard"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        ></TextField>
                    </Box>

                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckroomIcon
                            style={{ color: 'action.active', mr: 1, my: 0.5 }}
                        />
                        <FormLabel fontSize={20}>Gender</FormLabel>
                    </Box>
                    <Box>
                        <Radio
                            checked={gender === true}
                            onChange={genderChangeHandler}
                            value={true}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <FormLabel>Male</FormLabel>

                        <Radio
                            checked={gender === false}
                            onChange={genderChangeHandler}
                            value={false}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <FormLabel>Female</FormLabel>
                    </Box>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            value={birthDate}
                            onChange={birthDateChangeHandler}
                            label="BirthDate"
                            inputFormat="dd/MM/yyyy"
                            renderInput={(params) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <CakeIcon
                                        style={{
                                            color: 'action.active',
                                            mr: 1,
                                            my: 0.5,
                                        }}
                                    />
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        fullWidth
                                    />
                                </Box>
                            )}
                        />
                    </LocalizationProvider>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountBalanceIcon
                            style={{ color: 'action.active', mr: 1, my: 0.5 }}
                        />
                        <TextField
                            label="School"
                            variant="standard"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        ></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SchoolIcon
                            style={{ color: 'action.active', mr: 1, my: 0.5 }}
                        />
                        <TextField
                            label="Major"
                            variant="standard"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        ></TextField>
                    </Box>
                </ProfileFormDialog>
            </>
        )
    }

    const Profile = () => {
        return (
            <>
                <Box className={classes.profile}>
                    <PersonOutlineIcon />
                    <Typography variant="h5">Dinh Phu Cuong </Typography>
                    <Box>
                        <IconButton
                            onClick={isEditProfileChangeHandler}
                            style={{ marginLeft: '3rem' }}
                        >
                            <CreateIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box className={classes.profile}>
                    <CheckroomIcon />
                    <Box>
                        <Typography>Gender Pronounce : </Typography>
                        <Typography>He/She/Other</Typography>
                    </Box>
                </Box>
                <Box className={classes.profile}>
                    <CakeIcon />
                    <Box>
                        <Typography>Birthday</Typography>
                        <Typography>xx/xx/xxxx</Typography>
                    </Box>
                </Box>
                <Box className={classes.profile}>
                    <AccountBalanceIcon />
                    <Box>
                        <Typography>School</Typography>
                        <Typography>XXX University</Typography>
                    </Box>
                </Box>
                <Box className={classes.profile}>
                    <SchoolIcon />
                    <Box>
                        <Typography>Major</Typography>
                        <Typography>XXXXX XXXXXX</Typography>
                    </Box>
                </Box>
                <Box className={classes.profile}>
                    <SchoolIcon />
                    <Box>
                        <Typography>Address</Typography>
                        <Typography>XXXXX XXXXXX</Typography>
                    </Box>
                </Box>
            </>
        )
    }

    const Summary = () => {
        return (
            <>
                <Grid container>
                    <Grid item xs={4}>
                        <Box className={classes.avatar}>
                            <Avatar
                                alt="avatar"
                                src="https://www.w3schools.com/howto/img_avatar.png"
                                sx={{ width: '100px', height: '100px' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h5"
                            style={{ fontWeight: '600', margin: '20px' }}
                        >
                            {' '}
                            Usernname
                        </Typography>
                        <Button>Change Password</Button>
                        <Box className={classes.profile}>
                            <MailIcon />
                            <Box>
                                <Typography>Email : </Typography>
                                <Typography>xxxxx@xxxxxxxxxxxx</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.profile}>
                            <PhoneAndroidIcon />
                            <Box>
                                <Typography>Phone Number : </Typography>
                                <Typography>xxxxxxxxxxxxxxxx</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box className={classes.summary}>
                    <Typography variant="h5">Summary</Typography>
                    <IconButton onClick={isEditSummaryChangeHandler}>
                        <CreateIcon />
                    </IconButton>
                </Box>

                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </>
        )
    }

    const EditSummary = () => {
        return (
            <>
                <ProfileFormDialog
                    open={isEditSummary}
                    handleClose={isEditSummaryChangeHandler}
                    handleFormSubmit={isEditSummaryChangeHandler}
                    title="Edit Summary"
                >
                    <Box>
                        <TextField
                            multiline
                            rows={10}
                            rowsMax={10}
                            label="Sumary"
                            fullWidth
                            variant="standard"
                        ></TextField>
                    </Box>
                </ProfileFormDialog>
            </>
        )
    }

    return (
        <>
            <Box className={classes.container}>
                <EditProfile />
                <EditSummary />
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                        <Box className={classes.profileBox}>
                            <Summary />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.profileBox}>
                            <Profile />
                        </Box>
                    </Grid>
                </Grid>

                <Box className={classes.profileBox}>
                    <Typography variant="h5">Achivement</Typography>
                    <Typography>None</Typography>
                </Box>

                <Box className={classes.profileBox}>
                    <Typography variant="h5">ID Card</Typography>
                    <Typography>None</Typography>
                </Box>
                <Box className={classes.profileBox}>
                    <Typography variant="h5">Student Card</Typography>
                    <Typography>None</Typography>
                </Box>
            </Box>
        </>
    )
}

export default StudentProfile
