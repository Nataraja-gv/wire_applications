/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Footer from "../footer/Footer";
import { Box, Grid, Stack, Typography } from "@mui/material";
import EventCards from "../../components/event-card/EventCard";
import { EventContext } from "../../context/tickets-context/context";
import styles from "../../sections/Events/Event.module.css";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "../nav/NavBar";
 

import NewNavBar from "../nav/NewNavBar";

export default function EventsPage() {
  const { eventData } = useContext(EventContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Box sx={{ position: "fixed", top: "0px", zIndex: 10, width: "100%"}}>
      {/* <NavBar/> */}

        <NewNavBar />
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
        }}
      >
        
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "150px"
          }}
        >
          <Typography
            variant="title"
            sx={{
              marginTop: {
                xs: "30px",
                sm: "0px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            All Upcoming Events
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Typography variant="viewAll">Sort By</Typography>
            </div>
            <div style={{ marginLeft: "5px" }}>
              <FaFilter color="#8976fd" />
            </div>
          </div>
        </Stack>

        <Grid container spacing={2} mb="50px">
          {eventData.map((item, index) => (
            <Grid
              key={index}
              item
              xs={6} // Full width on extra small screens
              sm={6} // Full width on small screens
              md={4} // 1/3 width on medium screens
              lg={4} // 1/3 width on large screens
              sx={{
                width: "100%",
                rowGap: "20px",
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <div className={styles["eventCard-section"]}>
                <EventCards image={item.EventImage} title={item.Title} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div>
        <Footer />
      </div>
    </div>
  );
}
