import { Box, Stack, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import toco_logo from "../../assets/images/toca (2).png";
import Typography from "@mui/material/Typography";
import { useState } from "react";

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
  const matches = useMediaQuery("(max-width: 600px)");

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
        height: "55px",
        padding: "6px 16px",
        borderRadius: "128px",
        border: "1px solid gray",
        backgroundColor: "#FFFFFF99",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "5",
      }}
    >
      <Link to="home" smooth duration={500} spy={true} exact="true">
        <Box component="img" src={toco_logo} sx={{ maxWidth: "3rem" }} />
      </Link>

      {matches ? (
        // Mobile Menu
        <>
          <IconButton
            onClick={handleDrawerOpen}
            sx={{ color: "black", ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={handleDrawerClose}
            ModalProps={{ disableBackdropClick: true }}
          >
            <Box
              sx={{
                width: "80vw",
                maxWidth: 300,
                backgroundColor: "#FFFFFF99",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <IconButton
                onClick={handleDrawerClose}
                sx={{ alignSelf: "flex-end" }}
              >
                <CloseIcon />
              </IconButton>
              <List>
                {navItems.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={handleDrawerClose}
                    disableGutters
                  >
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
        // Desktop Menu
        <Stack direction="row" spacing={4}>
          {navItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              smooth
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
              style={{ textDecoration: "none" }}
            >
              <Typography
                color="initial"
                sx={{
                  fontSize: "17px",
                  fontWeight: 400,
                  lineHeight: "51px",
                  textAlign: "left",
                  backgroundColor: "#000000",
                  color: "transparent",
                  backgroundClip: "text",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": {
                    color: "#8976fd",
                  },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Navbar;
