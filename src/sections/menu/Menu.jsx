import Box from "@mui/material/Box";
import { useContext } from "react";
import { EventContext } from "../../context/tickets-context/context";
import MenuCard from "../../components/Menu/MenuCard";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Menu = () => {
  const { MenuData } = useContext(EventContext);
  const theme = useTheme();

  return (
    <Box
      width="90%"
      sx={{
        margin: {
          xs: "50px auto 0px",
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
          marginBottom: "20px",
        }}
      >
        Menu
      </Typography>

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
          // marginTop: {
          //   xs: "20px",
          //   sm: "20px",
          //   md: "20px",
          //   lg: "20px",
          // },
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none", //
          },
        }}
      >
        {MenuData.map((menu, index) => (
          <Grid 
          sx={{
              minWidth: {
                xs: "46.5%",
                sm: "31.5%",
                md: "23.4%",
                lg: "23.8%",
              },
          }}
              marginRight= "20px"
          
           key={index}>
            <MenuCard
              image={menu.image}
              menuname={menu.menuname}
              pages={menu.pages}
            />
          </Grid>
        ))}
      </Grid>

      {/* <Grid container spacing={3} justifyContent="start">
        {MenuData.map((menu, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <MenuCard
              image={menu.image}
              menuname={menu.menuname}
              pages={menu.pages}
            />
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default Menu;
