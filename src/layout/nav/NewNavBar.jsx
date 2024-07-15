/* eslint-disable no-unused-vars */
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import whatsapp from "../../assets/whatsapp.svg";
import "./nav.css";
import toco_logo from "../../assets/images/toca (2).png";

const navItems = [
  { name: "About us", path: "about" },
  { name: "Events", path: "event" },
  { name: "Book a Table", path: "table" },
  { name: "Menu", path: "menu" },
  { name: "Gallery", path: "gallery" },
  { name: "Reviews", path: "review" },
];

export default function NewNavBar() {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <Box sx={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "28vh",
          overflow: "hidden",
          
        }}
      >
        <svg
          viewBox="0 0 1920 892"
          style={{ width: "100%", height: "auto" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 56V150V177V870C0 882.15 9.84974 892 22 892C34.1503 892 44 882.15 44 870V227C44 199.386 66.3858 177 94 177H269C296.614 177 319 154.614 319 127V71C319 43.3858 341.386 21 369 21H1909.5C1915.3 21 1920 16.299 1920 10.5C1920 4.70101 1915.3 0 1909.5 0H319H69H21H0V21V56Z"
            fill="white"
          />
        </svg>

         
      </div>
      <div className="sideDiv"></div>
      <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/" smooth duration={500} spy={true} exact="true">
      <Box
        component="img"
        src={toco_logo}
        alt="Logo"
        sx={{
          position: "absolute",
          top: "40px",
          left: "6%",
          maxWidth: {
            xs: "3rem",
            sm: "3rem",
            md: "3rem",
            lg: "4rem",
          },
          cursor: "pointer",
        }}
      />
    </Link>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "280px",
          backgroundColor: "white",
          padding: "0 30px",
          borderRadius: "30px",
        }}
      >
        {matches ? (
          <></>
        ) : (
          // Desktop view
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
        )}
      </div>

      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "80px",
          backgroundColor: "white",
          padding: " 8px 10px",
          borderRadius: "50%",
        }}
      >
        <img src={whatsapp} alt="socialmedia" width="30px" height="30px" />
      </div>
    </Box>
  );
}
