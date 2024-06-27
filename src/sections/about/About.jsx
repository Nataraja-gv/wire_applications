import { Box, Grid, Stack, Typography } from "@mui/material";
import about_icon from "../../assets/about/aboutImage.png";
import { theme } from "../../theme";

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
              About Us
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "5px" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "16px",
                  lg: "16px",
                },
                lineHeight: {
                  xs: "20px",
                  sm: "24px",
                  md: "20px",
                  lg: "28px",
                },
              }}
            >
              Welcome to [Vendor Name], your premier destination for
              extraordinary events. With years of experience in the industry, we
              specialize in creating memorable experiences that leave a lasting
              impression. Our dedicated team works tirelessly to bring you the
              best in entertainment, ensuring every event is a success.
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "14px",

                  sm: "16px",
                  md: "16px",
                  lg: "16px",
                },
                lineHeight: {
                  xs: "20px",
                  sm: "24px",
                  md: "24px",
                  lg: "28px",
                },
              }}
            >
              At [Vendor Name], we understand that every event is unique, and we
              take pride in crafting experiences that are tailored to your
              specific needs and desires. Whether you're planning an intimate
              gathering or a grand celebration, our comprehensive range of
              services ensures that every aspect of your event is meticulously
              planned and flawlessly executed.
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "16px",
                  lg: "16px",
                },
                lineHeight: {
                  xs: "20px",
                  sm: "24px",
                  md: "24px",
                  lg: "28px",
                },
              }}
            >
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
                xs: "200px",
                sm: "400px",
                md: "85%",
                lg: "90%",
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
