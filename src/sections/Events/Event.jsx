import { Grid, Stack, Typography } from "@mui/material";
import "../../assets/common.css";
import EventCards from "../../components/event-card/EventCard"
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";
import styles from "./Event.module.css"
import { theme } from "../../theme";
const Event = () => {
    const { eventData } = useContext(EventContext);
    console.log(eventData, "eventData");

    return (
        <Stack width="90%" margin=" 50px auto 0px"  >
            <Typography variant="h2" sx={{ ...theme.typography.title }}>
                Upcoming Events
            </Typography>
            <Grid
                sx={{
                    marginTop: "0px",
                    width: "100%",
                    display: "flex",
                    flexWrap: 'wrap',
                    rowGap: "20px",
                    marginTop: "30px"
                    

                }}>

                {eventData.map((item, index) => (


                    <div key={index} className={styles["eventCard-section"]}>
                        <EventCards Image={item.EventImage} Title={item.Title} />
                    </div>


                ))}

            </Grid>
        </Stack>
    );
}

export default Event;
