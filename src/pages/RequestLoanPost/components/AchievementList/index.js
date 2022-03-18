// import * as React from 'react'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemAvatar from '@mui/material/ListItemAvatar'
// import ListItemText from '@mui/material/ListItemText'
// import DialogTitle from '@mui/material/DialogTitle'
// import Dialog from '@mui/material/Dialog'
// import { Box, Checkbox, Divider, Grid } from '@mui/material'
// import SuiTypography from 'components/SuiTypography'
// import SuiButton from 'components/SuiButton'

// import AchievementItem from './../AchievementItem'

// const emails = ['Toán quốc gia 2019', 'Toán thành phố 2018']

// export default function SimpleDialogDemo() {
//     const [open, setOpen] = React.useState(false)
//     const [selectedValue, setSelectedValue] = React.useState(emails[1])

//     const handleClickOpen = () => {
//         setOpen(true)
//     }

//     const handleClose = () => {
//         setOpen(false)
//     }

//     return (
//         <div>
//             <SuiButton
//                 variant="outlined"
//                 onClick={handleClickOpen}
//                 color="error"
//             >
//                 Chọn
//             </SuiButton>
//             <Dialog
//                 onClose={handleClose}
//                 open={open}
//                 fullWidth={true}
//                 maxWidth="lg"
//             >
//                 <DialogTitle>Chọn thành tích mà bạn đã tạo</DialogTitle>
// <Box px={3}>
//     <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//             <AchievementItem />
//         </Grid>
//         <Grid item xs={12} md={4}>
//             <AchievementItem />
//         </Grid>
//         <Grid item xs={12} md={4}>
//             <AchievementItem />
//         </Grid>
//     </Grid>
//     <Divider/>
//     <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//             <AchievementItem />
//         </Grid>
//         <Grid item xs={12} md={4}>
//             <AchievementItem />
//         </Grid>
//         <Grid item xs={12} md={4}>
//             <AchievementItem />
//         </Grid>
//     </Grid>

//                 </Box>
//             </Dialog>
//         </div>
//     )
// }
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import SuiTypography from 'components/SuiTypography'
import { Box, Grid } from '@mui/material'
import AchievementItem from '../AchievementItem'
import SuiButton from 'components/SuiButton'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <SuiTypography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            Những thành tựu
                        </SuiTypography>
                        <SuiButton autoFocus color="dark" onClick={handleClose}>
                            Lưu
                        </SuiButton>
                    </Toolbar>
                </AppBar>
                <Box px={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                    </Grid>
                    <Divider sx={{ borderBottomWidth: 2, my:3 }} />
                    <SuiTypography variant="h6" fontWeight="regular" color="black">Đã chọn</SuiTypography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <AchievementItem />
                        </Grid>
                    </Grid>
                </Box>
            </Dialog>
        </div>
    )
}
