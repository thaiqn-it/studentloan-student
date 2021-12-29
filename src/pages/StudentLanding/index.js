import { Box, CssBaseline, Drawer } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useRouteMatch } from "react-router-dom";
import StudentNav from "../../components/NavBar/StudentNav";
import StudentRoute from "../../components/shared/StudentRouter";
import SideBar from "../../components/Sidebar";

import classes from "./StudentLanding.module.css";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});
const WebDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,

  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StudentLanding = (props) => {
  const { window } = props;
  const theme = useTheme();

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleMobileSidebarToggle = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <WebDrawer
          variant="permanent"
          open={sidebarOpen}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <SideBar display />
        </WebDrawer>

        <Drawer
          container={container}
          variant="temporary"
          open={mobileSidebarOpen}
          onClose={handleMobileSidebarToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar display />
        </Drawer>

        <Box>
          <StudentNav
            handleSidebarToggle={() => {
              handleSidebarToggle();
            }}
            handleMobileSidebarToggle={() => {
              handleMobileSidebarToggle();
            }}
          />
          <Box className={classes.mainContent}>
            <StudentRoute />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StudentLanding;
