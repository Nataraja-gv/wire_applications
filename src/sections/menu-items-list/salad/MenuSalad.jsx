import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MenuItemsCard from "../../../components/Menu/MenuItemsCard";

export default function MenuSalad() {
  return (
    <div>
      <Stack sx={{ marginTop: "10px" }}>
        <Typography variant="title">Salad</Typography>{" "}
        {/* Change variant as needed */}
      </Stack>
      <div>
        <Grid
           
          width="100%"
          margin=" 20px auto"
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {Array.from({ length: 10 }, (_, index) => (
            <Grid
              item
              sx={{
                minWidth: {
                  xs: "46.5%",
                  sm: "31.5%",
                  md: "23.4%",
                  lg: "16%",
                },
              }}
              marginRight="10px"
              key={index}
            >
              <MenuItemsCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
