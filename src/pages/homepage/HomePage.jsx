import { Box } from "@mui/material";
import About from "../../sections/about/About";
import Event from "../../sections/Events/Event";
import Menu from "../../sections/menu/Menu";
import Gallery from "../../sections/gallery/Gallery";
import MainCarousel from "../../components/main-carousel/MainCarousel";
import BookTable from "../../sections/BookTable/BookTable";
import { mainCarouseldata } from "../../data/maincarousel/maindata";
import Review from "../../sections/review/review";
import OutLets from "../../sections/outlets/outlets"

const HomePage = () => {
  return (
    <Box>
      <MainCarousel carouselinfo={mainCarouseldata}></MainCarousel>

      {/* Other sections */}
      <div id="about">
        <About />
      </div>
      <div id="outlet">
        <OutLets />
      </div>
      <div id="event">
        {/* <Event /> */}
      </div>
      <div id="table" style={{ marginTop: "50px" }}>
        <BookTable />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="review">
        <Review />
      </div>
    </Box>
  );
};

export default HomePage;
