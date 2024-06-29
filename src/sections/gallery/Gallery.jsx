import { Grid, Stack, Typography } from "@mui/material";
import GalleryCard from "../../components/gallery-card/GalleryCard";
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";

const Gallery = () => {
  const { galleryData } = useContext(EventContext);
  return (
    <Stack
      width="90%"
      sx={{
        margin: {
          xs: "50px auto 0px",
          sm: "10px auto 0px",
          md: "50px auto 0px",
          lg: "50px auto 20px",
        },
      }}
    >
      <Typography variant="title" marginBottom="30px">Gallery</Typography>
      <Grid container spacing={1.5}>
        {galleryData.map((menu, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <GalleryCard Image={menu.img} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Gallery;
