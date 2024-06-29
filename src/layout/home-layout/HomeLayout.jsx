import Box from "@mui/material/Box";
import NavBar from "../nav/NavBar";
import HomePage from "../../pages/home/HomePage";
import Footer from "../footer/Footer";

const HomeLayout = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Sticky NavBar */}
      <Box sx={{ position: "fixed", top: "0px", zIndex: 10, width: "100%" }}>
        <NavBar />
      </Box>

      {/* Home Page Content */}
      <Box>
        <HomePage />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomeLayout;
