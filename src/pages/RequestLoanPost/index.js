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
import { Button, Container, Paper } from "@mui/material";
import SuiButton from "components/SuiButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SuiBox from "components/SuiBox";

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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Paper
            sx={{
              padding: "10px 0px",
              margin: "1rem",
              marginRight: "10px",
              borderRadius: 5,
            }}
            elevation={6}
          >
            <Box sx={{ width: "100%" }}>
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
                  // <Button
                  //   variant="contained"
                  //   color="secondary"
                  //   sx={{
                  //     margin: "0 auto",
                  //     display: "block",
                  //     textTransform: "none",
                  //     marginRight: "0",
                  //     backgroundColor: "#335188",
                  //   }}
                  //   onClick={handleStep(activeStep + 1)}
                  //   size="large"
                  // >
                  //   Next
                  // </Button>
                  <SuiButton
                    color="dark"
                    size="large"
                    sx={{
                      margin: "0 auto",
                      display: "block",
                      textTransform: "none",
                      marginRight: "0",
                    }}
                  >
                    Next
                  </SuiButton>
                )}
              </Container>
            </Box>
          </Paper>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}
