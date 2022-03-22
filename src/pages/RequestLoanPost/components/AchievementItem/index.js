import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Box, CardActionArea, Paper } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'

export default function AchievementItem() {
    return (
        <>
            <Card sx={{borderRadius:0, bgcolor:"none"}}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                    alt="Paella dish"
                    sx={{ borderRadius: 0, margin:0 }}
                />
                <CardContent>
                    <SuiTypography variant="body2" color="text">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                    </SuiTypography>
                </CardContent>
            </Card>
        </>
    )
}
