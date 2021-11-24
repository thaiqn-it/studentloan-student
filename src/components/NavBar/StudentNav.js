import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./StudentNav.module.css";
import { BACKGROUD_COLOR } from "../../constants/color";
import { JWT_TOKEN } from "../../constants";
const StudentNav = ({
  handleSidebarToggle,
  handleMobileSidebarToggle,
  ...props
}) => {
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
    <div className={styles.header}>
      <AppBar position="static" style={{ borderRadius: "15px" }}>
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "none", sm: "block" } }}
            size="large"
            edge="start"
            color="inherit"
            onClick={() => {
              handleSidebarToggle();
            }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            size="large"
            edge="start"
            color="inherit"
            onClick={() => {
              handleMobileSidebarToggle();
            }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default StudentNav;
