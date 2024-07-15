/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import "./gallery.css";
export default function GalleryCard({ Image }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      <img src={Image} alt="" className="gallerycard-image" />
    </Box>
  );
}
