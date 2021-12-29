import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./StudentNav.module.css";
import { BACKGROUD_COLOR } from "../../constants/color";
import { JWT_TOKEN } from "../../constants";
import Breadcrumbs from "../Breadcrumbs";
import { AccountCircle } from "@mui/icons-material";
const StudentNav = ({
  handleSidebarToggle,
  handleMobileSidebarToggle,
  open,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.header}>
      <AppBar
        color="inherit"
        position="static"
        style={{ borderRadius: "15px" }}
      >
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
          <Box sx={{ flexGrow: 1 }}>
            <Breadcrumbs />
          </Box>

          <Box>
            <IconButton size="large" onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              keepMounted
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default StudentNav;
