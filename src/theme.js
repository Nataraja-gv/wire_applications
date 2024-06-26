import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8976fd",
    },
    primary2: {
      main: "#8338EC",
    },
    primaryBlack: {
      main: "#2A2A2A",
    },
    secondary: {
      main: "#6A6A6A",
    },
    error: {
      main: "#FF2626",
    },
    success: {
      main: "#4CAF50",
    },
    background: {
      main: "#F2F8FD",
    },
    info: {
      main: "#F28505",
    },
    common: {
      black: "#2A2A2A",
      white: "#fff",
      red: red,
      green: green,
    },
    navbg: {
      main: "#FFFFFF99",
    },
  },
  breakpoints: {
    values: {
      xs: 0, // phones
      sm: 600, // tablets
      md: 960, // small desktops
      lg: 1280, // medium to large desktops
      xl: 1920, // extra large screens or very large desktops
    },
  },
  typography: {
    fontFamily: "Work Sans, sans-serif",

    navtitle: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "51px",
      backgroundColor: "#000000",
      color: "transparent",
      backgroundClip: "text",
      transition: "color 0.3s ease-in-out",
      "&:hover": {
        color: "#8976fd",
      },
      cursor: "pointer",
    },

    title: {
      display: "inline-block",
      background:
        "linear-gradient(141deg, rgba(131, 56, 236, 1) 0%, rgba(58, 134, 255, 1) 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      fontSize: "40px",
      fontWeight: "bold",
      "@media (max-width:600px)": {
        fontSize: "100px",
      },
      "@media (max-width:960px)": {
        fontSize: "30px",
      },
    },

    h2: {
      fontWeight: 500,
      fontSize: "32px",
      background: "#000000",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "justify",
      margin: "20px 0px 0px",
      "@media (max-width:1200px)": {
        fontSize: "5.5rem",
      },
      "@media (max-width:960px)": {
        fontSize: "2.0rem",
      },
      // "@media (max-width:600px)": {
      //   fontSize: "5.5rem",
      // },
      // "@media (max-width:960px)": {
      //   fontSize: "2.0rem",
      // },
    },

    h1: {
      fontSize: "50px", 
      fontWeight: 700,
      lineHeight: "normal",
      textAlign: "center",
      color: " #FFFFFF",
      // "@media (max-width:600px)": {
      //   fontSize: "5px",
      // },
      // "@media (max-width:960px)": {
      //   fontSize: "2.0rem",
      // },
    },

    subtitle2: {
      fontWeight: 600,
      fontSize: "1rem",
    },

    h3: {
      fontWeight: 600,
      fontSize: "24px",
    },

    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },

    h5: {
      fontWeight: 500,
      fontSize: "1rem",
    },

    body1: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "0.875rem",
    },

    body2: {
      fontWeight: 500,
      fontSize: "0.875rem",
    },

    caption: {
      fontFamily: "DM Sans",
      fontWeight: "400",
      fontSize: "0.85rem",
    },

    subtitle: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },

    eventh1: {
      fontSize: "25px",
      fontWeight: "bold",
      lineHeight: "normal",
      background: "#0D0D0D",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
       display:"block",
      // backgroundColor:"green"
    },

    eventtime: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "normal",
      background: "#0D0D0D",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      display:"block"

    },

    onWardsTitle: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "normal",
      textAlign: "left",
      background: "#0D0D0D",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      display:"block"

    },
  },

  carouselImages: {
    width: "100%",
  },
});
