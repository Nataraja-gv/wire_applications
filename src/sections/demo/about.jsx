import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import about_icon from "../../assets/about/aboutImage.png";
import { useTheme } from "@mui/material/styles";
import { theme } from "../../theme";

const About = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box width="90%" sx={{ margin: "80px auto 0px", paddingBottom: "80px" }}>
      <Grid container spacing={4} direction={isMediumScreen ? "column-reverse" : "row"}>
        {/* Left Column - About Text */}
        <Grid item xs={12} sm={5} lg={6}>
          <Stack sx={{ marginTop: "10px" }}>
            <Typography variant="h1" sx={theme.typography.title}>
              About Us
            </Typography>
          </Stack>
          <Box sx={{ marginTop: "5px" }}>
            <Typography sx={theme.typography.p}>
              Welcome to [Vendor Name], your premier destination for
              extraordinary events. With years of experience in the industry,
              we specialize in creating memorable experiences that leave a
              lasting impression. Our dedicated team works tirelessly to bring
              you the best in entertainment, ensuring every event is a success.
              At [Vendor Name], we understand that every event is unique, and
              we take pride in crafting experiences that are tailored to your
              specific needs and desires. Whether you're planning an intimate
              gathering or a grand celebration, our comprehensive range of
              services ensures that every aspect of your event is meticulously
              planned and flawlessly executed. Our expertise spans across
              various types of events, including corporate functions, weddings,
              concerts, festivals, private parties, and more. We believe that
              the key to a successful event lies in the details, and our team
              pays close attention to every element, from the initial concept
              and planning stages to the final execution.
            </Typography>

            <Typography sx={theme.typography.p}>
              At [Vendor Name], we understand that every event is unique, and
              we take pride in crafting experiences that are tailored to your
              specific needs and desires. Whether you're planning an intimate
              gathering or a grand celebration, our comprehensive range of
              services ensures that every aspect of your event is meticulously
              planned and flawlessly executed.
            </Typography>

            <Typography sx={theme.typography.p}>
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
        <Grid item xs={12} sm={7} lg={6}>
          <Box
            component="img"
            src={about_icon}
            sx={{
              width: "100%",
              height: isLargeScreen ? "100%" : "auto",
              objectFit: "cover",
              borderRadius: isLargeScreen ? "10px" : "0px",
            }}
            alt="About Image"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
