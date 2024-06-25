import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8976fd",
    },
  },
  breakpoints: {
        values: {
            xs: 0,     // phones
            sm: 600,   // tablets
            md: 960,   // small desktops
            lg: 1280,  // medium to large desktops
            xl: 1920,  // extra large screens or very large desktops
        },
    },

  typography: {
    h2: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "44px",
      letterSpacing: "0em",
    },
    fontFamily: [
      'Work Sans',
      'sans-serif',
    ].join(','),


    h1: {
      // fontSize: "58px",
      fontWeight: 700,
      lineHeight: "normal",
      textAlign: "center",
      background: "#FFFFFF",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "90%",
      
    
    
    },

    title: {
      display: "inline-block",
      background: "linear-gradient(141deg, rgba(131, 56, 236, 1) 0%, rgba(58, 134, 255, 1) 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      // fontSize:"40px",
      fontWeight:"bold"
    },

    menuTitle: {
      fontSize: "40px",
      fontWeight: 900,
      lineHeight: "80.46px",
      background: "linear-gradient(141deg, rgba(131, 56, 236, 1) 0%, rgba(58, 134, 255, 1) 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    p: {
      fontSize: "20px",
      fontWeight: 500,
      // lineHeight: "28px",
      background: "#000000",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      // width: "fit-content",
      textAlign: "justify",
      margin: "20px 0px 0px",
    },

    eventh1: {
      fontSize: "25px",
      fontWeight: "bold",
      lineHeight: "25.84px",
      background: "#0D0D0D",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
    },

    eventtime: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "21.11px",
      background: "#0D0D0D",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
    },

    onWardsTitle: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "28.15px",
      textAlign: "left",
      background: "#0D0D0D",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
       
    },
  },

  carouselImages: {
    width: "100%",
    // height: "600px",
  },
});
