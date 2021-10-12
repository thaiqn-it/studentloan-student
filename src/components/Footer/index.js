import { Grid, Typography } from "@mui/material";
import React from "react";

import classes from "./Footer.module.css";
const Footer = (prop) => {
  return (
    <>
      <div className={classes.container}>
        <Grid container className={classes.center} style={{ width: "50%" }}>
          <Grid item xs={3} className={classes.link}>
            <Typography>Privacy Policy</Typography>
          </Grid>
          <Grid item xs={3} className={classes.link}>
            <Typography>About Us</Typography>
          </Grid>
          <Grid item xs={3} className={classes.link}>
            <Typography>Contact</Typography>
          </Grid>
          <Grid item xs={3} className={classes.link}>
            <Typography>Disclaimer</Typography>
          </Grid>
        </Grid>
        <div className={classes.infomation}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          libero neque, mollis a risus et, pharetra hendrerit velit. Aliquam
          vitae pretium mauris. Praesent fermentum tortor nec molestie posuere.
          Sed at pretium arcu. Sed id tempus velit, sit amet sollicitudin
          lectus. Phasellus vel nisl pharetra, scelerisque sapien eget, aliquam
          libero. Mauris accumsan felis vel metus luctus finibus. Fusce
          ullamcorper mi in quam fermentum molestie nec a tortor. Vestibulum
          commodo leo est, quis volutpat nibh imperdiet quis.
        </div>
        <div className={classes.infomation}>
          Copyright © 2021. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
