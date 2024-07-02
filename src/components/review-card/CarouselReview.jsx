import { Box, Rating, Typography } from "@mui/material";

const CarouselReview = ({ name, rating, review }) => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding:"20px"
      }}
    >
      <Typography variant="reviewName">{name}</Typography>
      <Typography variant="subtitle2">23 Nov 2021</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body2" sx={{ ml: 1 }}>
          {rating}
        </Typography>
      </Box>
      <Typography
        variant="subdescription"
        width="90%"
        color="black"
        sx={{ mt: 1 }}
      >
        {review}
      </Typography>
    </Box>
  );
};

export default CarouselReview;
