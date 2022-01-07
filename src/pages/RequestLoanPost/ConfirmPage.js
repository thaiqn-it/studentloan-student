import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Box,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import DropFileInput from "../../components/DropFileZone";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiBox from "components/SuiBox";

export default function ConfirmPage() {
  const [date, setDate] = useState(new Date());
  const [archievement, setArchievement] = useState({
    description: "",
    url: "",
  });

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onFileChangeURL = (url) => {
    console.log(url);
  };

  const sendForm = () => {
    return <div className="send">Thank you</div>;
  };

  return (
    <>
      <Box component="div" sx={{ padding: "3rem 0rem" }}>
        <Typography variant="h5" align="center">
          Double check after submit
        </Typography>
        <Typography variant="h6" align="center">
          Make sure that your profile's information is right
        </Typography>
      </Box>
      <Divider />
      <Container sx={{ padding: "3rem 3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs="12" md="5">
            <SuiTypography
              variant="h6"
              fontWeight="medium"
              textTransform="capitalize"
            >
              Personal information
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              Write a clear, brief title and subtitle to help people quickly
              understand your project. Both will appear on your project and
              pre-launch pages.
            </SuiTypography>
            {/* <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
              Personal information
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
            >
              Write a clear, brief title and subtitle to help people quickly
              understand your project. Both will appear on your project and
              pre-launch pages.
            </Typography> */}
          </Grid>
          <Grid
            item
            xs="12"
            md="7"
            sx={{
              h5: {
                fontSize: "15px",
              },
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs="6" md="6">
                <SuiInput label="Firstname" name="Firstname" placeholder="Firstname" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="Firstname"
                  value=""
                  name="firstname"
                /> */}
              </Grid>
              <Grid item xs="6" md="6">
              <SuiInput label="Lastname" name="Lastname" placeholder="Lastname" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="Lastname"
                  value=""
                  name="lastname"
                /> */}
              </Grid>
              <Grid item xs="12" md="12">
              <SuiInput label="Address" name="Address" placeholder="Address" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="Address"
                  value=""
                  name="address"
                /> */}
              </Grid>
              <Grid item xs="12" md="6">
              <SuiInput label="Province" name="Province" placeholder="Province" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="Province"
                  value=""
                  name="address"
                /> */}
              </Grid>
              <Grid item xs="12" md="6">
              <SuiInput label="City" name="City" placeholder="City" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="City"
                  value=""
                  name="address"
                /> */}
              </Grid>
              <Grid item xs="12" md="6">
              <SuiInput label="Date Of Birth" name="Date Of Birth" placeholder="Date Of Birth" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="Date Of Birth"
                  value=""
                  name="dateOfBirth"
                /> */}
              </Grid>

              <Grid item xs="12" md="6"></Grid>

              <Grid item xs="6" md="6">
              <SuiInput label="Student ID" name="Student ID" placeholder="Student ID" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="Student ID"
                  value=""
                  name="studentId"
                /> */}
              </Grid>

              <Grid item xs="12" md="6">
              <SuiInput label="School" name="School" placeholder="School" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="School"
                  value=""
                  name="school"
                /> */}
              </Grid>

              <Grid item xs="12" md="6">
              <SuiInput label="Current Semester" name="Current Semester" placeholder="Current Semester" />
                {/* <TextField
                  fullWidth
                  variant="outlined"
                  label="Current Semester"
                  value=""
                  name="currentSemester"
                /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />

      <Container maxWidth="sm" sx={{ marginTop: 5 }}>
        <Box
          component="div"
          sx={{
            display: "flinline-flex",
            alignItems: "center",
            margin:"0 auto"
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography variant="h6">
            I agree with terms conditions and privacy policy
          </Typography>
        </Box>
      </Container>
    </>
  );
}
