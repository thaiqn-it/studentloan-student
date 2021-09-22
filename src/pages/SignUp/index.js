import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Grid, Avatar, Typography, TextField, Button, CardMedia } from "@mui/material";

import theme from "../../theme";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const firstNameChangeHandler= (event)=>{
    setFirstName(event.target.value);
  }

  const lastNameChangeHandler= (event)=>{
    setLastName(event.target.value);
  }

  const emailChangeHandler= (event)=>{
    setEmail(event.target.value);
  }

  const passwordChangeHandler= (event)=>{
    setPassword(event.target.value);
  }

  const confirmPassowrdChangeHandler= (event)=>{
    setConfirmPassword(event.target.value);
  }

  const createAccount = (event) =>{
    console.log(firstName)
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item xs={5}
        sx={{
          marginLeft:"20px",
          marginTop:"30px",
          padding:"50px 20px"
        }}
        >

        <CardMedia
        component="img"
        image="https://previews.123rf.com/images/hilch/hilch1603/hilch160300115/54510730-banking-and-finance-wallpaper-bank-seamless-pattern-tiling-textures-with-integrated-thin-line-web-ic.jpg"/>
        </Grid>

        <Grid item xs={5}>
          <Grid align="center">
            <Avatar></Avatar>
            <h2>Sign Up</h2>
            <Typography variant="caption">
              Please fill this form to create account!
            </Typography>
          </Grid>
          <form>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id={firstName}
                  label="First Name"
                  value={firstName}
                  onChange={firstNameChangeHandler}
                  required
                  sx={{
                    margin: "8px auto"
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id={lastName}
                  label="Last Name"
                  value={lastName}
                  onChange={lastNameChangeHandler}
                  required
                  sx={{
                    margin: "8px auto"
                  }}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Email"
              id={email}
              required
              type="email"
              value={email}
              onChange={emailChangeHandler}
              sx={{
                margin: "8px auto"
              }}
            />

            <TextField
              fullWidth
              label="Password"
              required
              id={password}
              type="password"
              helperText="At least 8 characters, a capital letter, a special character, and a number"
              value={password}
              onChange={passwordChangeHandler}
              sx={{
                margin: "8px auto"
              }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              required
              id={confirmPassword}
              type="password"
              value={confirmPassword}
              onChange={confirmPassowrdChangeHandler}
              sx={{
                margin: "8px auto"
              }}
            />

            <Button 
            fullWidth 
            variant="contained"
            onClick={createAccount} >
              Create Acount
            </Button>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
