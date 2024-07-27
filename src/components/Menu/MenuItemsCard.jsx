/* eslint-disable no-unused-vars */
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import starts from "../../assets/MenuImages/Images/starters.png";

export default function MenuItemsCard() {
  return (
    <Box
      sx={{
        padding: "8px",
        borderRadius: "12px",
        backgroundColor: "white",
        border: "1px solid #C0C0C0;",
      }}
    >
      <img src={starts} alt="menu-item-details" />
      <Box sx={{ marginTop: "10px" }}>
        <Typography variant="menutitle" sx={{ fontSize: "14px" }}>
          Cream of Mushroom{" "}
        </Typography>

        <Stack>
          <Typography variant="menuDescription" sx={{ marginTop: "5px" }}>
            Freshly prepared with mushroom pesto, tossed in olive oil, seasoned
            with sesme
          </Typography>
        </Stack>
        <Stack direction="row" gap="20px" sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "white",
              boxShadow: "0 0 0 1px transparent",
              border: "1px solid #C0C0C0;",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
              Veg
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
              400
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "white",
              boxShadow: "0 0 0 1px transparent",
              border: "1px solid #C0C0C0;",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
              Non-Veg
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
              400
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
