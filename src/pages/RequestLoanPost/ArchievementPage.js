// import React, { useState } from 'react'
// import {
//     Container,
//     Typography,
//     Grid,
//     Divider,
//     Box,
//     TextField,
//     Button,
//     CardMedia,
// } from '@mui/material'
// import DropFileInput from '../../components/DropFileZone'
// import SuiTypography from 'components/SuiTypography'
// import SuiButton from 'components/SuiButton'

// export default function ArchievementPage(props) {
//     const [listArchievement, setListArchievement] = useState([])
//     const [archievement, setArchievement] = useState({
//         id: '',
//         description: '',
//         url: '',
//     })
//     const onFileChangeURL = (newUrl) => {
//         setArchievement({ ...archievement, url: newUrl })
//         console.log(archievement)
//     }

//     const onNext = () => {
//         //save data
//         props.handleStep(2)
//     }

//     const onTitleChange = (event) => {
//         setArchievement({ ...archievement, description: event.target.value })
//     }

//     const addArchievement = () => {
//         if (
//             archievement.description.length > 0 &&
//             archievement.url.length > 0
//         ) {
//             const id = new Date().getTime()
//             setArchievement({ ...archievement, id })
//             setListArchievement((current) => [...current, archievement])
//             setArchievement({
//                 ...archievement,
//                 id: '',
//                 url: '',
//                 description: '',
//             })
//         }
//     }

//     return (
//         <>
//             <Box component="div" sx={{ padding: '3rem 0rem' }}>
//                 <Typography variant="h5" align="center">
//                     Add your archievement
//                 </Typography>
//                 <Typography variant="h6" align="center">
//                     Offer simple, meaningful ways to bring backers closer to
//                     your project and celebrate it coming to life.
//                 </Typography>
//             </Box>
//             <Divider />
//             <Container sx={{ padding: '3rem 3rem' }}>
//                 <Grid container spacing={3}>
//                     <Grid item xs="12" md="5">
//                         <SuiTypography
//                             variant="h6"
//                             fontWeight="bold"
//                             textTransform="capitalize"
//                         >
//                             Archievement
//                         </SuiTypography>
//                         <SuiTypography
//                             variant="button"
//                             fontWeight="regular"
//                             color="text"
//                         >
//                             Set an achievable goal that covers what you need to
//                             complete your project. Funding is all-or-nothing. If
//                             you don’t meet your goal, you won’t receive any
//                             money.
//                         </SuiTypography>
//                     </Grid>
//                     <Grid item xs="12" md="7">
//                         <Grid container spacing={4}>
//                             <Grid item xs="12" md="12">
//                                 {listArchievement.map((items) => (
//                                     <>
//                                         <SuiTypography
//                                             label="Title"
//                                             variant="h6"
//                                             fontWeight="medium"
//                                             textTransform="capitalize"
//                                             defaultValue={items.description}
//                                             sx={{ marginTop: 2 }}
//                                         >
//                                             Archievement
//                                         </SuiTypography>
//                                         <CardMedia
//                                             sx={{ marginTop: 2 }}
//                                             component="img"
//                                             height="300"
//                                             image={items.url}
//                                             alt={items.url}
//                                         />

//                                         <Divider sx={{ margin: '60px 0px' }} />
//                                     </>
//                                 ))}

//                                 <SuiButton
//                                     variant="contained"
//                                     color="dark"
//                                     sx={{
//                                         margin: '0 auto',
//                                         display: 'block',
//                                         marginRight: '0',
//                                         textTransform: 'none',
//                                     }}
//                                     onClick={addArchievement}
//                                 >
//                                     Add
//                                 </SuiButton>
//                                 <SuiTypography
//                                     label="Title"
//                                     variant="h6"
//                                     fontWeight="medium"
//                                     textTransform="capitalize"
//                                 >
//                                     Title
//                                 </SuiTypography>
//                                 {/* <Typography variant="h5">Title</Typography> */}
//                                 <TextField
//                                     align="right"
//                                     variant="outlined"
//                                     name="title"
//                                     value={archievement.description}
//                                     fullWidth
//                                     onChange={onTitleChange}
//                                     sx={{ marginTop: 1.5 }}
//                                 />
//                                 {archievement.url.length > 0 ? (
//                                     <CardMedia
//                                         sx={{ marginTop: 2 }}
//                                         component="img"
//                                         height="300"
//                                         image={archievement.url}
//                                         alt={archievement.url}
//                                     />
//                                 ) : (
//                                     <DropFileInput
//                                         onFileChangeURL={(url) =>
//                                             onFileChangeURL(url)
//                                         }
//                                     />
//                                 )}
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Container>
//             <Divider />
//         </>
//     )
// }

import { Box, Container, Divider, Grid } from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useState } from 'react'
import AchievementList from './components/AchievementList'

export default function ArchievementPage() {
    const [openAchievement, setOpenAchievement] = useState(false)

    const handleOpenAchievement = () => {
        setOpenAchievement(true)
    }

    const handleCloseAchievement = (value) => {
        setOpenAchievement(false)
    }
    return (
        <>
            <Box
                component="div"
                sx={{ padding: '3rem 0rem' }}
                id="achievements"
            >
                <SuiTypography
                    variant="h4"
                    align="center"
                    color="black"
                    fontWeight="regular"
                >
                    Hãy thêm thành tích của bạn
                </SuiTypography>
                <SuiTypography
                    variant="h6"
                    align="center"
                    fontWeight="regular"
                    color="text"
                >
                    Thành tích sẽ thu hút nhà đầu tư và tạo uy tín của bài vay
                    của bạn
                </SuiTypography>
            </Box>
            <Divider />
            <SuiButton
                color="error"
                position="relative"
                sx={{ float: 'right', m: 3, zIndex: '99' }}
                onClick={handleOpenAchievement}
            >
                Chọn
            </SuiButton>

            <Container sx={{ padding: '3rem 3rem' }} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color="black"
                        >
                            Những thành tích
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            Đó có thể là những bằng khen về học thuật, tài năng,
                            ... Hoặc những dự án mà bạn đã làm trong lúc học
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={4}>
                            <Grid item xs="12" md="12">
                                <AchievementList
                                    onOpen={openAchievement}
                                    onClose={handleCloseAchievement}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    )
}
