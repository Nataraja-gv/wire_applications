import { Grid, Stack, Typography } from "@mui/material";
import "../../assets/common.css";
import EventCards from "../../components/event-card/EventCard";
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";
import styles from "./Event.module.css";

const Event = () => {
  const { eventData } = useContext(EventContext);
  console.log(eventData, "eventData");

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
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "20px",
          marginTop:{
            xs:"20px",
            sm:"20px",
            md:"20px",
            lg:"20px"
          },
        }}
      >
        {eventData.map((item, index) => (
          <div key={index} className={styles["eventCard-section"]}>
            <EventCards image={item.EventImage} title={item.Title} />
          </div>
        ))}
      </Grid>
    </Stack>
  );
};

export default Event;
