import { theme } from "../../theme.js"; // Adjust the import path as necessary
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import "./book.css";
const Book = () => {
  return (
    <Box
      sx={{
        width:"100%",
        padding: "20px",
        borderRadius: "10px",
        display: "inline-block",
        border: "1px solid #FFFFFF",
        backgroundColor: " #FFFFFFB2",
        opacity:"1"
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
            Book a Table
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontWeight: "600",
              fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                },
            }}
          >
            Our friendly team would love to hear from you.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography   variant="labeltext" >First name</Typography>
           
          <TextField
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
            id="firstname"
            size="small"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography  variant="labeltext">Last name</Typography>
          <TextField
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
            size="small"
            id="lastname"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography  variant="labeltext">Phone number</Typography>
          <TextField
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
            id="phonenumber"
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography  variant="labeltext">No. of Guests</Typography>
          <TextField
            id="number-of-guests"
            type="number"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
            variant="outlined"
            size="small"
            fullWidth
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography  variant="labeltext">Message</Typography>
          <TextField
            id="outlined-multiline-flexible"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
            multiline
            maxRows={4}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button size="large" fullWidth variant="contained" color="primary" >
            Send message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Book;
