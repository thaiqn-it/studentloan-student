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
  Collapse,
  ThemeProvider,
} from "@mui/material";
import { ReactComponent as ReactLogo } from "../../images/LandingPageIllustration.svg";
import Footer from "../../components/Footer";
import classes from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import theme from "../../theme";
const CollapseFAQ = (props) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box className={classes.question}>
        <Typography>Question</Typography>
        <Button variant="text" onClick={handleChange}>
          View
        </Button>
      </Box>
      <Collapse in={open}>
        {" "}
        <Box className={classes.answer}>
          <Typography>Answer</Typography>
        </Box>
      </Collapse>
    </>
  );
};

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
      <ThemeProvider theme={theme}>
        <Box className={classes.container}>
          <Box className={classes.landing}>
            <NavBar
              display={true}
              isLoggedIn={isLoggedIn}
              changeIsLogged={(isLog) => setIsLoggedIn(isLog)}
            />

            <Container sx={{ marginTop: "64px" }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Box className={classes.landingContent}>
                    <Box>
                      <Typography variant="h3">Hãy chọn đúng</Typography>
                      <Typography variant="h3">
                        Cho tương lai của bạn
                      </Typography>
                    </Box>

                    <Typography variant="body1" className={classes.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum libero neque, mollis a risus et, pharetra
                      hendrerit velit. Aliquam vitae pretium mauris. Praesent
                      fermentum tortor nec molestie posuere. Sed at pretium
                      arcu. Sed id tempus velit, sit amet sollicitudin lectus.
                      Phasellus vel nisl pharetra, scelerisque sapien eget,
                      aliquam libero. Mauris accumsan felis vel metus luctus
                      finibus. Fusce ullamcorper mi in quam fermentum molestie
                      nec a tortor. Vestibulum commodo leo est, quis volutpat
                      nibh imperdiet quis.
                    </Typography>
                    <Box>
                      <Button variant="contained" color="primary" size="large">
                        <Link className={classes.linkButton} to={"/SignUp"}>
                          Tham gia ngay
                        </Link>
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={7}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ReactLogo width="500" />
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box className={`${classes.landing} ${classes.moneyBox}`}>
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
                    width: "40%",
                    alignSelf: "center",
                  }}
                  size="large"
                >
                  <Link className={classes.linkButton} to={"/SignUp"}>
                    Tham gia ngay
                  </Link>
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

          <Box className={`${classes.landing} ${classes.infoSection}`}>
            <Grid container>
              <Grid item xs={3}>
                <Box className={classes.infoBox}>
                  <Typography variant="h6"></Typography>

                  <Typography variant="h6">
                    Create pages with ease with a help of the best page builder
                    plugin.
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      border: "1px solid white",
                    }}
                  >
                    Read more
                  </Button>
                  <Typography variant="h6">Corporate Loan</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.infoBox}>
                  <Typography variant="h6"></Typography>

                  <Typography variant="h6">
                    Create pages with ease with a help of the best page builder
                    plugin.
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      border: "1px solid white",
                    }}
                  >
                    Read more
                  </Button>
                  <Typography variant="h6">Corporate Loan</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.infoBox}>
                  <Typography variant="h6"></Typography>

                  <Typography variant="h6">
                    Create pages with ease with a help of the best page builder
                    plugin.
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      border: "1px solid white",
                    }}
                  >
                    Read more
                  </Button>
                  <Typography variant="h6">Corporate Loan</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.infoBox}>
                  <Typography variant="h6"></Typography>

                  <Typography variant="h6">
                    Create pages with ease with a help of the best page builder
                    plugin.
                  </Typography>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      border: "1px solid white",
                    }}
                  >
                    Read more
                  </Button>
                  <Typography variant="h6">Corporate Loan</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.founder}>
            <Grid container>
              <Grid item xs={6}>
                <Box className={classes.founderImgBox}>
                  <img
                    alt="founder"
                    className={classes.founderImg}
                    src="https://metropolitanhost.com/themes/themeforest/react/loanly/assets/images/homepage/about1.jpg"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.founderTextBox}>
                  <Typography variant="h4">Some thing about speed</Typography>
                  <Typography variant="body1">
                    Our menu is a nod tostreet food vendorswho help their
                    customers stay on-the-go by delivering quick tasty bites. We
                    incorporated flavors from around the world to offer a unique
                    menu featuring items like Banh Mi, a flavorful sandwich
                    staple from Vietnam, and the classic American Burger.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox defaultChecked />
                      <Typography>Fast aaa</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox defaultChecked />
                      <Typography>Fast aaa</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox defaultChecked />
                      <Typography>Fast aaa</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox defaultChecked />
                      <Typography>Fast aaa</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.process}>
            <Typography variant="h4">What does Student Loan Do</Typography>
            <Typography>Lorm Ípun</Typography>
            <Grid container>
              <Grid item xs={3}>
                <Box className={classes.processTextBox}>
                  <Typography variant="h6">Giấy tờ rõ ràng</Typography>
                  <Box className={classes.processImg}>
                    <img
                      alt="processIcon"
                      src="https://metropolitanhost.com/themes/themeforest/react/loanly/assets/images/homepage/icon1a.png"
                    />
                  </Box>
                  <Typography>Lorm Ípun</Typography>
                  <Button variant="text" sx={{ color: "#fff" }}>
                    Chi tiết
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.processTextBox}>
                  <Typography variant="h6">Giấy tờ rõ ràng</Typography>
                  <Box className={classes.processImg}>
                    <img
                      alt="processIcon"
                      src="https://metropolitanhost.com/themes/themeforest/react/loanly/assets/images/homepage/icon1a.png"
                    />
                  </Box>
                  <Typography>Lorm Ípun</Typography>
                  <Button variant="text" sx={{ color: "#fff" }}>
                    Chi tiết
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.processTextBox}>
                  <Typography variant="h6">Giấy tờ rõ ràng</Typography>
                  <Box className={classes.processImg}>
                    <img
                      alt="processIcon"
                      src="https://metropolitanhost.com/themes/themeforest/react/loanly/assets/images/homepage/icon1a.png"
                    />
                  </Box>
                  <Typography>Lorm Ípun</Typography>
                  <Button variant="text" sx={{ color: "#fff" }}>
                    Chi tiết
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className={classes.processTextBox}>
                  <Typography variant="h6">Giấy tờ rõ ràng</Typography>
                  <Box className={classes.processImg}>
                    <img
                      alt="processIcon"
                      src="https://metropolitanhost.com/themes/themeforest/react/loanly/assets/images/homepage/icon1a.png"
                    />
                  </Box>
                  <Typography>Lorm Ípun</Typography>
                  <Button variant="text" sx={{ color: "#fff" }}>
                    Chi tiết
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* <Box className={classes.team}>
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
        </Box> */}
          <Box className={classes.faq}>
            <Typography variant="h4">Our FAQ</Typography>
            <Grid container>
              <Grid item xs={5}>
                Still Have Question
              </Grid>
              <Grid item xs={7}>
                <CollapseFAQ />
                <CollapseFAQ />
                <CollapseFAQ />
                <CollapseFAQ />
                <CollapseFAQ />
                <CollapseFAQ />
                <CollapseFAQ />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
