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
  CardMedia,
} from "@mui/material";
import DropFileInput from "../../components/DropFileZone";

export default function PostInfoPage(props) {
  const [date, setDate] = useState(new Date());
  const [demandImages, setDemandImages] = useState([]);

  const onFileChangeURL = (newUrl) => {
    const id = new Date().getTime();
    const image = { description: "Demand note", url: newUrl, id };
    setDemandImages((current) => [...current, image]);
  };

  const onNext = () => {
    //save data
    props.handleStep(1);
  };

  return (
    <>
      <Box component="div" sx={{ padding: "3rem 0rem" }}>
        <Typography variant="h5" align="center">
          Start with the basics
        </Typography>
        <Typography variant="h6" align="center">
          Make it easy for people to learn about your project.
        </Typography>
      </Box>
      <Divider />
      <Container sx={{ padding: "3rem 3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs="12" md="5">
            <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
              Borrow information
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
            >
              Write a clear, brief title and subtitle to help people quickly
              understand your project. Both will appear on your project and
              pre-launch pages.
            </Typography>
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
            <Grid container spacing={2}>
              <Grid item xs="6" md="6">
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  Expected graduate time
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label=""
                    views={["year", "month"]}
                    value={date}
                    onChange={(newDate) => {
                      setDate(newDate);
                      console.log(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs="6" md="6">
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  When this post expire
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label=""
                    value={date}
                    onChange={(newDate) => {
                      setDate(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ padding: "3rem 3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs="12" md="5">
            <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
              Discription
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
            >
              Write a brief description about yourself and goal of life. The
              backers will read this and may help you
            </Typography>
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
            <Grid container spacing={2}>
              <Grid item xs="12" md="12">
                <TextField
                  variant="outlined"
                  placeholder="Write awesome thing about you"
                  multiline
                  rows={10}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ padding: "3rem 3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs="12" md="5">
            <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
              Funding goal
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
            >
              Set an achievable goal that covers what you need to complete your
              project. Funding is all-or-nothing. If you don’t meet your goal,
              you won’t receive any money.
            </Typography>
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
            <Grid container spacing={2}>
              <Grid item xs="12" md="12">
                <Typography variant="h5">Goal amount</Typography>
              </Grid>
              <Grid item xs="12" md="6">
                <TextField align="right" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ padding: "3rem 3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs="12" md="5">
            <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
              Demand note
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
            >
              We need demand note as an evidence for your post. This will affect
              whether your post is approved or not
            </Typography>
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
            {/* <Button
              onClick={showImage}
              variant="contained"
              color="secondary"
              sx={{
                margin: "0 auto",
                display: "block",
                marginRight: "0",
                textTransform: "none",
              }}
            >
              Add
            </Button> */}
            <Grid container spacing={2}>
              <Grid item xs="12" md="12">
                {demandImages.map((items) => (
                  <CardMedia
                    component="img"
                    height="300"
                    image={items.url}
                    alt={items.url}
                    key={items.id}
                  />
                ))}
                <DropFileInput
                  onFileChangeURL={(url) => onFileChangeURL(url)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  );
}
