import React from 'react'
import { 
    Box, 
    Grid,
    Typography,
    TextField,
    Button,
    Stack,
    Link
} from '@mui/material';
import styles from './ForgotPassword.module.css'
import theme from '../../theme';
import { ThemeProvider } from '@mui/material/styles';

const ForgotPassword = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ marginTop : 30 }}
                >
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                boxShadow: 5,
                                width: 700,
                                height: 400,                     
                            }}
                        >
                            <Typography 
                                variant="h4" 
                                className={styles.title}
                            >
                                Forgot Password
                            </Typography>
                            <Typography variant="subtitle2" className={styles.subTitle}>
                                Please enter your email and we'll send you further instructions.
                            </Typography>
                            
                            <Stack spacing={2}>
                                <TextField                     
                                    id="standard-required"
                                    placeholder="Email"
                                    type="email"
                                    variant="standard"
                                    color="success"
                                    style={{
                                        margin : '20px',
                                        width: '500px' ,
                                    }}
                                /> 
                                    <Button variant="contained"
                                            style={{
                                                margin : '20px',
                                                width: '500px',                                           
                                            }}>
                                        Confirm
                                    </Button>
                                                
                                <Link href="/" underline="hover" fontFamily="fontFamily" style={{
                                    margin: '20px',
                                }}>
                                    {'Back to login'}
                                </Link>
                            </Stack>         
                        </Box>
                    </Grid>   
                </Grid>  
            </ThemeProvider>      
    )
}

export default ForgotPassword
