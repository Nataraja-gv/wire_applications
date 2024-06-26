import { Box } from "@mui/material";
import About from "../../sections/about/About";
import Event from "../../sections/Events/Event";
import Menu from "../../sections/menu/Menu";
import Gallery from "../../sections/gallery/Gallery";
import MainCarousel from "../../components/main-carousel/MainCarousel";
import Table from "../../sections/Table/Table";
import { mainCarouseldata } from "../../components/main-carousel/maindata";

const HomePage = () => {
  return (
    <Box>
      <MainCarousel carouselinfo={mainCarouseldata}></MainCarousel>

      {/* Other sections */}
      <div id="about">
        <About />
      </div>
      <div id="event">
        <Event />
      </div>
      <div id="table" style={{ marginTop: "50px" }}>
        <Table />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </Box>
  );
};

export default HomePage;
