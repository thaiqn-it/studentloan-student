import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Box,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";
import DropFileInput from "../../components/DropFileZone";

export default function ArchievementPage(props) {
  const [listArchievement, setListArchievement] = useState([
    // {
    //   description: "Hihi",
    //   url: "https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg.webp",
    // },
    // {
    //   description: "Hihi",
    //   url: "https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg.webp",
    // },
  ]);
  const [archievement, setArchievement] = useState({
    id: "",
    description: "",
    url: "",
  });
  const onFileChangeURL = (newUrl) => {
    setArchievement({ ...archievement, url: newUrl });
    console.log(archievement);
  };

  const onNext = () => {
    //save data
    props.handleStep(2);
  };

  const onTitleChange = (event) => {
    setArchievement({ ...archievement, description: event.target.value });
  };

  const addArchievement = () => {
    if (archievement.description.length > 0 && archievement.url.length > 0) {
      const id = new Date().getTime();
      setArchievement({ ...archievement, id });
      setListArchievement((current) => [...current, archievement]);
      setArchievement({ ...archievement, id: "", url: "", description: "" });
    }
  };

  return (
    <>
      <Box component="div" sx={{ padding: "3rem 0rem" }}>
        <Typography variant="h5" align="center">
          Add your archievement
        </Typography>
        <Typography variant="h6" align="center">
          Offer simple, meaningful ways to bring backers closer to your project
          and celebrate it coming to life.
        </Typography>
      </Box>
      <Divider />
      <Container sx={{ padding: "3rem 3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs="12" md="5">
            <Typography variant="h5" sx={{ fontSize: "1.3rem" }}>
              Archievement
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", paddingRight: "2rem" }}
            >
              Set an achievable goal that covers what you need to complete your
              project. Funding is all-or-nothing. If you don’t meet your goal,
              you won’t receive any money.
            </Typography>
          </Grid>
          <Grid
            item
            xs="12"
            md="7"
            sx={{
              h5: {
                fontSize: "15px",
              },
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs="12" md="12">
                {listArchievement.map((items) => (
                  <>
                    <TextField
                      align="right"
                      label="Title"
                      variant="outlined"
                      fullWidth
                      defaultValue={items.description}
                      sx={{ marginTop: 2 }}
                    />
                    <CardMedia
                      sx={{ marginTop: 2 }}
                      component="img"
                      height="300"
                      image={items.url}
                      alt={items.url}
                    />

                    
                    <Divider sx={{ margin: "60px 0px" }} />
                  </>
                ))}

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    margin: "0 auto",
                    display: "block",
                    marginRight: "0",
                    textTransform: "none",
                  }}
                  onClick={addArchievement}
                >
                  Add
                </Button>
                <Typography variant="h5">Title</Typography>
                <TextField
                  align="right"
                  variant="outlined"
                  name="title"
                  value={archievement.description}
                  fullWidth
                  onChange={onTitleChange}
                  sx={{ marginTop: 1.5 }}
                />
                {archievement.url.length > 0 ? (
                  <CardMedia
                    sx={{ marginTop: 2 }}
                    component="img"
                    height="300"
                    image={archievement.url}
                    alt={archievement.url}
                  />
                ) : (
                  <DropFileInput
                    onFileChangeURL={(url) => onFileChangeURL(url)}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      
    </>
  );
}
