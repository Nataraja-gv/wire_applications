import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";
import { EventContext } from "../../context/tickets-context/context";
import MenuCard from "../../components/Menu/MenuCard";
import { Grid, Typography } from "@mui/material";
import $ from "jquery";
import "magnific-popup/dist/magnific-popup.css";

const Menu = () => {
  const { MenuData } = useContext(EventContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import magnificPopup
      import("magnific-popup").then(() => {
        // Initialize magnific popup
        $(".image-popup").magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      });
    }
  }, []);

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
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography variant="title" sx={{ marginBottom: "20px" }}>
          Menu
        </Typography>
      </div>

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
                lg: "24.3%",
              },
            }}
            marginRight="10px"
            key={index}
          >
            <a
              href={menu?.image}
              className="image-popup"
              key={index}
              width="50px"
              height="50px"
            >
              <MenuCard
                image={menu.image}
                menuname={menu.menuname}
                pages={menu.pages}
              />
            </a>
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
