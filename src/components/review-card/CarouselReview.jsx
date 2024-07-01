import { Stack } from "@mui/material";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { EventContext } from "../../context/tickets-context/context";

 const CarouselReview = () => {
  const {reviews} =useContext(EventContext)
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
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

{reviews.map((review, index) => (
    <div key={index}>
      <p>{review.name}</p>
      <p>{review.review}</p>
      
    </div>
  ))}
      </Carousel>

    </Stack>
  );
 }
 
 export default CarouselReview;
 