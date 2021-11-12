import { List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import SidebarLink from "../SidebarLink";
import { Link } from "react-router-dom";
import { BACKGROUD_COLOR } from "../../constants/color";
const SideBar = (props) => {
  const { routesProps, display } = props;
  const { to } = props;
  const homeLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <>
      {display && (
        <div className={classes.sidebar}>
          <List
            sx={{
              width: "100%",
              borderRadius: "25px",
              maxWidth: "15%",
              bgcolor: BACKGROUD_COLOR,
              position: "fixed",
              overflow: "auto",
              marginTop: "10px",
              marginLeft: "2%",
              height: "100%",
              "& ul": { padding: 0 },
            }}
          >
            <ListItem button components={homeLink}>
              <ListItemText
                primary="Home Link"
                primaryTypographyProps={{
                  fontSize: "20px",
                  fontWeight: "medium",
                }}
                sx={{ marginBottom: "20px" }}
              />
            </ListItem>
            {routesProps.map((routesProps) => {
              return (
                <SidebarLink
                  className={classes.link}
                  icon={routesProps.icon}
                  to={routesProps.to}
                  text={routesProps.text}
                />
              );
            })}
          </List>
        </div>
      )}
    </>
  );
};

export default SideBar;
