import { Grid, Stack, Typography } from "@mui/material";
import "../../assets/common.css";
import EventCards from "../../components/event-card/EventCard";
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";
import "./Event.module.css";

const Event = () => {
  const { eventData } = useContext(EventContext);
  console.log(eventData, "bdwhx");
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
      <Typography
        variant="title"
        sx={{
          fontSize: {
            xs: "25px",
            sm: "30px",
            md: "40px",
            lg: "40px",
          },
        }}
      >
        Upcoming Events
      </Typography>

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
          paddingBottom: "20px",
          marginTop: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "20px",
          },
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none", //
          },
        }}
      >
        {eventData.map((item, index) => (
          <Grid
            item
            key={index}
            sx={{
              minWidth: {
                xs: "47%",
                sm: "48%",
                md: "32%",
                lg: "32%",
              },
              border: "2px solid #eeeeee",
              padding: "20px",
              borderRadius: "10px",
              marginRight: "20px",
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
