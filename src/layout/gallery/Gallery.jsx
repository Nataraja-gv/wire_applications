/* eslint-disable no-unused-vars */
import { Box, Typography, Grid, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import GalleryCard from "../../components/gallery-card/GalleryCard";
import { EventContext } from "../../context/tickets-context/context";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import toco_logo from "../../assets/images/toca (2).png";
import NewNavBar from "../nav/NewNavBar";
import $ from "jquery";
import "magnific-popup/dist/magnific-popup.css";

export default function Gallery() {
  const { galleryData } = useContext(EventContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import magnificPopup
      import("magnific-popup").then(() => {
        // Initialize magnific popup
        $(".image-popup").magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box sx={{ position: "fixed", top: "0px", zIndex: 10, width: "100%" }}>
        <NewNavBar />
      </Box>
      <div style={{ width: "90%", margin: " 150px auto 40px" }}>
        <Box>
          <Typography variant="title" marginBottom="30px">
            Gallery
          </Typography>
        </Box>

        <Grid container spacing={1.5}>
          {galleryData.map((menu, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={index}
              sx={{ position: "relative" }}
            >
              <a href={menu?.img} className="image-popup" key={index} width="50px" height="50px">
                <GalleryCard Image={menu.img} />
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
