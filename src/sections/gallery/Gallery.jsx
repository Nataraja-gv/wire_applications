import { useContext } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { Box, Grid, Stack, Typography } from "@mui/material";
import GalleryCard from "../../components/gallery-card/GalleryCard";
import { EventContext } from "../../context/tickets-context/context";
import { Link } from "react-router-dom";

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
      <Typography variant="title" marginBottom="30px">
        Gallery
      </Typography>
      <Grid container spacing={1.5}>
        {galleryData.slice(0, 8).map((menu, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={index}
            sx={{ position: "relative" }}
          >
            <GalleryCard Image={menu.img} />
            {menu.id === 8 && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  right: "0%",
                  transform: "translateX(-10%)",
                  zIndex: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: {
                    xs: "2px 4px",
                    md: "5px 8px",
                    sm: "5px 6px",
                    lg: "5px 10px",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  border: "1.2px solid",
                  borderColor: "rgba(0, 0, 0, 0.12)",
                  opacity: 0.8,
                  backdropFilter: "blur(4px)",
                  transition: "box-shadow 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <Link to="/gallery">
                  <Stack direction="row" alignItems="center" spacing={0.2}>
                    <InsertPhotoIcon fontSize="medium" color="primary" />
                    <Typography variant="body1" color="primary">
                      More Images
                    </Typography>
                  </Stack>
                </Link>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Gallery;
