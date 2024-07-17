/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Box, Drawer, IconButton, List, ListItem, ListItemText, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";
import whatsapp from "../../assets/whatsapp.svg";
import "./nav.css";
import toco_logo from "../../assets/images/toca (2).png";
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

export default function NewNavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery("(max-width:960px)");

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  return (
    <Box sx={{ position: "relative" }}>
      {matches ? (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "64px",
            borderBottom: "2px solid #d3d3d3",
            position: "fixed",
            top: 0,
            zIndex: 10,
            padding: "6px 20px",

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

          {/* // Mobile view */}
          <>
            <IconButton
              color="primary"
              onClick={handleDrawerOpen}
              sx={{ ml: "auto" }}
            >
              <MenuIcon size="large" />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={handleDrawerClose}
              sx={{
                "& .MuiDrawer-paper": {
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  width: "50vw",
                  maxWidth: 300,
                },
              }}
            >
              <Box
                sx={{
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
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <ListItemText primary={item.name} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        </Box>
      ) : (
        <Box>
          <div className="topDiv"></div>



          <div className="BoxDiv" style={{ position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/" smooth duration={500} spy={true} exact="true">
                <Box
                  component="img"
                  src={toco_logo}
                  alt="Logo"
                  sx={{
                    position: "absolute",
                    left: "40%",
                    top: "35px",
                    maxWidth: {
                      xs: "3rem",
                      sm: "3rem",
                      md: "3rem",
                      lg: "4rem",
                    },
                    cursor: "pointer",
                    display: "block",
                    margin: "auto",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="sideDiv"></div>
          <div className="curve1"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 50V50.005L50 50V0H49.995H0V49.995C0.000660409 43.4323 1.29326 36.9339 3.8041 30.8705C6.31622 24.8039 9.99864 19.2916 14.6411 14.6482C19.2836 10.0048 24.7952 6.32129 30.8612 3.80795C36.9272 1.2946 43.4289 0.00066072 49.995 0L50 50H0Z" fill="white" />
          </svg>
          </div>

          <div className="curve2"><svg width="50" height="50" viewBox="0 0 50 50" fill="" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 50V50.005L50 50V0H49.995H0V49.995C0.000660409 43.4323 1.29326 36.9339 3.8041 30.8705C6.31622 24.8039 9.99864 19.2916 14.6411 14.6482C19.2836 10.0048 24.7952 6.32129 30.8612 3.80795C36.9272 1.2946 43.4289 0.00066072 49.995 0L50 50H0Z" fill="white" />
          </svg>
          </div>


          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "280px",
              backgroundColor: "white",
              padding: "0 30px",
              borderRadius: "30px",
              border: " 1px solid #E4E5E7"
              // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            }}
          >

            {/* // Desktop view */}
            <Stack direction="row" spacing={3}>
              {navItems.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  smooth={true}
                  duration={500}
                  offset={-130}
                >
                  <Typography variant="navtitle">{item.name}</Typography>
                </Link>
              ))}
            </Stack>

          </div>

          <Box
            sx={{
              position: "absolute",
              top: "50px",
              right: "80px",
              backgroundColor: "white",
              padding: " 8px 10px",
              borderRadius: "50%",
              border: "1px solid #E4E5E7",
              display: {
                xs: "none",
                sm: "none",
                md:"block",
                lg:"block"
              }
            }}
          >
            <img src={whatsapp} alt="socialmedia" width="30px" height="30px" />
          </Box>
        </Box>
      )
      }
    </Box >




  );
}
