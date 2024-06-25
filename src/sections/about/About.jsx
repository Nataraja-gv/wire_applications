import { Box, Grid, Stack, Typography } from "@mui/material";
import about_icon from "../../assets/about/aboutImage.png";
import { theme } from "../../theme";

const About = () => {
  return (
    <Box width="90%" sx={{
      margin: {
        xs: "0px auto 0px",
        sm: "0px auto 0px",
        md: "0px auto 0px",
        lg: "0px auto 0px",
      }
    }}>
      <Grid container spacing={4}>
        {/* Left Column - About Text */}
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Stack sx={{ marginTop: "10px" }}>
            <Typography variant="h2" sx={{
              ...theme.typography.title,
              fontSize: {
                xs: "25px",
                sm: "30px",
                md: "40px",
                lg: "40px",
              }
            }}>
              About Us
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "5px" }}>
            <Typography sx={{
              ...theme.typography.p,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "20px",
                lg: "20px",
              },
              lineHeight: {
                xs: "28px",
                sm: "24px",
                md: "20px",
                lg: "28px",
              }
            }}>
              Welcome to [Vendor Name], your premier destination for
              extraordinary events. With years of experience in the industry,
              we specialize in creating memorable experiences that leave a
              lasting impression. Our dedicated team works tirelessly to bring
              you the best in entertainment, ensuring every event is a success.

            </Typography>

            <Typography sx={{
              ...theme.typography.p,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "20px",
                lg: "20px",
              },
              lineHeight: {
                xs: "28px",
                sm: "24px",
                md: "20px",
                lg: "28px",
              }
            }}>
              At [Vendor Name], we understand that every event is unique, and
              we take pride in crafting experiences that are tailored to your
              specific needs and desires. Whether you're planning an intimate
              gathering or a grand celebration, our comprehensive range of
              services ensures that every aspect of your event is meticulously
              planned and flawlessly executed.
            </Typography>

            <Typography sx={{
              ...theme.typography.p,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "20px",
                lg: "20px",
              },
              lineHeight: {
                xs: "28px",
                sm: "24px",
                md: "20px",
                lg: "28px",
              }
            }}>
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
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Box
            component="img"
            src={about_icon}
            sx={{
              width: "100%",
              height:{
                xs: "300px",
                sm: "500px",
                md: "100%",
                lg: "100%",
              }
               
            }}
            alt="About Image"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
