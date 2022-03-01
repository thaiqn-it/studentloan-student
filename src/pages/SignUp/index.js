import React, { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Grid,
  Avatar,
  Typography,
  TextField,
  Button,
  CardMedia,
  Stepper,
  Step,
  StepButton,
} from "@mui/material";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router-dom";

import theme from "../../theme";
import { userApi } from "../../apis/userApi";

const SignUp = () => {
  const emailRef = useRef(null);
  const [firstname, setFirstname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [otp, setOtp] = useState("");
  const [otpSecret, setOtpSecret] = useState("");
  const history = useHistory();
  const [completed, setCompleted] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const loginPage = "/Login";

  const steps = ["Basic infomation", "Verify Phone number", "Enter OTP"];

  useEffect(() => {
    document.addEventListener("click", handleEmailClickOutside, false);
    return () => {
      document.removeEventListener("click", handleEmailClickOutside, false);
    };
  }, []);

  const firstNameChangeHandler = (event) => {
    setFirstname(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastname(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPassowrdChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const otpChangeHadler = (otp) => {
    setOtp(otp);
  };

  const handleStep = (step) => () => {
    if (step <= steps.length + 1) {
      setActiveStep(step);
    }
  };

  const handleEmailClickOutside = async (event) => {
    if (emailRef.current && !emailRef.current.contains(event.target)) {
      if (email) {
        await checkEmail(email);
      }
    }
  };

  const checkEmail = async (email) => {
    try {
      if (isEmail(email)) {
        const res = await userApi.checkEmail(email);
        const user = res.data;
        console.log(res);
        if (user) {
          setError({ ...error, email: "This email is used" });
        }
      } else {
        setError({ ...error, email: "email is wrong" });
      }
    } catch (e) {
      setError({ serverError: "Server is not available" });
    }
  };

  const isEmail = (email) => {
    const emailExp = /\S+@\S+\.\S+/;
    return emailExp.test(email);
  };
  const verification = () => {
    let verificationError = {};
    if (firstname.length < 1) {
      verificationError = {
        ...verificationError,
        firstname: "first name should not be blank",
      };
    }
    if (lastname.length < 1) {
      verificationError = {
        ...verificationError,
        lastname: "lastname name should not be blank",
      };
    }
    if (!isEmail(email)) {
      verificationError = { ...verificationError, email: "email is wrong" };
    }
    if (password.length < 6) {
      verificationError = {
        ...verificationError,
        password: "password should be at least 6 character",
      };
    }
    if (password !== confirmPassword) {
      verificationError = {
        ...verificationError,
        confirmPassword: "confirmPassword is wrong",
      };
    }
    setError(verificationError);
  };

  const sendOTP = async () => {
    try {
      const res = await userApi.sendOTP(`+84${phoneNumber}`);

      setOtpSecret(res.data.secret);
    } catch (e) {
      setError({ serverError: "server is not avaiable" });
    }
  };

  const verifyOTP = async () => {
    try {
      const token = otp;
      const secret = otpSecret;
      const res = await userApi.verifyOTP(token, secret);
      console.log(res);
      const isValid = res.data.isValid;
      if (isValid) {
        createAccount();
      }
    } catch (e) {
      setError({ serverError: "server is not avaiable" });
    }
  };

  const createAccount = async () => {
    try {
      const data = {
        firstname,
        lastname,
        email,
        password,

        phoneNumber,
      };

      const res = await userApi.signUp(data);
      if (res.status === 200) {
        history.push(loginPage);
      }
    } catch (e) {
      const error = e.response.data.errorParams;
      console.log(error);
      setError(error);
    }
  };

  const BasicInfo = () => {
    return (
      <>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={error.firstname}
              id={firstname}
              label="First Name"
              value={firstname}
              onChange={firstNameChangeHandler}
              required
              sx={{
                margin: "8px auto",
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              error={error.lastname}
              id={lastname}
              label="Last Name"
              value={lastname}
              onChange={lastNameChangeHandler}
              required
              sx={{
                margin: "8px auto",
              }}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          error={error.email}
          helperText={error.email}
          label="Email"
          id={email}
          required
          ref={emailRef}
          type="email"
          value={email}
          onChange={emailChangeHandler}
          sx={{
            margin: "8px auto",
          }}
        />

        <TextField
          fullWidth
          error={error.password}
          label="Password"
          required
          id={password}
          type="password"
          helperText="At least 8 characters, a capital letter, a special character, and a number"
          value={password}
          onChange={passwordChangeHandler}
          sx={{
            margin: "8px auto",
          }}
        />

        <TextField
          fullWidth
          error={error.confirmPassword}
          helperText={error.confirmPassword}
          label="Confirm Password"
          required
          id={confirmPassword}
          type="password"
          value={confirmPassword}
          onChange={confirmPassowrdChangeHandler}
          sx={{
            margin: "8px auto",
          }}
        />

        <Button fullWidth variant="contained" onClick={verification}>
          Next
        </Button>
      </>
    );
  };

  const InputPhone = () => {
    return (
      <>
        <TextField
          fullWidth
          error={error.phoneNumber}
          helperText={error.phoneNumber}
          label="Enter Phone Number"
          required
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={phoneNumberChangeHandler}
          sx={{
            margin: "8px auto",
          }}
        />
        <Button fullWidth variant="contained" onClick={sendOTP}>
          Send OTP
        </Button>
      </>
    );
  };

  const InputOtp = () => {
    return (
      <>
        <OtpInput
          value={otp}
          onChange={otpChangeHadler}
          numInputs={6}
          separator={<span>-</span>}
          shouldAutoFocus
          containerStyle={{
            justifyContent: "center",
          }}
          inputStyle={{
            height: "3em",
            width: "3em",
            margin: "1em 0 1em 0",
          }}
        />
        <Button fullWidth variant="contained" onClick={verifyOTP}>
          Verifity OTP
        </Button>
      </>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={5}
          sx={{
            marginLeft: "20px",
            marginTop: "30px",
            padding: "50px 20px",
          }}
        >
          <CardMedia
            component="img"
            image="https://previews.123rf.com/images/hilch/hilch1603/hilch160300115/54510730-banking-and-finance-wallpaper-bank-seamless-pattern-tiling-textures-with-integrated-thin-line-web-ic.jpg"
          />
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
            <Stepper nonLinear activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton onClick={handleStep(index)}>{label}</StepButton>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && <BasicInfo />}
            {activeStep === 1 && <InputPhone />}
            {activeStep === 2 && <InputOtp />}
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
