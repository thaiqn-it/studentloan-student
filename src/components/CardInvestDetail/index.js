import React from "react";
import {
  Button,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import InvestmentCard from "pages/ViewPost/components/InvestmentsCard";

export default function CardInvestDetail(props) {
  const { avatar, name, money } = props.investor;

  return (
    // <ListItem>
    //   <ListItemAvatar>
    //     <Avatar src={avatar} />
    //   </ListItemAvatar>
    //   <ListItemText primary={name} secondary="Jan 9, 2014" />
    //   <ListItemText primary={money + " VND"}/>
    //   <SuiButton
    //     size="small"
    //     variant="container"
    //     color="dark"
    //     sx={{
    //       marginLeft: "auto",
    //       backgroundColor: "#ff5722",
    //       color: "white",
    //       "&:hover": {
    //         backgroundColor: "#b23c17",
    //       },
    //     }}
    //   >
    //     View
    //   </SuiButton>
    // </ListItem>
    <SuiBox pt={1} pb={2} px={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <InvestmentCard
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <InvestmentCard
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <InvestmentCard
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </SuiBox>
      </SuiBox>
  );
}
