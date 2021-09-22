import React from "react";
import {
  Link,
  Grid,
  Divider,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Login.module.css";
import axios from "axios";
import { defaultInstance } from "../../apis";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(data.get("email") + " " + data.get("password"));

    axios
      .post("http://localhost:5000/api/auth/signin", {
        username: data.get("email"),
        password: data.get("password"),
      })
      .then((resoponse) => {
        console.log(resoponse.data);
      }).catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <Box component="div" className={styles.header}>
        <Link href="/" underline="none" color="primary">
          STUDENT LOAN
        </Link>
      </Box>
      <Divider />

      <Box component="div" className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid item xs={12}>
              <Typography variant="p">Welcome.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p">Sign in to continue.</Typography>
            </Grid>
            <Grid item xs={12} className={styles.cardImage}>
              <CardMedia
                component="img"
                image="https://d19j0qt0x55bap.cloudfront.net/production/assets/loginGraphic.svg"
              />
            </Grid>
          </Grid>
          {/* <Box component="form" noValidate onSubmit={handleSubmit}> */}
          <Grid
            item
            xs={12}
            md={6}
            onSubmit={handleSubmit}
            component="form"
            noValidate
          >
            <Grid container sx={{ padding: "1rem" }}>
              <Grid item xs={12} sx={{ padding: "1rem" }}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ padding: "1rem" }}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ padding: "1rem" }}>
                <Link href="/forgotPassword">Forgot Password ?</Link>
              </Grid>
              <Grid item xs={12} md={6} sx={{ padding: "1rem" }}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{ color: "white" }}
                >
                  Login
                </Button>
              </Grid>
              <Divider />
              <Grid item xs={12} sx={{ padding: "1rem" }}>
                <Button variant="outlined" fullWidth href="/signup">
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* </Box> */}
        </Grid>
      </Box>
    </div>
  );
}
