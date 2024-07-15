/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import "./menu.css";
import { Box } from "@mui/material";

export default function MenuCard({ image, menuname, pages }) {
  return (
    <Box
      sx={{
        border: "2px solid #eeeeee",
        padding: {
          xs: "8px",
          sm: "15px",
          md: "15px",
          lg: "15px",
        },
        borderRadius: "10px",
      }}
    >
      <img
        src={image}
        alt=""
        className="menucard-image"
        style={{ width: "100%", borderRadius: "5px" }}
      />

      <Typography variant="menutitle">{menuname}</Typography>
      <Typography variant="body2">{pages} Pages</Typography>
    </Box>
  );
}
