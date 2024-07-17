import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Stack from "@mui/material/Stack";
import { Box, Link, Typography } from "@mui/material";
// import { theme } from "../../theme";
import ButtonBtn from "../button/Button";
import "./MainCarousel.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../carousel-arrows/carouselarrow";

// eslint-disable-next-line react/prop-types
const MainCarousel = ({ carouselinfo = [] }) => {
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
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlay={true}
        dotListClass={"react-multi-carousel-dot-list custom-dot-list-style"}
        autoPlaySpeed={2000}
        itemClass="carousel-item-padding-40-px itemimage"
        removeArrowOnDeviceType={["", "mobile", "tablet"]}
      >
        {carouselinfo.map((item, index) => (
          <Box key={index} position="relative">
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              width="100%"
              className="carousel-images"
            />
            <Box
              sx={{
                position: "absolute",
                top: {
                  xs: "44%",
                  sm: "45%",
                  md: "50%",
                  lg: "50%",
                },
                left: "50%",
                transform: "translate(-50%, -45%)",
                textAlign: "center",
                width: "90%",
                color: "#fff",
              }}
            >
              <Typography variant="h1">{item.title}</Typography>
              <Stack
                sx={{
                  marginTop: {
                    xs: "15px",
                    md: "20px",
                    sm: "20px",
                    lg: "25px",
                  },
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Link to="/events">
                  {" "}
                  <ButtonBtn sx={{
                     
                  }} btnName={item.btnName} />{" "}
                </Link>
                <Link
                  to={item.path}
                  smooth
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-100}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <ButtonBtn sx={{
                    
                  }} btnName={item.TableName} />{" "}
                </Link>
              </Stack>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
};

export default MainCarousel;
