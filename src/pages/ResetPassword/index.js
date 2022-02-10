import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import classes from './ResetPassword.module.css'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const passwordChangeHnadler = (event) => {
        setPassword(event.target.value)
    }

    const confirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const changePasswordButtonSubmit = (event) => {
        console.log('form submited')
    }
    return (
        <>
            <div className={classes.container}>
                <div className={classes.formBox}>
                    <h1>Change Password</h1>

                    <p>New password</p>
                    <TextField
                        id="newPassword"
                        type="password"
                        value={password}
                        onChange={passwordChangeHnadler}
                    ></TextField>
                    <p>Re-enter your new password</p>
                    <TextField
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={confirmPasswordChangeHandler}
                    ></TextField>
                    <br />
                    <Button onClick={changePasswordButtonSubmit}>
                        Change Password
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
