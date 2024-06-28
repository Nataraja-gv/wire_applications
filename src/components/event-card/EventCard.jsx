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
      <img src={image} alt="" className="eventimages" /> {/* Use the image prop here */}

      <Box
        sx={{
          marginTop: {
            xs: "20px",
            md: "20px",
            sm: "20px",
            lg: "20px",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="eventh1"
          sx={{
            fontSize: {
              xs:"16px",
              sm: "20px",
              md: "20px",
              lg: "25px",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="eventtime"
          sx={{
            fontSize: {
              xs:"12px",
              sm: "16px",
              md: "14px",
              lg: "16px",
            },
          }}
        >
          June 10, 2024 | 5:00 PM
        </Typography>
        <Typography
          variant="onWardsTitle"
          sx={{
            marginTop: {
              xs: "5px",
              md: "5px",
              sm: "5px",
              lg: "5px",
            },
            fontSize: {
              xs:"16px",
              sm: "22px",
              md: "20px",
              lg: "24px",
            },
          }}
        >
          1000 onwards 
        </Typography>
      </Box>
    </Box>
  );
}
