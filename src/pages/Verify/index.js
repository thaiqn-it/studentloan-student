import {
  Button,
  Grid,
  Paper,
  Step,
  StepButton,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SuiButton from "components/SuiButton";
import React, { useState } from "react";
import BasicInfo from "./basicInfo";
import GuardianInfo from "./guardianInfo";
import ImageUploadForm from "./imageUploadForm";

import classes from "./Verify.module.css";

export default function Verify() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Nhập Thông Tin Cá Nhân",
    "Gửi hình giấy tờ tuỳ thân",
    "Nhập thông tin người giám hộ",
    "Gửi hình giấy tờ người giám hộ",
  ];

  const [completed, setCompleted] = useState(0);

  const handleStep = (step) => () => {
    if (step <= steps.length + 1) {
      setActiveStep(step);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit();
    } else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSubmit = () => {};

  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={10}>
          <form>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton onClick={handleStep(index)}>{label}</StepButton>
                </Step>
              ))}
            </Stepper>

            <Paper elevation={8}>
              <Box className={classes.formBox}>
                {" "}
                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                  {steps[activeStep]}
                </Typography>
                <Typography variant="button">Nhâp đầy đủ thông tin</Typography>
                <Box className={classes.form}>
                  {activeStep === 0 && <BasicInfo />}
                  {activeStep === 1 && <ImageUploadForm />}
                  {activeStep === 2 && <GuardianInfo />}
                  {activeStep === 3 && <ImageUploadForm />}
                </Box>
                <React.Fragment>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
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

                    <Box sx={{ flex: "1 1 auto" }} />

                    <SuiButton
                      onClick={handleNext}
                      variant="gradient"
                      color="dark"
                    >
                      {activeStep === steps.length - 1
                        ? "Hoàn Thành"
                        : "Tiếp tục"}
                    </SuiButton>
                  </Box>
                </React.Fragment>
              </Box>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
