import React, { useState } from "react";
import {
  Box,
  IconButton,
  List,
  Drawer,
  ListItem,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-scroll";
import toco_logo from "../../assets/images/toca (2).png";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: "About us", path: "about" },
  { name: "Events", path: "event" },
  { name: "Book a Table", path: "table" },
  { name: "Menu", path: "menu" },
  { name: "Gallery", path: "gallery" },
  { name: "Reviews", path: "review" },
];

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery("(max-width:960px)");

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: {
          xs: "6px 20px",
          sm: "6px 51px",
          md: "6px 51px",
          lg: "6px 51px",
        },
        backgroundColor: " #FFFFFF99",  
        backdropFilter: "blur(5px)",  
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        verticalAlign: "middle",
        margin: "auto",
        height: {
          xs: "64px",
          sm: "64px",
          md: "64px",
          lg: "64px",
        },
      }}
    >
      <Link to="home" smooth duration={500} spy={true} exact="true">
        <Box
          component="img"
          src={toco_logo}
          sx={{
            maxWidth: {
              xs: "2.5rem",
              sm: "3rem",
              md: "3rem",
              lg: "3rem",
            },
          }}
        />
      </Link>
      {matches ? (
        // Mobile view
        <>
          <IconButton color="primary" onClick={handleDrawerOpen} sx={{ ml: "auto" }}>
            <MenuIcon size="large" />
          </IconButton>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={handleDrawerClose}
            ModalProps={{ disableBackdropClick: true }}
            sx={{
              backdropFilter: "blur(10px)",
              backgroundColor: "#FFFFFF99",
            }}
          >
            <Box
              sx={{
                width: "50vw",
                maxWidth: 300,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <IconButton onClick={handleDrawerClose} sx={{ alignSelf: "flex-end" }}>
                <CloseIcon />
              </IconButton>
              <List>
                {navItems.map((item, index) => (
                  <ListItem key={index} onClick={handleDrawerClose} disableGutters>
                    <Link
                      to={item.path}
                      smooth
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-100}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemText primary={item.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // Desktop view
        <Stack direction="row" spacing={4}>
          {navItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              smooth
              duration={500}
              spy={true}
              exact="true"
              offset={-150}
            >
              <Typography variant="navtitle">{item.name}</Typography>
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Navbar;
