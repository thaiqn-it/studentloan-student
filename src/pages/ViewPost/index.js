import {
    Container,
    Typography,
    Box,
    Grid,
    LinearProgress,
    Divider,
    List,
    Paper,
    TextField,
    CardMedia,
} from '@mui/material'
import SuiBox from 'components/SuiBox'
import SuiProgress from 'components/SuiProgress'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'
import CardInvestDetail from '../../components/CardInvestDetail'
import ImageModal from '../../components/ImageModal'

export default function ViewPost() {
    const investor = {
        avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg',
        name: 'Ha Nguyen',
        money: '200.000',
    }

    return (
        <>
            <SuiBox py={0}>
                <SuiBox mb={3}>
                    <Box component="div" sx={{ padding: '1rem 0rem' }}>
                        <Typography variant="h5" align="center">
                            Your loan post
                        </Typography>
                        <Typography variant="h6" align="center">
                            Watch how many people are supporting you
                        </Typography>
                    </Box>
                    <Paper
                        elevation={6}
                        sx={{
                            padding: '3rem 6rem',
                            borderRadius: '10px',
                            '@media (max-width: 1024px)': {
                                padding: '1rem',
                            },
                        }}
                    >
                        {/* <Container sx={{ padding: "3rem 3rem" }} maxWidth="xl"> */}

                        <Grid container spacing="15">
                            <Grid item xs="12" md="8">
                                <video width="100%" height="" controls>
                                    <source
                                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </Grid>
                            <Grid item xs="12" md="4">
                                <Grid container spacing="5">
                                    <Grid item xs="12" md="12">
                                        {/* <LinearProgress
                        variant="determinate"
                        value={100}
                        sx={{ height: "12px" }}
                        color="secondary"
                      /> */}
                                        <SuiProgress
                                            value={50}
                                            color="primary"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs="12"
                                        md="12"
                                        sx={{ marginTop: '1rem' }}
                                    >
                                        <Typography variant="h5">
                                            100.000 VND
                                        </Typography>
                                        <Typography variant="h6">
                                            goal
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs="6"
                                        md="12"
                                        sx={{ marginTop: '1rem' }}
                                    >
                                        <Typography variant="h5">0</Typography>
                                        <Typography variant="h6">
                                            backers
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs="6"
                                        md="12"
                                        sx={{ marginTop: '1rem' }}
                                    >
                                        <Typography variant="h5">
                                            60 days
                                        </Typography>
                                        <Typography variant="h6">
                                            before expired
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Divider sx={{ margin: '20px 0px' }} />
                    <Grid container spacing="15">
                        <Grid item xs="12" md="7">
                            <Paper
                                elevation={6}
                                sx={{
                                    padding: '2rem',
                                    borderRadius: '10px',
                                    height: 500,
                                    maxHeight: 500,
                                    overflow: 'auto',
                                }}
                            >
                                <Typography variant="h5">
                                    Description
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ marginTop: '10px' }}
                                    paragraph
                                >
                                    A paragraph is a series of related sentences
                                    developing a central idea, called the topic.
                                    Try to think about paragraphs in terms of
                                    thematic unity: a paragraph is a sentence or
                                    a group of sentences that supports one
                                    central, unified idea. Paragraphs add one
                                    idea at a time to your broader
                                    argument.Topic sentences are similar to mini
                                    thesis statements. Like a thesis statement,
                                    a topic sentence has a specific main point.
                                    Whereas the thesis is the main point of the
                                    essay, the topic sentence is the main point
                                    of the paragraph. A paragraph is a series of
                                    related sentences developing a central idea,
                                    called the topic. Try to think about
                                    paragraphs in terms of thematic unity: a
                                    paragraph is a sentence or a group of
                                    sentences that supports one central, unified
                                    idea. Paragraphs add one idea at a time to
                                    your broader argument.Topic sentences are
                                    similar to mini thesis statements. Like a
                                    thesis statement, a topic sentence has a
                                    specific main point. Whereas the thesis is
                                    the main point of the essay, the topic
                                    sentence is the main point of the paragraph.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs="12" md="5">
                            <Paper
                                elevation={6}
                                sx={{
                                    padding: '2rem',
                                    borderRadius: '10px',
                                    maxHeight: 500,
                                    overflow: 'auto',
                                }}
                            >
                                <Typography variant="h5">
                                    Investments
                                </Typography>
                                {/* <Paper
                  elevation={0}
                  style={{ maxHeight: 500, overflow: "auto" }}
                > */}
                                <List>
                                    <CardInvestDetail investor={investor} />
                                    <CardInvestDetail investor={investor} />
                                    <CardInvestDetail investor={investor} />
                                    <CardInvestDetail investor={investor} />
                                    <CardInvestDetail investor={investor} />
                                    <CardInvestDetail investor={investor} />
                                    <CardInvestDetail investor={investor} />
                                    {/* <Typography variant="h6" align="center" sx={{fontSize:"15px" }} color="#b23c17">More</Typography> */}
                                </List>
                                {/* </Paper> */}
                            </Paper>
                        </Grid>
                    </Grid>
                    <Divider sx={{ margin: '20px 0px' }} />
                    <Paper
                        elevation={6}
                        sx={{ padding: '2rem', borderRadius: '10px' }}
                    >
                        <Typography variant="h5">Demand Note</Typography>
                        <Grid container spacing="15">
                            <Grid item xs="12" md="6">
                                <CardMedia
                                    sx={{
                                        margin: '2rem 0 0 0',
                                        width: '100%',
                                        '@media (max-width: 1024px)': {
                                            height: '20rem',
                                        },
                                    }}
                                    height="400"
                                    component="img"
                                    image="https://invietlong.com/data/images/phieu-thu-cty-tata-02.jpg"
                                />
                            </Grid>
                            <Grid item xs="12" md="6">
                                <CardMedia
                                    sx={{
                                        margin: '2rem 0 0 0',
                                        width: '100%',
                                        '@media (max-width: 1024px)': {
                                            height: '20rem',
                                        },
                                    }}
                                    height="400"
                                    component="img"
                                    image="https://o.vdoc.vn/data/image/2018/08/02/mau-bien-lai-thu-hoc-phi.jpg"
                                />
                            </Grid>
                        </Grid>
                    </Paper>

                    <Divider sx={{ margin: '20px 0px' }} />

                    <Paper
                        elevation={6}
                        sx={{ padding: '2rem', borderRadius: '10px' }}
                    >
                        <Typography variant="h5">Archivements</Typography>
                        <Grid container spacing="15">
                            <Grid item xs="12" md="6">
                                <TextField
                                    align="right"
                                    label="Title"
                                    variant="outlined"
                                    defaultValue="hinh 1"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    fullWidth
                                    sx={{ marginTop: 2 }}
                                />
                                <CardMedia
                                    // sx={{ width: "100%" }}
                                    height="400"
                                    component="img"
                                    image="http://www.vksndtc.gov.vn/knd/tt/PublishingImages/TinTuc/AnhDaiDien/moet%20112_04122016.jpg"
                                    sx={{
                                        margin: '2rem 0 0 0',
                                        width: '100%',
                                        '@media (max-width: 1024px)': {
                                            height: '20rem',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs="12" md="6">
                                <TextField
                                    align="right"
                                    label="Title"
                                    defaultValue="hinh 2"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginTop: 2 }}
                                />
                                <CardMedia
                                    sx={{
                                        margin: '2rem 0 0 0',
                                        width: '100%',
                                        '@media (max-width: 1024px)': {
                                            height: '20rem',
                                        },
                                    }}
                                    height="400"
                                    component="img"
                                    image="https://cdnmedia.baotintuc.vn/Upload/e9GdNZvHDFi8lZSWc6ubA/files/2021/04/hoc-sinh-gioi-26421a.jpg"
                                />

                                <ImageModal
                                    image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                                    sx={{
                                        margin: '2rem 0 0 0',
                                        width: '100%',
                                        '@media (max-width: 1024px)': {
                                            height: '20rem',
                                        },
                                        cursor: 'pointer',
                                    }}
                                    height="400"
                                    component="img"
                                    outline="none"
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* </Container> */}
                    <Divider sx={{ margin: '20px 0px' }} />
                </SuiBox>
            </SuiBox>
        </>
    )
}
