import React, { useState } from "react";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
// import {
//   Container,
//   Typography,
//   Grid,
//   Divider,
//   Box,
//   TextField,
//   Button,
// } from "@mui/material";
// import DropFileInput from "../../components/DropFileZone";

// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";

// import postIcon from "..//..//assets/postIcon.svg";
// import archievementIcon from "..//..//assets/archievementIcon.svg";
// import confirmIcon from "..//..//assets/confirmIcon.svg";

import PostInfoPage from "./PostInfoPage";
import ArchievementPage from "./ArchievementPage";
import ConfirmPage from "./ConfirmPage";
import ThankyouPage from "./ThankyouPage";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { Button, Container } from "@mui/material";

const steps = ["Loan information", "Archievement", "Confirm information"];

export default function RequestLoanPost() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const handleStep = (step) => () => {
    if (step <= steps.length + 1) {
      setActiveStep(step);
    }
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  return (
    // <>
    //   <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
    //     <Tabs value={page} onChange={handleChange} variant="fullWidth" centered>
    //       <Tab
    //         icon={<img src={postIcon} alt="" height="28" width="28" />}
    //         label="Post"
    //         value="1"
    //       />
    //       <Tab
    //         icon={<img src={archievementIcon} alt="" height="28" width="28" />}
    //         label="Archievement"
    //         value="2"
    //       />
    //       <Tab
    //         icon={<img src={confirmIcon} alt="" height="35" width="35" />}
    //         label="Confirm"
    //         value="3"
    //       />
    //     </Tabs>
    //   </Box>
    //   {page === "1" ? <PostInfoPage handleChange={(event, newValue) => handleChange(event, newValue)} /> : null}
    //   {page === "2" ? <ArchievementPage handleChange={(event, newValue) => handleChange(event, newValue)} /> : null}
    //   {page === "3" ? <ConfirmPage /> : null}
    //   {page === "4" ? <ThankyouPage /> : null}
    // </>
    <>
      <Box sx={{ width: "100%", marginTop: 10 }}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 ? (
          <PostInfoPage handleStep={(index) => handleStep(index)} />
        ) : null}
        {activeStep === 1 ? (
          <ArchievementPage handleStep={(index) => handleStep(index)} />
        ) : null}
        {activeStep === 2 ? <ConfirmPage /> : null}
        {activeStep === 3 ? <ThankyouPage /> : null}

        <Container sx={{ padding: "3rem 3rem", display: "flex" }}>
          {activeStep === 2 ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  margin: "0 auto",
                  display: "block",
                  textTransform: "none",
                  marginRight: "0",
                  backgroundColor: "#f44336",
                }}
                size="large"
              >
                Send form
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                margin: "0 auto",
                display: "block",
                textTransform: "none",
                marginRight: "0",
                backgroundColor: "#335188",
              }}
              onClick={handleStep(activeStep + 1)}
              size="large"
            >
              Next
            </Button>
          )}
        </Container>
      </Box>
    </>
  );
}
