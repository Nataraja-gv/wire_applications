import { Box, styled, Typography } from "@mui/material";
import React from "react";
import menu_banner from "../../../assets/images/menuitem_banner.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function MenuItemsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const StyledDiv = styled("div")({
    position: "relative",
    backgroundImage: `url(${menu_banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
    width: "100%",
    opacity: 0.9,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // color: "goldenrod",
    overflow: "hidden",
    marginBottom: "30px",
  });
  return (
    <StyledDiv>
      <Typography variant="h1" sx={{ fontSize: "50px" }} color="primary">
        Mouthwatering Menu
      </Typography>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 } ,marginTop:"20px", border:"2px solid #C0C0C0" ,borderRadius:"5px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          sx={{
            backgroundColor:"white",
            opacity:"0.8"
          }}
        >
          <Tab label="Food Menu" />
          <Tab label="Bar Menu" />
          <Tab label="Corporate Packages" />
          <Tab label="Food Menu" />
          <Tab label="Food Menu" />
          <Tab label="Food Menu" />
          <Tab label="Food Menu" />
        </Tabs>
      </Box>
    </StyledDiv>
  );
}
