import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ReviewCard = () => {
  const { reviews } = useContext(EventContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        width: "100%",
        marginTop: "20px",
        justifyContent: "center",
      }}
    >
      {reviews.map((reviewer, index) => (
        <Stack
          key={index}
          sx={{
            marginBottom: "20px",
            backgroundColor: "white",
            width: "23%",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6">{reviewer.name}</Typography>
          <Typography variant="subtitle2">23 Nov 2021</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Rating name="read-only" value={reviewer.rating} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {reviewer.rating}
            </Typography>
          </Box>
          <Typography
            variant=" reviewDescription"
            color="black"
            sx={{
              mt: 1,
            }}
          >
            {reviewer.review}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default ReviewCard;
