import React from "react";
import {
  Button,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";


export default function MyLoanItem(props) {
   const { avatar, name, money } = props.investor;
   
   const clickItem = () =>{
       console.log("hjoho")
   }

  return (
      <>
<Paper elevation={1} sx={{marginTop:2}}>
    <ListItem onClick={clickItem}>
      <ListItemText primary="21/11/2021" />
       <ListItemText primary="21/11/2021" />
 
      <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
       <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
            <ListItemText primary={money + " VND"} />
                <ListItemText primary="approve" sx={{color:"green"}}/>
    </ListItem>
    </Paper>
    <Paper elevation={1} sx={{marginTop:2}}>
    <ListItem>
      <ListItemText primary="21/11/2021" />
  <ListItemText primary="21/11/2021" />
      <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
       <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
            <ListItemText primary={money + " VND"} />
                <ListItemText primary="reject" sx={{color:"red"}}/>
    </ListItem>
    </Paper>
    <Paper elevation={1} sx={{marginTop:2}}>
    <ListItem>
      <ListItemText primary="21/11/2021" />
  <ListItemText primary="21/11/2021" />
      <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
       <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
            <ListItemText primary={money + " VND"} />
                <ListItemText primary="approve" sx={{color:"green"}}/>
    </ListItem>
    </Paper>

<Paper elevation={1} sx={{marginTop:2}}>
    <ListItem>
      <ListItemText primary="21/11/2021" />
  <ListItemText primary="21/11/2021" />
      <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
       <ListItemText primary="I make this form to borrow money to handle my tuition in FPT university" />
            <ListItemText primary={money + " VND"} />
            <ListItemText primary="approve" sx={{color:"green"}}/>
    </ListItem>
    </Paper>
    </>
  );

}
