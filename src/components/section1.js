import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  Hidden
} from "@material-ui/core";
import Background from "../images/bg1.jpg";

const useStyles = makeStyles(theme => ({
  name: {
    animation: "slideInBottom 1s ease both",
    textShadow: " 1px 1px 9px #1abc9c"
  },
  button: {
    animation: "slideInTop 1s ease both"
  },
  section1Container: {
    height: "100vh",
    backgroundImage: `url(${Background})`,

    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // background: "linear-gradient(to right, black,#474545)",
    minHeight: "100vh",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      // minHeight: "0vh",
    },
    "& li": {
      // jss-nested applies this to a child span
      fontWeight: "bold",
      position: "absolute",
      display: "block",
      listStyle: "none",
      width: "25px",
      height: "25px",
      //   borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.2)",
      margin: "20px",
      animation: "animateBg 15s linear infinite",
      bottom: "-200px"
      // jss-camel-case turns this into 'font-weight'
    },
    "& li:nth-child(1)": {
      left: "10%",
      width: "80px",
      height: "80px",
      animationDelay: "0s"
    },
    "& li:nth-child(2)": {
      left: "10%",
      width: "30px",
      height: "30px",
      animationDelay: "5.5s",
      animation: "animateBg2 15s linear infinite",
      top: "-200px"
    },
    "& li:nth-child(3)": {
      left: "20%",
      width: "120px",
      height: "120px",
      animationDelay: "5.5s"
    },
    "& li:nth-child(4)": {
      left: "20%",
      width: "50px",
      height: "50px",
      animationDelay: "2.5s",
      animation: "animateBg2 15s linear infinite",
      top: "-200px"
    },
    "& li:nth-child(5)": {
      left: "35%",
      width: "80px",
      height: "80px",
      animationDelay: "3.5s"
    },
    "& li:nth-child(6)": {
      right: "10%",
      width: "80px",
      height: "80px",
      animationDelay: "6.5s",
      animation: "animateBg2 15s linear infinite",
      top: "-200px"
    },
    "& li:nth-child(7)": {
      right: "10%",
      width: "30px",
      height: "30px",
      animationDelay: "0s"
    },
    "& li:nth-child(8)": {
      right: "20%",
      width: "120px",
      height: "120px",
      animationDelay: "2.5s",
      animation: "animateBg2 15s linear infinite",
      top: "-200px"
    },
    "& li:nth-child(9)": {
      right: "20%",
      width: "50px",
      height: "50px",
      animationDelay: "2.5s"
    },
    "& li:nth-child(10)": {
      right: "35%",
      width: "80px",
      height: "80px",
      animation: "animateBg2 15s linear infinite",
      top: "-200px",
      animationDelay: "5.5s"
    }
  }
}));
const Section1 = props => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.section1Container}
        justify="center"
        alignItems="center"
      >
        <li></li>
        <li></li>

        <li></li>

        <li></li>
        <Hidden mdDown>
          <li></li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </Hidden>

        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <Typography variant="h1" className={classes.name}>
            Khadir Patan
          </Typography>
          <br></br>

          <Typography variant="h4">
             frontend web developer - React
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            style={{ textTransform: "capitalize", position: "relative" }}
            className={classes.button}
            onClick={props.handleScrollToAbout}
          >
            <Typography variant="body2">
              Design & Develop Websites with me{" "}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Section1;
