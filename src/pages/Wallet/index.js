import { Button, Grid, Typography, Box, Card, Icon } from "@mui/material";
import React, { useState } from "react";
import classes from "./Wallet.module.css";
import SendIcon from "@mui/icons-material/Send";
import SuiBox from "components/SuiBox";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import OrdersOverview from "layouts/dashboard/components/OrderOverview";
import SuiTypography from "components/SuiTypography";
import TimelineItem from "examples/Timeline/TimelineItem";
import { userApi } from "apis/user";
import { ClosedCaptionDisabledOutlined } from "@mui/icons-material";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Invoices from "layouts/billing/components/Invoices";
import Transactions from "layouts/billing/components/Transactions";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";

const Wallet = () => {
  const [wallet, setWallet] = useState({});
  const getWalletInfo = async () => {
    try {
      const wallet = await userApi.getWalletInfo();
      if (wallet === null) throw new Error();
      setWallet(wallet);
    } catch (e) {
      console.log(e);
    }
  };
  const { chart, items } = reportsBarChartData;

  return (
    <>
      <SuiBox mb={3}>
        <SuiBox mb={3} sx={{ marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's money" }}
                count={wallet?.money}
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ReportsBarChart
              title="current status"
              description={
                <>
                  (<strong>+23%</strong>) than last week
                </>
              }
              chart={chart}
              items={items}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Invoices />
          </Grid>
        </Grid>
      </SuiBox>

      <SuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <BillingInformation />
          </Grid>
          <Grid item xs={12} md={5}>
            <Transactions />
          </Grid>
        </Grid>
      </SuiBox>
    </>
  );
};

export default Wallet;
