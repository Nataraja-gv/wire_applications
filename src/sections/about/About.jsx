import { Box, Grid, Stack, Typography } from "@mui/material";
import about_icon from "../../assets/about/aboutImage.png";

const About = () => {
  return (
    <Box
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
      <Grid container spacing={4}>
        {/* Left Column - About Text */}
        <Grid item xs={12} md={6} sm={12} lg={7}>
          <Stack sx={{ marginTop: "10px" }}>
            <Typography variant="title">About Us</Typography>
          </Stack>
          <Box sx={{ marginTop: "5px" }}>
            <Typography variant="h2">
              Welcome to [Vendor Name], your premier destination for
              extraordinary events. With years of experience in the industry, we
              specialize in creating memorable experiences that leave a lasting
              impression. Our dedicated team works tirelessly to bring you the
              best in entertainment, ensuring every event is a success.
            </Typography>

            <Typography variant="h2">
              At [Vendor Name], we understand that every event is unique, and we
              take pride in crafting experiences that are tailored to your
              specific needs and desires. Whether you're planning an intimate
              gathering or a grand celebration, our comprehensive range of
              services ensures that every aspect of your event is meticulously
              planned and flawlessly executed.
            </Typography>

            <Typography variant="h2">
              Our expertise spans across various types of events, including
              corporate functions, weddings, concerts, festivals, private
              parties, and more. We believe that the key to a successful event
              lies in the details, and our team pays close attention to every
              element, from the initial concept and planning stages to the final
              execution.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6} sm={12} lg={5}>
          <Box
            component="img"
            src={about_icon}
            sx={{
              width: "100%",
              height: {
                xs: "180px",
                sm: "300px",
                md: "550px",
                lg: "auto",
              },
            }}
            alt="About Image"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
