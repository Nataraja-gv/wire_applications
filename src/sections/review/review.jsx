import { styled, useMediaQuery } from "@mui/system";
import Box from "@mui/material/Box";
import Google from "../../assets/google_logo.svg.png";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ReviewCard from "../../components/review-card/ReviewCard"; // Correct import path
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
  // borderRadius: "10px",
});

function Review() {
  const matches = useMediaQuery("(max-width:960px)");

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
        width: {
          xs: "90%",
          sm: "90%",
          md: "100%",
          lg: "100%",
        },
      }}
    >
      {matches ? (
        <Box>
          <Typography variant="title">Google Reviews</Typography>

          <Stack sx={{ marginTop: "20px" }}>
            <CarouselReview />
          </Stack>
        </Box>
      ) : (
        <StyledDiv>
          <Box
            component="img"
            src={Google}
            sx={{ width: "350px", height: "110px", marginBottom: "5px" }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "30px",
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
            <ReviewCard />
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
                padding: "8px 18px 8px 18px",
                borderRadius: "5px",
                backgroundColor: "primary.main",
                "&:hover": {
                  borderColor: "black",
                },
                fontSize: {
                  xs: "",
                  sm: "",
                  md: "",
                  lg: "",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight:"500",
                  color:"white",
                  fontSize: {
                    xs: "16px",
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
                padding: "8px 18px 8px 18px",
                borderRadius: "5px",
                backgroundColor: " rgba(255, 255, 255, 0.4)",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight:"500",
                  color:"white",
                  fontSize: {
                    xs: "16px",
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
      )}
    </Box>
  );
}

export default Review;
