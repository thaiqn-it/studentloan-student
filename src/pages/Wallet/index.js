import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";
import classes from "./Wallet.module.css";
import SendIcon from "@mui/icons-material/Send";

const Wallet = () => {
  return (
    <>
      <Grid container sx={{ width: "80%" }}>
        <Grid item xs={3}>
          <Box className={classes.walletAccount}>
            <Typography>Current Balance</Typography>
            <Typography variant="h6" color="green">
              60000
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.walletAccount}>
            <Typography>Current Debt</Typography>
            <Typography variant="h6" color="red">
              60000
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.walletAccount}>
            <Typography>Debt per month</Typography>
            <Typography variant="h6" color="blue">
              60000 / month
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.walletAccount}>
            <Button>Pay Debt</Button>
          </Box>
        </Grid>
      </Grid>

      <Box xs={{ width: "60%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Recent Activity</Typography>
          <Typography>See All</Typography>
        </Box>

        <Box className={classes.activity}>
          <Box
            sx={{
              background: "gray",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <SendIcon />
          </Box>

          <Box>
            <Typography>Send Money To App</Typography>
            <Typography>xx:xx Mon x/xx/xxxx</Typography>
          </Box>
          <Typography>-xxxxx</Typography>
        </Box>
      </Box>
      <Box className={classes.activity}>
        <Box
          sx={{
            background: "gray",
            width: "35px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <SendIcon />
        </Box>

        <Box>
          <Typography>Send Money To App</Typography>
          <Typography>xx:xx Mon x/xx/xxxx</Typography>
        </Box>
        <Typography>-xxxxx</Typography>
      </Box>
      <Box className={classes.activity}>
        <Box
          sx={{
            background: "gray",
            width: "35px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <SendIcon />
        </Box>

        <Box>
          <Typography>Send Money To App</Typography>
          <Typography>xx:xx Mon x/xx/xxxx</Typography>
        </Box>
        <Typography>-xxxxx</Typography>
      </Box>
      <Box className={classes.activity}>
        <Box
          sx={{
            background: "gray",
            width: "35px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <SendIcon />
        </Box>

        <Box>
          <Typography>Send Money To App</Typography>
          <Typography>xx:xx Mon x/xx/xxxx</Typography>
        </Box>
        <Typography>-xxxxx</Typography>
      </Box>
    </>
  );
};

export default Wallet;
