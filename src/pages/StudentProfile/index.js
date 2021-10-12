import React from "react";

import { TextField, Typography, Input, Button } from "@mui/material";
import classes from "./StudentProfile.module.css";
import { Box } from "@mui/system";

const StudentProfile = () => {
  return (
    <>
      <div className={classes.container}>
        <Box></Box>
        <TextField label="username" variant="standard"></TextField>
        <TextField label="firstname" variant="standard"></TextField>
        <TextField label="lastname" variant="standard"></TextField>
        <Input type="date" placeholder="birthdate" />

        <TextField label="school" variant="standard"></TextField>
        <TextField label="major" variant="standard"></TextField>
        <TextField label="aboutMe" variant="standard"></TextField>
        <Button>Update Profile</Button>

        <div>
          <Typography>Username</Typography>
          <img alt="avatar" />
          School
          <div></div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
