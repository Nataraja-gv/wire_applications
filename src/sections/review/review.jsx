import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Google from "../../assets/google_logo.svg.png";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
// import ReviewCard from "../../components/review-card/ReviewCard"; // Correct import path
import CarouselReview from "../../components/review-card/CarouselReview";

import { Stack, Typography } from "@mui/material";

const StyledDiv = styled("div")({
  backgroundImage: `url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-black-meat-western-food-banner-background-image_194600.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "600px",
  width: "100%",
  opacity: 0.9,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "goldenrod",
});

function Review() {
  const rating = 4.8;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={`star-${i}`} fontSize="large" />);
  }

  // Add half star if necessary
  if (hasHalfStar) {
    stars.push(<StarHalfIcon key="half-star" fontSize="large" />);
  }

  return (
    <Box
      sx={{
        margin: {
          xs: "50px auto 0px",
          sm: "50px auto 0px",
          md: "50px auto 0px",
          lg: "50px auto 20px",
        },
        width: "100%",
      }}
    >
      <StyledDiv>
        <Box
          component="img"
          src={Google}
          sx={{
            width: {
              xs: "200px",
              sm: "220px",
              md: "350px",
              lg: "350px",
            },
            height: {
              xs: "60px",
              sm: "70px",
              md: "100px",
              lg: "110px",
            },
            marginBottom: "5px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: {
              xs: "25px",
              sm: "25px",
              md: "30px",
              lg: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
            fontWeight: "bold",
          }}
        >
          <span style={{ marginRight: "5px", fontWeight: "bold" }}>
            {rating}
          </span>
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </Box>
        <Box>
          <CarouselReview />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Stack
            sx={{
              border: "1px solid",
              borderColor: "primary.main",
              padding: {
                xs: "6px 15px 6px 15px",
                sm: "8px 18px 8px 18px",
                md: "8px 18px 8px 18px",
                lg: "8px 18px 8px 18px",
              },
              borderRadius: "5px",
              backgroundColor: "primary.main",
              "&:hover": {
                borderColor: "black",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                color: "white",
                fontSize: {
                  xs: "12px",
                  sm: "16px",
                  md: "16px",
                  lg: "16px",
                },
              }}
            >
              Write a Review
            </Typography>
          </Stack>
          <Stack
            sx={{
              border: "1px solid",
              padding: {
                xs: "6px 15px 6px 15px",
                sm: "8px 18px 8px 18px",
                md: "8px 18px 8px 18px",
                lg: "8px 18px 8px 18px",
              },
              borderRadius: "5px",
              backgroundColor: " rgba(255, 255, 255, 0.4)",
              "&:hover": {
                borderColor: "primary.main",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                color: "white",
                fontSize: {
                  xs: "12px",
                  sm: "16px",
                  md: "16px",
                  lg: "16px",
                },
              }}
            >
              View all Reviews
            </Typography>
          </Stack>
        </Box>
      </StyledDiv>
    </Box>
  );
}

export default Review;
