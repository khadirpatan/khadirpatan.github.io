import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#1abc9c" },
    secondary: { main: "#ffa000" },
    grey: { main: "#f5f5f5" },
    error: { main: "#d50000" },
    textPrimary: { main: "#44566C" },
    textSecondary: { main: "grey" }
  },
  typography: {
    fontFamily: "Lexend Deca",
    h1: {
      fontSize: "65px",
      fontFamily: "Aclonica",
      color: "white",
      // fontWeight: "600",
      lineHeight: "80px",
      "@media (max-width:600px)": {
        fontSize: "40px",
        lineHeight: "55px"
      }
    },
    h2: {
      fontSize: "35px",
      fontWeight: "bold",
      fontFamily: "Aclonica",
      "@media (max-width:600px)": {
        fontSize: "28px"
      }
    },

    h4: {
      fontSize: "30px",
      // fontWeight: "bold",
      color: "white",

      "@media (max-width:600px)": {
        fontSize: "22px"
      }
    },
    h5: {
      fontSize: "34px",
      // fontWeight: "bold",

      "@media (max-width:600px)": {
        fontSize: "24px"
      }
    },
    h6: {
      fontSize: "24px",
      // fontWeight: "bold",
      color: "#44566C",

      "@media (max-width:600px)": {
        fontSize: "20px"
      }
    },
    body1: {
      fontSize: "13px",
      "@media (max-width:600px)": {
        fontSize: "13px"
      }
    },
    body2: {
      fontSize: "16px",
      fontWeight: 550,
      lineHeight: "1.5",
      "@media (max-width:600px)": {
        fontSize: "14px"
      }
    }
  }
});

export default theme;
