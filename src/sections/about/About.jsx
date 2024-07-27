import { Box, Grid, Stack, Typography } from "@mui/material";
import about_icon from "../../assets/about/about_barbeque.png";

const About = () => {
  return (
    <Box
      width="90%"
      sx={{
        margin: {
          xs: "10px auto 0px",
          sm: "10px auto 0px",
          md: "50px auto 0px",
          lg: "50px auto 0px",
        },
      }}
    >
      <Stack sx={{ marginTop: "10px" }}>
        <Typography variant="title">About Us</Typography>
      </Stack>
      <Grid
        container
        spacing={4}
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        {/* Left Column - About Text */}
        <Grid item xs={12} md={6} sm={12} lg={7}>
          <Box
            sx={{
              marginTop: {
                xs: "-40px",
                sm: "5px",
                md: "5px",
                lg: "5px",
              },
            }}
          >
            <Typography variant="h2">
              Welcome to [Vendor Name], your premier destination for
              extraordinary events. With years of experience in the industry, we
              specialize in creating memorable experiences that leave a lasting
              impression. Our dedicated team works tirelessly to bring you the
              best in entertainment, ensuring every event is a successWelcome to
              The Big Barbeque, where indulgence meets culinary delight! We are
              an all-you-can-eat buffet restaurant that takes your dining
              experience to the next level. Since our opening in 2018, we have
              been dedicated to serving a wide variety of 150+ delectable
              dishes, making us a favourite destination for food enthusiasts..
            </Typography>

            <Typography variant="h2">
              Our concept revolves around offering an unlimited feast, where you
              can savour an array of mouth-watering flavours. Begin your
              gastronomic journey with our barbeque starters, expertly grilled
              and served right at your table. From there, delve into a diverse
              selection of Indian, Chinese, and continental main courses, each
              crafted with care and using the finest ingredients.
            </Typography>

            <Typography variant="h2">
              At The Big Barbeque, we strive to provide a warm and welcoming
              environment where every customer feels at home. Our team is
              dedicated to ensuring your comfort and creating an inviting
              atmosphere that sets the stage for a remarkable dining experience.
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
                xs: "308px",
                sm: "300px",
                md: "400px",
                lg: "480px",
              },
              marginTop: {
                xs: "20px",
                sm: "0px",
                md: "0px",
                lg: "0px",
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
