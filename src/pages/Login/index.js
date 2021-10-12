import React, { useState } from "react";
import {
  Link,
  Grid,
  Divider,
  CardMedia,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import styles from "./Login.module.css";
import loginImage from "../../assets/loginImage.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    console.log(email);
    console.log(password);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: 15 }} className={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Grid item xs={12}>
              <Typography variant="p">Welcome.</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p">Sign in to continue.</Typography>
            </Grid>
            <Grid item xs={12}>
              <CardMedia component="img" image={loginImage} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container>
              <Grid item xs={12} sx={{ marginTop: "4rem" }}>
                <TextField
                  label="Email"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={handleInputEmail}
                  autoFocus
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "1rem" }}>
                <TextField
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  onChange={handleInputPassword}
                  value={password}
                  autoComplete="current-password"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginTop: "1rem" }}>
                <Link href="/forgotPassword">Quên mật khẩu ?</Link>
              </Grid>
              <Grid item xs={12} md={6} sx={{ marginTop: "1rem" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ color: "white" }}
                  onClick={signIn}
                >
                  Đăng nhập
                </Button>
              </Grid>
              <Divider />
              <Grid item xs={12} sx={{ marginTop: "1rem" }}>
                <Button variant="outlined" fullWidth href="/signup">
                  Tạo tài khoản
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
