import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import SidebarLink from "../SidebarLink";
import { Link } from "react-router-dom";
import { BACKGROUND_COLOR } from "../../constants/color";
import { useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Mail } from "@mui/icons-material";
const SideBar = (props) => {
  const { display } = props;
  const { to } = props;
  const homeLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  let { path, url } = useRouteMatch();
  const routesProps = [
    { to: `${url}/Profile`, text: "Profile" },
    { to: `${url}/Wallet`, text: "Wallet" },
  ];

  const { pathname } = useLocation();

  return (
    <>
      {display && (
        <List
          sx={{
            bgcolor: BACKGROUND_COLOR,
            width: "100%",
            height: "100%",
          }}
        >
          <ListItem button components={homeLink}>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{
                fontSize: "20px",
                fontWeight: "medium",
              }}
              sx={{ marginBottom: "20px" }}
            />
          </ListItem>
          <Divider />
          {routesProps.map((routesProps, index) => {
            return (
              <SidebarLink
                className={classes.link}
                icon={routesProps.icon}
                to={routesProps.to}
                text={routesProps.text}
                selected={routesProps.to === pathname}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default SideBar;
