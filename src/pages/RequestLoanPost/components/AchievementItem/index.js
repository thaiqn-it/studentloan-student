import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, Paper } from '@mui/material'
import SuiTypography from 'components/SuiTypography'

export default function AchievementItem() {
    return (
        <Paper >
            <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="green iguana"
                sx={{ margin: 0, borderRadius: 0 }}
            />
            {/* <CardContent> */}
                <SuiTypography
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                    }}
                    variant="body2"
                >
                    Tiêu đề: wjbeguqengoimq
                    iogmiwqoegwheotynwoeitnwoiuetwebytweynwieuygwegwehwhwrhwrhrherherherherherhwjbeguqengoimqiogmiwqoegwheotynwoeitnwoiuetwebytweynwieuygwegwehwhwrhwrhrherherherherherh
                </SuiTypography>
            {/* </CardContent> */}
        </Paper>
    )
}
