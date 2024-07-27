import { Box, Typography, Stack } from "@mui/material";
import  big_barbique from "../../assets/images1/big-barbeque.png";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const FooterItems = [
    { name: "About us", path: "" },
    { name: "Events", path: "" },
    { name: "Contact Us", path: "" },
    { name: "Gallery", path: "" },
  ];

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
         background: "#330100",

          borderRadius: "30px",
        }}
      >
        <Stack direction="column" alignItems="center" spacing={2}>
          <img src={big_barbique} alt="TOCO Logo" style={{ maxWidth: "5rem" }} />

          <Typography variant="footerAddress" sx={{ marginTop: "1rem" }}>
            122/A, 105, KHB Colony, 5th Block, 1st A Cross Road, Koramangala,
            Bangalore 577001
          </Typography>
          <Typography variant="footerAddress" sx={{ marginTop: "1rem" }}>
            +91 +919538500032
          </Typography>
          <Typography variant="footerAddress" sx={{ marginTop: "1rem" }}>
            toca-koramangala@gmail.com
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ marginTop: "0.5rem" }}>
          {FooterItems.map((item, index) => (
            <NavLink to={item.path} key={index}>
              <Typography
                variant="footerAddress"
                sx={{
                  "&:hover": {
                    scale: "1.2",
                  },
                  marginTop: "1rem",
                }}
              >
                {item.name}
              </Typography>
            </NavLink>
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            padding: "10px",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <FacebookIcon color="primary" sx={{ fontSize: 25 }} />
          <XIcon color="primary" sx={{ fontSize: 25 }} />
          <InstagramIcon color="primary" sx={{ fontSize: 25 }} />
          <LinkedInIcon color="primary" sx={{ fontSize: 25 }} />
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row"

          },
          justifyContent: "space-between",
          alignItems: "center",
          mt: "20px",
          mb: "30px",
        }}
      >
        {/* <Typography variant="copytitle">
          ©️ Copyright 2024 TicketsQue. All Rights Reserved
        </Typography>
        <Typography variant="copytitle">
          <span style={{ fontWeight: "400" }}>Powered by</span> TicketsQue{" "}
        </Typography> */}
      </Box>
    </div>
  );
};

export default Footer;
