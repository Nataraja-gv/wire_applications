import { Box } from "@mui/material";
import NewNavBar from "../nav/NewNavBar";
import Footer from "../footer/Footer";
import MenuMain from "./MenuMain";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export const MenuLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box sx={{ position: "fixed", top: "0px", zIndex: 10, width: "100%" }}>
        {/* <NavBar /> */}

        <NewNavBar />
      </Box>
      <MenuMain>
        <Outlet />
      </MenuMain>
      <Footer />
    </div>
  );
};
