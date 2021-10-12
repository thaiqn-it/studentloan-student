import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Slider,
  Box,
} from "@mui/material";
import { ReactComponent as ReactLogo } from "../../images/LandingPageIllustration.svg";
import Footer from "../../components/Footer";
import classes from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

const LandingPage = (props) => {
  const [sliderValue, setSliderValue] = useState(2);
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const marks = [
    {
      value: 2,
      label: "2 M",
    },
    {
      value: 50,
      label: "50 M",
    },
  ];

  const sliderValueChangeHandler = (event) => {
    setSliderValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  useEffect(() => {
    setMonthlyPayment(sliderValue / 10);
    return () => {};
  }, [sliderValue]);

  return (
    <>
      <div className={classes.container}>
        <NavBar
          display={true}
          isLoggedIn={isLoggedIn}
          changeIsLogged={(isLog) => setIsLoggedIn(isLog)}
        />
        <Box>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className={classes.landingContent}>
                  <Typography variant="h2">Landing Page Sologan</Typography>
                  <Typography variant="body1" className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum libero neque, mollis a risus et, pharetra
                    hendrerit velit. Aliquam vitae pretium mauris. Praesent
                    fermentum tortor nec molestie posuere. Sed at pretium arcu.
                    Sed id tempus velit, sit amet sollicitudin lectus. Phasellus
                    vel nisl pharetra, scelerisque sapien eget, aliquam libero.
                    Mauris accumsan felis vel metus luctus finibus. Fusce
                    ullamcorper mi in quam fermentum molestie nec a tortor.
                    Vestibulum commodo leo est, quis volutpat nibh imperdiet
                    quis.
                  </Typography>
                  <div>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#338a3e",
                      }}
                      size="large"
                    >
                      <Link className={classes.linkButton}>Get Started</Link>
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={8}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ReactLogo width="500" />
              </Grid>
            </Grid>
          </Container>

          <Box className={classes.moneyBox}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h3">How much do you need</Typography>
              <Typography
                variant="h4"
                sx={{ alignSelf: "center" }}
              >{`${sliderValue}`}</Typography>
              <Slider
                aria-label="c"
                value={typeof sliderValue === "number" ? sliderValue : 0}
                defaultValue={2}
                step={0.5}
                min={2}
                max={50}
                marks={marks}
                onChange={sliderValueChangeHandler}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#338a3e",
                  width: "40%",
                  alignSelf: "center",
                }}
                size="large"
              >
                <Link className={classes.linkButton}>Apply</Link>
              </Button>
            </div>
            <div className={classes.paymentInfo}>
              <Typography variant="h4">Example Payment</Typography>
              <Typography variant="h3">200k</Typography>
              <Typography variant="h6">
                Repayment a month whilst studying
              </Typography>
              <Typography variant="h3">{`${monthlyPayment}k`}</Typography>
              <Typography variant="h6">
                Repayment a month once graduated
              </Typography>
            </div>
          </Box>
        </Box>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
