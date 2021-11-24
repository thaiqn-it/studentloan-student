import { Box, Grid } from "@mui/material";
import React from "react";
import StudentNav from "../../components/NavBar/StudentNav";
import SideBar from "../../components/Sidebar";
import RequestLoanPost from "../RequestLoanPost/index";
import ViewPost from "../ViewPost"
import Report from "../Report"
import MyLoanItem from "..//..//components/MyLoanItem"
import classes from "./StudentLanding.module.css";

const StudentLanding = () => {

  const investor = {
    avatar:
      "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg",
    name: "Ha Nguyen",
    money: "200.000"
  };

  const routesProps = [
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/Profile", text: "profile" },
    { to: "/MyLoan", text: "My loan" },
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
          <MyLoanItem investor={investor}/>
          <RequestLoanPost />
          <ViewPost/>
          <Report/>

        </Box>
      </div>
    </>
  );
};

export default StudentLanding;
