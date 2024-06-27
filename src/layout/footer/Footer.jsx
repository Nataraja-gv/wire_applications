import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import toco_logo from "../../assets/images/toca (2).png";
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                backgroundColor: "white",
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <Stack direction="column" alignItems="center" spacing={2}>
                <img src={toco_logo} alt="TOCO Logo" style={{ maxWidth: "2.5rem" }} />
                <Typography sx={{  fontSize: 16, fontWeight: 300, lineHeight: "25.6px", textAlign: "center" ,width:"350px" }}>
                    122/A, 105, KHB Colony, 5th Block, 1st A Cross Road, Koramangala, Bangalore 577001
                </Typography>
                <Typography sx={{   fontSize: 16, fontWeight: 300, lineHeight: "25.6px", textAlign: "center" }}>
                    +91 +919538500032
                </Typography>
                <Typography sx={{   fontSize: 16, fontWeight: 300, lineHeight: "25.6px", textAlign: "center" }}>
                    toca-koramangala@gmail.com
                </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
                {FooterItems.map((item, index) => (
                    <NavLink to={item.path} key={index}>
                        <Typography
                            variant="body1"
                            sx={{
                               
                                fontSize: "16px",
                                fontWeight: 400,
                                lineHeight: "18.77px",
                                color: "#000000",
                                // background: "linear-gradient(141deg, rgba(131, 56, 236, 1) 0%, rgba(58, 134, 255, 1) 100%)",
                                // WebkitBackgroundClip: "text",
                                // WebkitTextFillColor: "transparent",
                                // width: "fit-content",
                                // transition: "background-position 0.3s",
                                "&:hover": {
                                    
                                     scale:"1.2"
                                },
                            }}
                        >
                            {item.name}
                        </Typography>
                    </NavLink>
                ))}
            </Stack>
            <Stack direction="row" spacing={2} sx={{ padding: "10px", borderRadius: "5px", alignItems: "center", justifyContent: "center", }}>
                <FacebookIcon color='primary' sx={{ fontSize: "small",   }} />
                <XIcon color='primary' sx={{ fontSize: "small" }} />
                <InstagramIcon color='primary' sx={{ fontSize: "small", }} />
                <LinkedInIcon color='primary' sx={{ fontSize: "small",}} />
            </Stack>
        </Box>
    );
}

export default Footer;
