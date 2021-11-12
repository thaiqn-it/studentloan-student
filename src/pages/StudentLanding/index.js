import { Box, Drawer, Grid } from "@mui/material";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import StudentNav from "../../components/NavBar/StudentNav";
import StudentRoute from "../../components/shared/StudentRouter";
import SideBar from "../../components/Sidebar";
import RequestLoanPost from "../RequestLoanPost/index";
import classes from "./StudentLanding.module.css";

const StudentLanding = (props) => {
  let { path, url } = useRouteMatch();
  const routesProps = [{ to: `${url}/Profile`, text: "profile" }];
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sideNavWidth = "15%";

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <SideBar display routesProps={routesProps} />
      </Drawer>
      <Drawer
        container={container}
        variant="temporary"
        open={sidebarOpen}
        onClose={handleSidebarToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <SideBar display routesProps={routesProps} />
      </Drawer>
      <Box
        className={classes.mainContent}
        sx={{ marginLeft: { xs: "2%", sm: "19%" } }}
      >
        <StudentNav
          handleSidebarToggle={() => {
            handleSidebarToggle();
          }}
        />
        <Box
          sx={{
            borderRadius: "20px",
            height: "100%",
            marginTop: "20px",
            marginRight: "2%",
          }}
        >
          <StudentRoute />
        </Box>
      </Box>
    </>
  );
};

export default StudentLanding;
