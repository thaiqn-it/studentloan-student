import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Slider,
  Box,
  Icon,
  Checkbox,
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
      <Box className={classes.container}>
        <NavBar
          display={true}
          isLoggedIn={isLoggedIn}
          changeIsLogged={(isLog) => setIsLoggedIn(isLog)}
        />

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box className={classes.landingContent}>
                <Typography variant="h2">Landing Page Sologan</Typography>
                <Typography variant="body1" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum libero neque, mollis a risus et, pharetra hendrerit
                  velit. Aliquam vitae pretium mauris. Praesent fermentum tortor
                  nec molestie posuere. Sed at pretium arcu. Sed id tempus
                  velit, sit amet sollicitudin lectus. Phasellus vel nisl
                  pharetra, scelerisque sapien eget, aliquam libero. Mauris
                  accumsan felis vel metus luctus finibus. Fusce ullamcorper mi
                  in quam fermentum molestie nec a tortor. Vestibulum commodo
                  leo est, quis volutpat nibh imperdiet quis.
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#338a3e",
                    }}
                    size="large"
                  >
                    <Link className={classes.linkButton} color="inherit">
                      Get Started
                    </Link>
                  </Button>
                </Box>
              </Box>
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
          <Box className={classes.moneyWrapper}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "15px",
              }}
            >
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
            </Box>
            <Box className={classes.paymentInfo}>
              <Typography variant="h4">Example Payment</Typography>
              <Typography variant="h3">200k</Typography>
              <Typography variant="h6">
                Repayment a month whilst studying
              </Typography>
              <Typography variant="h3">{`${monthlyPayment}k`}</Typography>
              <Typography variant="h6">
                Repayment a month once graduated
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.infoSection}>
          <Grid container>
            <Grid item xs={3}></Grid>
          </Grid>

          <Box className={classes.infoBox}>
            <Typography variant="h6"></Typography>

            <Typography variant="h6">
              Create pages with ease with a help of the best page builder
              plugin.
            </Typography>

            <Button variant="outlined">Read more</Button>
            <Typography variant="h6">Corporate Loan</Typography>
          </Box>
        </Box>

        <Box className={classes.founder}>
          <img src="https://i.pinimg.com/originals/57/3a/8e/573a8eb073f0a8f98e85559c1dc5214d.jpg" />
          <Typography variant="h4">Some thing about speed</Typography>
          <Typography variant="body1">
            Our menu is a nod tostreet food vendorswho help their customers stay
            on-the-go by delivering quick tasty bites. We incorporated flavors
            from around the world to offer a unique menu featuring items like
            Banh Mi, a flavorful sandwich staple from Vietnam, and the classic
            American Burger.
          </Typography>

          <Checkbox defaultChecked />
          <Typography>Fast aaa</Typography>
        </Box>
        <Box className={classes.service}>
          <Typography>Our Sevice</Typography>
          <Box className={classes.serviceBox}>
            <Icon />
            <Typography>Home Loan</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consecte adipiscing elit sed do
              eiusincidunt.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.practice}>
          <Typography>Practice</Typography>
        </Box>
        <Box className={classes.process}>
          <img src="https://metropolitanhost.com/themes/themeforest/react/loanly/assets/images/whyus1.jpg" />
          <Typography>What does Student Loan Do</Typography>

          <Typography>Giấy tiwf rõ ràng</Typography>
          <Icon />
          <Typography>Lorm Ípun</Typography>
        </Box>
        <Box className={classes.team}>
          <Typography>Our Team </Typography>
          <img />
          <Typography> name </Typography>
          <Typography>Job</Typography>
        </Box>

        <Box className={classes.client}>
          <Typography>Đối Tác</Typography>
          <Typography>Đối Tác</Typography>
          <Grid container>
            <Grid item> Icon</Grid>
          </Grid>
        </Box>
        <Box className={classes.faq}>
          <Box className={classes.question}>
            <Typography>Question</Typography>
            <Typography>Answer</Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default LandingPage;
