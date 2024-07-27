import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Google from "../../assets/google_logo.svg.png";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
// import ReviewCard from "../../components/review-card/ReviewCard"; // Correct import path
import CarouselReview from "../../components/review-card/CarouselReview";
import Background_image from "../../assets/images1/bigbarbeque3.png"
import { Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";

const StyledDiv = styled("div")({
  backgroundImage: `url(${Background_image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "auto",
  width: "100%",
  opacity: 0.9,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "goldenrod",
  padding: "30px",
});

function Review() {
  const { reviews } = useContext(EventContext);

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
          xs: "50px auto 20px",
          sm: "50px auto 40px",
          md: "50px auto 40px",
          lg: "50px auto 40px",
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
            margin: {
              xs: "10px auto",
              sm: "10px auto",
              md: "20px auto",
              lg: "20px auto",
            },
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

        <Grid
          container
          width="90%"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            margin: {
              xs: "20px auto",
              sm: "30px auto",
              md: "40px auto",
              lg: "50px auto",
            },
          }}
        >
          {reviews.map((item, index) => {
            return (
              <Grid
                item
                key={index}
                sx={{
                  minWidth: {
                    xs: "100%",
                    sm: "49%",
                    md: "32.5%",
                    lg: "24.3%",
                  },

                  borderRadius: "10px",
                  marginRight: "10px",
                  backgroundColor: "white",
                }}
              >
                <CarouselReview
                  key={index}
                  name={item.name}
                  rating={item.rating}
                  review={item.review}
                />
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              xs: "10px",
              sm: "20px",
              md: "30px",
              lg: "30px",
            },
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
