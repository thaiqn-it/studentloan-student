import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Box,
  TextField,
  CardMedia,
  Autocomplete,
  Button,
  ThemeProvider,
} from "@mui/material";
import DropFileInput from "../../components/DropFileZone";
import theme from "theme";

export default function Report() {
  const [url, setUrl] = useState("");

  const top100Films = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
  ];

  const onFileChangeURL = (newUrl) => {
    const id = new Date().getTime();
    const image = { description: "Demand note", url: newUrl, id };
    // setDemandImages((current) => [...current, image]);
    setUrl(newUrl);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box component="div" sx={{ padding: "3rem 0rem" }}>
          <Typography variant="h5" align="center">
            Report
          </Typography>
          <Typography variant="h6" align="center">
            Make sure that you are able to pay the loan
          </Typography>
        </Box>

        <Container maxWidth="xl">
          <Divider sx={{ margin: "50px 0px" }} />
          <Grid container spacing={3}>
            <Grid item xs="12" md="5">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Semster" />
                )}
                sx={{ marginBottom: 2 }}
              />
              <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
                Mark Report
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
              >
                We need mark report as an evidence for your loan. This will help
                investor catch you abilitty up
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
                  {url ? (
                    <CardMedia
                      component="img"
                      height="300"
                      image={url}
                      alt={url}
                    />
                  ) : null}
                  <DropFileInput
                    onFileChangeURL={(url) => onFileChangeURL(url)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ margin: "50px 0px" }} />
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
            size="large"
          >
            Send
          </Button>
        </Container>
      </ThemeProvider>
    </>
  );
}
