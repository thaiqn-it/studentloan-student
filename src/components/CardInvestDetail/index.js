import React from "react";
import {
  Button,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function CardInvestDetail(props) {
  const { avatar, name, money } = props.investor;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary="Jan 9, 2014" />
      <ListItemText primary={money + " VND"} />
      <Button
        size="small"
        variant="container"
        color="secondary"
        sx={{
          marginLeft: "auto",
          backgroundColor: "#ff5722",
          color: "white",
          "&:hover": {
            backgroundColor: "#b23c17",
          },
        }}
      >
        View
      </Button>
    </ListItem>
  );
}
