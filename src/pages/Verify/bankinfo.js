import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SuiInput from "components/SuiInput";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import classes from "./basicInfo.module.css";

const InputField = ({
  type,
  value,
  handleInputState,
  error,
  helperText,
  label,
}) => {
  return (
    <>
      <Box className={classes.inputBox}>
        <Typography variant="caption" className={classes.title}>
          {label}
        </Typography>
        <SuiInput type={type} value={value} onChange={handleInputState} />
        {error && (
          <Typography variant="caption" className={classes.error}>
            {helperText}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default function BasicInfo({ basicInfo, handlerBasicInfoSubmit }) {
  const [name, setName] = useState();

  const [error, setError] = useState({});

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputField
              value={name}
              handleInputState={(event) => setName(event.target.value)}
              helperText="Ngân Hàng"
              label="Ngân Hàng"
              error={false}
            />  

            <InputField
              value={name}
              handleInputState={(event) => setName(event.target.value)}
              helperText="Cần điền đầy đủ họ"
              label="Kì Hiện tại"
              error={false}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              value={name}
              handleInputState={(event) => setName(event.target.value)}
              helperText="Cần điền đầy đủ họ"
              label="Số Tài Khoản Ngân Hàng"
              error={false}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
