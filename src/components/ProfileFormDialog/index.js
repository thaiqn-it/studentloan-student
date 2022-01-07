import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ProfileFormDialog = (props) => {
  const { open, handleClose, handleFormSubmit, title, children } = props;
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"sm"}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Huỷ</Button>
          <Button onClick={handleFormSubmit}>Cặp Nhật</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileFormDialog;
