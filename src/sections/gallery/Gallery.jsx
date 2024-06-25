import { Grid, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import GalleryCard from "../../components/gallery-card/GalleryCard"
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";



const Gallery = () => {
    const { galleryData } = useContext(EventContext)
    return (
        <Stack width="90%" margin=" 30px auto 0px"  >
            <Typography variant="h2" style={{...theme.typography.title,marginBottom:"30px"}}>
                Gallery
            </Typography>
            <Grid
                container
                spacing={2}
                sx={{
                    // marginTop: "5px",
                    // backgroundColor:"green"

                }}
            >
                {galleryData.map((menu, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <GalleryCard
                            Image={menu.img}

                        />
                    </Grid>
                ))}
            </Grid>


        </Stack>
    );
}

export default Gallery;
