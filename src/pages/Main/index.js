import {
    Box,
    Card,
    CardActionArea,
    Grid,
    Paper,
    Typography,
} from '@mui/material'
import Footer from 'components/Footer'
import LoanRepaymentProgress from 'components/LoanRepaymentProgress.js'
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'

import React from 'react'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import LoanCalendar from 'components/LoanCalendar'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/color'

import ProgressBar from "@ramonak/react-progress-bar";
import { loanApi } from 'apis/loanApi';
import { LOAN_STATUS } from 'utils/enum';
import { loanScheduleApi } from './../../apis/loanScheduleApi';
export default function Main() {
    const loadAllLoanSchedule = async () =>{
        const loansRes = await loanApi.getLoanStudent('');
    const ongoingLoan = loansRes.data.filter(l => l.LoanHistories[0].type === LOAN_STATUS.ONGOING);
    
      
    }
    
    return (
        <>
            <SuiBox mb={3}>       
                <Grid container spacing={4}>   
                    <Grid item xs={12} md={7}>
                        <LoanCalendar />
                    </Grid>    
                    <Grid item xs={12} md={5}>
                        
                        <Card style={{ borderRadius : 5,boxShadow: "1px 2px 4px #9E9E9E"}} sx={{ height: '100%' }}>
                            <Typography style={{ textAlign : 'center', fontWeight : 'bold', color : SECONDARY_COLOR }}>Đang kêu gọi</Typography>
                            {/* foreach chỗ này */}
                            <Card style={{ borderRadius : 5,boxShadow: "1px 2px 4px #9E9E9E", margin : 10 , padding : 10 }}>                              
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        gap: '15px',
                                    }}
                                >                
                                    <Grid xs={6}>
                                        <Typography style={{ fontWeight : 'bold', fontSize : 16 }}>Khoản tiền : 20.000.000</Typography>
                                    </Grid>  
                                                                  
                                        <Button variant="text" size="medium">
                                            Chi tiết
                                        </Button>    
                                                             
                                </Box>
                                <Grid style={{ marginTop : 10, marginBottom : 10 }}>
                                    <ProgressBar completed={60} maxCompleted={100} bgColor={PRIMARY_COLOR}/>
                                </Grid>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        gap: '15px',
                                    }}
                                >                
                                    <Grid xs={6}>
                                        <Typography style={{ fontWeight : 'bold', fontSize : 15, opacity : 0.6 }}>Số nhà đầu tư : 6</Typography>
                                    </Grid>       
                                    <Grid xs={6}>
                                        <Typography style={{ fontWeight : 'bold', fontSize : 15, opacity : 0.6 }}>Số ngày còn lại : 27 ngày</Typography>
                                    </Grid>
                                </Box>
                            </Card>
                            
                        </Card>
                    </Grid>
                </Grid>  
            </SuiBox>

            {/* <Footer /> */}
        </>
    )
}
