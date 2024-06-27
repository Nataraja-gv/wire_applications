import { Box, Rating, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";

const CarouselReview = () => {
  const { reviews } = useContext(EventContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3, // Change to 3 items for tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2, // Change to 2 items for mobile
    },
  };

  return (
    <Carousel
      responsive={responsive}
      customTransition="all 2s ease in"
      keyBoardControl={true}
      renderDotsOutside={true}
      swipeable={false}
      containerClass="carousel-container"
      infinite={true}
      showDots={false}
      autoPlay={true}
      dotListClass={"react-multi-carousel-dot-list custom-dot-list-style"}
      autoPlaySpeed={2000}
      itemClass="carousel-item-padding-40-px itemimage"
      removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
    >
      {reviews.map((reviewer, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
            width: "85%",
            height:"auto",
            margin :"auto",
            border:"2px solid gray"
          }}
        >
          <Stack
            sx={{
              width: "100%",
              marginBottom: "20px",
               
            }}
          >
            <Typography variant="reviewName">{reviewer.name}</Typography>
            <Typography variant="subtitle2">23 Nov 2021</Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Rating name="read-only" value={reviewer.rating} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {/* {reviewer.rating} */}
              </Typography>
            </Box>
            <Typography variant="subdescription" sx={{ mt: 1 }}>
              {reviewer.review}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselReview;
