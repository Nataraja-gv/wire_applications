import Typography from "@mui/material/Typography";
import "./eventcard.css";
import { Box } from "@mui/material";

export default function EventCards({ image, title }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        boxShadow: "none",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
      }}
    >
      <img src={image} alt="" className="eventimages" />{" "}
      
      <Box
        sx={{
          marginTop: {
            xs: "10px",
            md: "15px",
            sm: "20px",
            lg: "20px",
          },
        }}
      >
        <Typography gutterBottom variant="eventh1">
          {title}
        </Typography>
        <Typography variant="eventtime">June 10, 2024 | 5:00 PM</Typography>
        <Typography variant="onWardsTitle">1000 onwards</Typography>
      </Box>
    </Box>
  );
}
