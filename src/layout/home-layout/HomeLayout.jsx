
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MainCarousel from "../../components/main-carousel/MainCarousel";
import NavBar from "../nav/NavBar";
import HomePage from "../../pages/home/HomePage";
import Footer from "../footer/Footer";
import pub1 from "../../assets/caroursel/Images/slider1.png";
import pub2 from "../../assets/caroursel/Images/slider5.jpg";
import pub3 from "../../assets/caroursel/Images/slider6.jpg";
import pub4 from "../../assets/caroursel/Images/slider2.jpg";

const HomeLayout = () => {
  return (
    <Box>
      <Stack sx={{ position: "relative" }}>
        {/* Main Carousel */}
        <MainCarousel image1={pub1} image2={pub2} image3={pub3} image4={pub4} ></MainCarousel>

        {/* Absolute Positioned Stack */}
        <Stack
          sx={{
            position: "absolute",
            top: "5%",
            width: "100%",
          }}
        >
          {/* Sticky NavBar */}
          <Stack   sx={{ position: "sticky", top: 0, zIndex: 10 }}>
            <NavBar />
          </Stack>

          {/* Home Page Content */}
          <HomePage />

          {/* Footer */}
          <Footer />
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeLayout;
