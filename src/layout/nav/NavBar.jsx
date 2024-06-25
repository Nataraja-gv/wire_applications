import { Box, IconButton, List, Drawer, ListItem, ListItemText, Stack, useMediaQuery } from "@mui/material";
import { Link } from "react-scroll";
import toco_logo from "../../assets/images/toca (2).png";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from '@mui/material/Drawer';
import { useState } from "react";
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

  const matches = useMediaQuery("(max-width:960px)")

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box
      sx={{
        width: "92%",
        height: "55px",
        top: "32px",
        padding: "6px 51px",
        gap: "0px",
        borderRadius: "128px ",
        border: "1px solid gray",
        backgroundColor: "#FFFFFF99",
        //  backgroundColor:"white",
        opacity: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
        zIndex: "5"
      }}
    >
      <Link to="home" smooth duration={500} spy={true} exact="true">
        <Box component="img" src={toco_logo} sx={{ maxWidth: "3rem" }} />
      </Link>
      {matches ?
        //mobile view
        (<>
          <IconButton

            onClick={handleDrawerOpen}

            sx={{ color: "#8976fd", ml: "auto" }}
          >
            <MenuIcon size="medium" />
          </IconButton>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={handleDrawerClose}
            // ModalProps={{ disableBackdropClick: true }}
          >
            <Box
              sx={{
                width: "50vw",
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
              <List >
                {navItems.map((item, index) => (
                  <ListItem
                    
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
        </>) 
        
        :

        //desktop view
        (<Stack direction="row" spacing={4} >
          {navItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              smooth
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
            >
              <Typography
                color="initial"
                sx={{
                  fontSize: '17px',
                  fontWeight: 400,
                  lineHeight: '51px',
                  textAlign: 'left',
                  backgroundColor: '#000000',
                  color: 'transparent',
                  backgroundClip: 'text',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#8976fd',
                  },


                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Stack>)}
    </Box>
  );
};

export default Navbar;
