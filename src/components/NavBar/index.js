import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import styles from "./NavBar.module.css";
import { JWT_TOKEN } from "../../constants/";
import { BACKGROUD_COLOR } from "../../constants/color";
import { style } from "@mui/system";

const NavBar = ({ display, ...props }) => {
  const logInHandler = () => {
    props.changeIsLogged(true);
    if (localStorage.getItem(JWT_TOKEN)) {
      props.changeIsLogged(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.clear();
    props.changeIsLogged(false);
  };

  return (
    <>
      {display && (
        <AppBar
          position="fixed"
          className={styles.navBar}
          style={{
            backgroundColor: BACKGROUD_COLOR,
            boxShadow: "none",
            zIndex: 10,
          }}
        >
          <Toolbar variant="regular">
            <Grid container>
              <Grid item xs={4} style={{ display: "flex" }}>
                <Link className={styles.navLink} to={"/Services"}>
                  Services
                </Link>
                <Link className={styles.navLink} to={"/About"}>
                  About
                </Link>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link className={styles.logo} to={"/"}>
                  Student Loan
                </Link>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
                {!props.isLoggedIn && (
                  <Link
                    className={styles.navLink}
                    onClick={logInHandler}
                    to={"/Login"}
                  >
                    Log In
                  </Link>
                )}
                {props.isLoggedIn && (
                  <Link
                    className={styles.navLink}
                    to={"/"}
                    onClick={logoutHandler}
                  >
                    Log out
                  </Link>
                )}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#338a3e",
                    textTransform: "none",
                  }}
                  disableRipple
                >
                  <Link className={styles.apply} to={"/Services"}>
                    Apply
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default NavBar;
