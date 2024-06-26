import { Box } from "@mui/material";
import Webtickettitle from "../../sections/webticket-title/webtickettitle";
import About from "../../sections/about/About";
import Event from "../../sections/Events/Event";
import Menu from "../../sections/menu/Menu";
import Gallery from "../../sections/gallery/Gallery";
import Review from "../../sections/review/review";
import Table from "../../sections/Table/Table";

const HomePage = () => {
  return (
    <Box>
      <Webtickettitle />
      <div id="about">
        <About />
      </div>
      <div id="event">
        <Event />
      </div>
      <div id="table" style={{marginTop:"50px"}}>
        <Table />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="review">
        {/* <Review /> */}
      </div>
    </Box>
  );
};

export default HomePage;
