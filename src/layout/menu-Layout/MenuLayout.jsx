import { Box } from "@mui/material";
import NewNavBar from "../nav/NewNavBar";
import Footer from "../footer/Footer";
import MenuMain from "./MenuMain";
import { Outlet } from "react-router-dom";

export const MenuLayout = () => {
  return (
    <Box>
      <NewNavBar />
      <MenuMain>
        <Outlet />
      </MenuMain>
      <Footer />
    </Box>
  );
};
