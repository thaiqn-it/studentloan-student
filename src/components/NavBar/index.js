import React, { useEffect, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom';
import { Grid } from '@mui/material';

import styles from './NavBar.module.css'
import { JWT_TOKEN } from "../../constants/";

const NavBar = (props) => {
    const logInHandler = () => {
        props.changeIsLogged(true)
        if (localStorage.getItem(JWT_TOKEN)) {
            props.changeIsLogged(true)
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem(JWT_TOKEN);
        localStorage.clear();
        props.changeIsLogged(false)
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.navBar}>
                <Toolbar variant="dense">          
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Link className={styles.logo} to={"/"}>                 
                                Logo
                            </Link>           
                        </Grid>
                        <Grid item xs={8}>
                            {!props.isLoggedIn && (
                                <Link className={styles.loginLink} onClick={logInHandler} to={"/Login"}>Log In</Link> 
                            )} 
                            {props.isLoggedIn && ( 
                                <Link className={styles.navLink} to={"/"} onClick={logoutHandler}>Log out</Link> 
                            )}          
                            <Link className={styles.navLink} to={"/Services"}>Sign Up</Link> 
                            <Link className={styles.navLink} to={"/Services"}>Services</Link> 
                            <Link className={styles.navLink} to={"/About"}>About</Link> 
                        </Grid>
                    </Grid>   
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
