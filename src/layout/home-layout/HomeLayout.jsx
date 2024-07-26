/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import NewNavBar from "../nav/NewNavBar";
import NavBar from "../nav/NavBar";
import HomePage from "../../pages/homepage/HomePage";
import Footer from "../footer/Footer";
import { useEffect } from "react";

const HomeLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Box sx={{ position: "fixed", top: "0px", zIndex: 10, width: "100%" }}>
        {/* <NavBar /> */}
        <NewNavBar />
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
