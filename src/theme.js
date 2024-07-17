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
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "45px",
      background: "black",
      // background: "black",

      color: "transparent",
      backgroundClip: "text",
      transition: "color 0.3s ease-in-out",
      "&:hover": {
        color: "#8976fd",
      },
      cursor: "pointer",
    },

    copytitle: {
      fontFamily: " Work Sans",
      fontSize: "12px",
      fontWeight: " 700",
      lineHeight: "25.6px",
      textAlign: "center",
      color: "#0D0D0D"
    },

    title: {
      display: "inline-block",
      background:
        "linear-gradient(141deg, rgba(131, 56, 236, 1) 0%, rgba(58, 134, 255, 1) 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      fontSize: "30px",
      fontWeight: "bold",
      "@media (max-width:600px)": {
        fontSize: "25px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "30px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "30px",
      },
    },

    viewAll: {
      fontSize: "18px",
      fontWeight: "500",
      background:
        "linear-gradient(141deg, rgba(131, 56, 236, 1) 0%, rgba(58, 134, 255, 1) 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      "@media (max-width:600px)": {
        display: "none",
        // fontSize: "25px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        display: "none",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "18px",
      },
    },

    h2: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "28px",
      background: "#000000",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "justify",
      wordSpacing: "0px",
      margin: "20px 0px 0px",
      "@media (max-width:600px)": {
        fontSize: "14px",
        lineHeight: "20px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "16px",
        lineHeight: "20px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },

    h1: {
      fontSize: "45px",
      fontWeight: 700,
      lineHeight: "normal",
      textAlign: "center",
      color: " #FFFFFF",
      "@media (max-width:600px)": {
        fontSize: "20px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "30px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "45px",
      },
    },

    caption: {
      fontFamily: "DM Sans",
      fontWeight: "400",
      fontSize: "0.85rem",
      // "@media (max-width:600px)": {
      //   fontSize: "0.6rem",
      // },
    },

    labeltext: {
      fontSize: "15px",
      fontWeight: "500",
      color: "black",
    },

    menutitle: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      textWrap: "nowrap",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#000000",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "16px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      color: "gray",
    },

    reviewName: {
      fontSize: "20px",
      textWrap: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontWeight: "600",
    },

    subtitle2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "normal",
    },
    subdescription: {
      fontSize: "12px",
      lineHeight: "normal",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textAlign: "justify",
      wordSpacing: "0px",
    },
    reviewDescription: {
      fontSize: "16px",
      color: "black",
      fontFamily: "Work Sans, sans-serif",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textAlign: "justify",
    },

    footerAddress: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "20px",
      textAlign: "center",
      width: "350px",
      color: "#0D0D0D",

      "@media (max-width:600px)": {
        fontSize: "14px",
        lineHeight: "18px",
        width: "80%",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "16px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "16px",
      },
    },

    booksubtitle: {
      fontWeight: 600,
      fontSize: "14px",
      color: "black",
      display: "block",
      "@media (max-width:600px)": {
        fontSize: "10px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "14px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "14px",
      },
    },

    moreImage: {
      fontSize: "20px",
      fontWeight: "500",
      "@media (max-width:600px)": {
        fontSize: "10px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "14px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "14px",
      },
    },

    // h4: {
    //   fontWeight: 600,
    //   fontSize: "1.25rem",
    // },

    // h5: {
    //   fontWeight: 500,
    //   fontSize: "1rem",
    // },

    // body1: {
    //   fontFamily: "Poppins",
    //   fontWeight: 400,
    //   fontSize: "0.875rem",
    // },

    // body2: {
    //   fontWeight: 500,
    //   fontSize: "0.875rem",
    // },

    // caption: {
    //   fontFamily: "DM Sans",
    //   fontWeight: "400",
    //   fontSize: "0.85rem",
    // },

    eventh1: {
      fontSize: "25px",
      fontWeight: "bold",
      lineHeight: "normal",
      background: "#0D0D0D",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
      display: "block",
      // backgroundColor:"green"
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "20px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "20px",
      },
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
      display: "block",
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "16px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "14px",
      },
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
      display: "block",
      "@media (max-width:600px)": {
        fontSize: "16px",
        marginTop: "5px",
      },
      "@media (min-width:601px)and (max-width:960px)": {
        fontSize: "22px",
        marginTop: "5px",
      },

      "@media (min-width:961px)and (max-width:1260px)": {
        fontSize: "20px",
        marginTop: "5px",
      },
    },
  },

  carouselImages: {
    width: "100%",
  },

  components: {
    fontFamily: "Work Sans, sans-serif",
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            padding: "6px 10px 6px 10px",
            gap: "4px",
            height: "44px",
            fontSize: "1rem",
            fontFamily: "Poppins ",
            fontWeight: 600,
            alignContent: "center",
            // "@media (max-width:600px)": {
            //   fontSize: "0.6rem",
            //   height: "28px",
            //   padding: "5px 8px 5px 8px",
            // },
            // "@media (max-width:960px)": {
            //   fontSize: "0.8rem",
            //   height: "35px",
            //   padding: "7px 10px 7px 10px",
            // },
          }),
          ...(ownerState.size === "medium" && {
            fontSize: "15px",
            fontWeight: "600",
            alignContent: "center",
            textTransform: "capitalize",
            gap: "8px",
            border: "1px solid #765c92",
            opacity: 1,
            padding: "8px 30px",
             

            "@media (max-width:600px)": {
              fontSize: "10px",
              // width: "150px",
              // height: "30px",
              padding: "5px 10px",
            },
            "@media (min-width:601px) and  (max-width:960px)": {
              fontSize: "20px",
              width: "200px",
              height: "50px",
              padding: "8px 20px",
            },

            "@media (min-width:961px) and  (max-width:1260px)": {
              fontSize: "20px",
              width: "250px",
              height: "60px",
              md: "10px 25px",
            },
          }),
          ...(ownerState.size === "small" && {
            fontSize: "15px",
            fontWeight: "600",
            alignContent: "center",
            textTransform: "capitalize",
            // width: "230px",
            // height: "55px",
            gap: "8px",
            border: "1px solid",
            opacity: 1,
            padding: "8px 30px",

            "@media (max-width:600px)": {
              fontSize: "14px",
              width: "150px",
              height: "40px",
              padding: "0px 0px",
            },
            "@media (min-width:601px) and  (max-width:960px)": {
              fontSize: "20px",
              width: "200px",
              height: "50px",
              padding: "8px 20px",
            },

            "@media (min-width:961px) and  (max-width:1260px)": {
              fontSize: "20px",
              width: "250px",
              height: "60px",
              md: "10px 25px",
            },
          }),

        }),
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "small" && {
            backgroundcolor: "white",
            height: "auto",
            borderRadius: "0px",
            padding: "0px"
          }),
        }),
      },
    },
  },
});
