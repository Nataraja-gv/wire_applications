import { Grid, Stack, Typography } from "@mui/material";
import "../../assets/common.css";
import EventCards from "../../components/event-card/EventCard";
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";
import "./Event.module.css";
import { Link } from "react-router-dom";

const Event = () => {
  const { eventData } = useContext(EventContext);

  return (
    <Stack
      width="90%"
      sx={{
        margin: {
          xs: "10px auto 0px",
          sm: "10px auto 0px",
          md: "50px auto 0px",
          lg: "50px auto 20px",
        },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: {
            xs: "30px",
            sm: "20px",
            md: "20px",
            lg: "0px",
          },
        }}
      >
        <Typography
          variant="title"

        >
          Upcoming Events
        </Typography>
        <Link to="/events">
          {" "}
          <Typography variant="viewAll">View All (06)</Typography>
        </Link>
      </Stack>

      {/* gris scroll container */}
      <Grid
        container
        width="100%"
        margin="auto"
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          overflowX: "auto",
          // paddingBottom: "20px",
          marginTop: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "20px",
          },
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {eventData.map((item, index) => (
          <Grid
            item
            key={index}
            sx={{
              minWidth: {
                xs: "47.6%",
                sm: "48.6%",
                md: "32.3%",
                lg: "32.6%",
              },
              border: "2px solid #eeeeee",
              padding: {
                xs: "15px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              },
              borderRadius: "10px",
              marginRight: "10px",
              backgroundColor: "white",
            }}
          >
            <EventCards image={item.EventImage} title={item.Title} />
          </Grid>
        ))}
      </Grid>

      {/* grid container */}

      {/* <Grid container spacing={2}>
        {eventData.map((item, index) => (
          <Grid
            key={index}
            item
            xs={6} // Full width on extra small screens
            sm={6} // Full width on small screens
            md={4}  // 1/3 width on medium screens
            lg={4}  // 1/3 width on large screens
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
      </Grid> */}
    </Stack>
  );
};

export default Event;
