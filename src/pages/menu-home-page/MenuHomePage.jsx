/* eslint-disable no-unused-vars */
import React from "react";
import MenuSalad from "../../sections/menu-items-list/salad/MenuSalad";
import MenuItemsTabs from "../../sections/menu-items-list/menu-items-tabs/menu_itemtabs";
import { Box } from "@mui/material";
import MenuStarters from "../../sections/menu-items-list/starters/MenuStarters";
import Specials from "../../sections/menu-items-list/specials/Specials";
import MainCourse from "../../sections/menu-items-list/main-course/MainCourse";

export default function MenuHomePage() {
  return (
    <Box>
      <MenuItemsTabs />
       <Box width="90%" margin="auto">
       <MenuStarters/>
       <MenuSalad />
       <Specials/>
       <MainCourse/>
       </Box>
    </Box>
  );
}
