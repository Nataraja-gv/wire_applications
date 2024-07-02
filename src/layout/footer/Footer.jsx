import { Box, Typography, Stack } from "@mui/material";
import toco_logo from "../../assets/images/toca (2).png";
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
    <Box
      sx={{
        width: "100%",
        backgroundColor: {
          xs: "white",
          md: "white",
          sm: "white",
          lg: "white",
        },
        marginTop:{
          xs:"0px",
          sm:"50px",
          md:"50px",
          lg:"50px"

        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={2}>
        <img src={toco_logo} alt="TOCO Logo" style={{ maxWidth: "2.5rem" }} />
        <Typography variant="footerAddress">
          122/A, 105, KHB Colony, 5th Block, 1st A Cross Road, Koramangala,
          Bangalore 577001
        </Typography>
        <Typography variant="footerAddress">+91 +919538500032</Typography>
        <Typography variant="footerAddress">
          toca-koramangala@gmail.com
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        {FooterItems.map((item, index) => (
          <NavLink to={item.path} key={index}>
            <Typography
              variant="footerAddress"
              
              sx={{
                "&:hover": {
                  scale: "1.2",
                },
                marginTop:{
                    xs:"50px"
                }
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
        }}
      >
        <FacebookIcon color="primary" sx={{ fontSize: "small" }} />
        <XIcon color="primary" sx={{ fontSize: "small" }} />
        <InstagramIcon color="primary" sx={{ fontSize: "small" }} />
        <LinkedInIcon color="primary" sx={{ fontSize: "small" }} />
      </Stack>
    </Box>
  );
};

export default Footer;
