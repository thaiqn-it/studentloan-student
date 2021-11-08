import { Box, Grid } from "@mui/material";
import React from "react";
import StudentNav from "../../components/NavBar/StudentNav";
import SideBar from "../../components/Sidebar";
import RequestLoanPost from "../RequestLoanPost/index";
import ViewPost from "../ViewPost"
import Report from "../Report"
import classes from "./StudentLanding.module.css";

const StudentLanding = () => {
  const routesProps = [
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
  ];
  return (
    <>
      <SideBar display routesProps={routesProps} />

      <div className={classes.mainContent}>
        <StudentNav />
        <Box
          sx={{
            height: "100%",
            marginTop: "20px",
            marginRight: "2%",
          }}
        >
          <RequestLoanPost />
          <ViewPost/>
          <Report/>
        </Box>
      </div>
    </>
  );
};

export default StudentLanding;
