import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import myImg from "../images/myimg.jpg";
import Arrows from "./arrows.js";
const useStyles = makeStyles(theme => ({
  aboutSection: {
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px"
    }
  },
  hr: {
    width: "80px",
    height: "2px",
    opacity: "0",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      width: "20%"
    }
  },
  aboutHeading: {
    opacity: "0"
  },
  tableType: {
    padding: "15px 5px",
    borderBottom: "1px solid lightgrey"
  },
  myImg: {
    width: "320px",
    height: "320px",
    opacity: "0",
    boxShadow: "0px 3px 30px 2px lightgrey",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
      height: "280px"
    }
  },
  tableGrid: {
    padding: "30px 10px",
    opacity: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 10px",
      textAlign: "center",
      order: "2"
    }
  },
  imgGrid: {
    // padding: "20px 10px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      order: "1"
      // padding: "10px 10px"
    }
  },
  textGrid: {
    padding: "30px 10px",
    opacity: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px",

      textAlign: "center",
      order: "3"
    }
  },
  textAlignCenter: {
    textAlign: "center",
    padding: "20px"
    // backgroundColor: "white",
    // margin:"10px"
  },
  aboutTitle: {
    textAlign: "center",
    padding: "60px 0px 20px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 10px"
    }
  },
  icon: {
    textAlign: "center",
    fontSize: "45px",
    color: theme.palette.primary.main
  }
}));
const AboutMe = props => {
  const classes = useStyles();
  const aboutTable = [
    {
      left: "Name",
      right: "Khadir Patan"
    },
    {
      left: "DOB",
      right: (
        <span>
          June 2<sup>nd</sup> 1994
        </span>
      )
    },
    {
      left: "Email",
      right: "khadirpatan1994@gmail.com"
    },
    {
      left: "Mobile",
      right: "8985343998"
    },
    {
      left: "Facebook",
      right: (
        <a
          href="http://www.fb.com/khadirpatan"
          // target="_blank"
          style={{ textDecoration: "none", color: "#009ADA" }}
        >
          fb.com/khadirpatan
        </a>
      )
    }
  ];

  const advantages = [
    {
      heading: "Fast",
      description: "Websites with fast load times and lag free interaction.",
      icon: "flash_on",
      ref: props.whatToExpectRef1
    },
    {
      heading: "Responsive",
      description: "Websites with responsiveness, can work in any device.",
      icon: "phonelink",
      ref: props.whatToExpectRef2
    },
    {
      heading: "Dynamic",
      description: "Websites with dynamic content.",
      icon: "dynamic_feed",
      ref: props.whatToExpectRef3
    },
    {
      heading: "Professional",
      description: "Websites which looks professional",
      icon: "work",
      ref: props.whatToExpectRef4
    }
  ];

  return (
    <Grid
      container
      className={classes.aboutSection}
      justify="center"
      ref={props.aboutmeRef}
    >
      <Grid item xs={12} lg={10} xl={9} md={10}>
        <Grid
          item
          xs={12}
          className={classes.aboutTitle}
          // style={{ textAlign: "center", padding: "40px 10px" }}
        >
          <Typography
            variant="h2"
            color="primary"
            className={classes.aboutHeading}
            ref={props.aboutMeTitle}
          >
            ABOUT
          </Typography>
          <hr className={classes.hr} ref={props.aboutmeHrRef}></hr>
        </Grid>

        <Grid container style={{ padding: "0px 0px" }} alignItems="center">
          <Grid
            item
            xs={12}
            md={7}
            lg={4}
            className={classes.tableGrid}
            ref={props.aboutMeTable}
          >
            {aboutTable.map((item, index) => (
              <Grid container key={index} className={classes.tableType}>
                <Grid item xs={4} sm={5} style={{ textAlign: "left" }}>
                  <Typography variant="body2" color="primary">
                    {" "}
                    <strong> {item.left} : </strong>{" "}
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={7} style={{ textAlign: "right" }}>
                  <Typography variant="body2">
                    {" "}
                    <strong> {item.right} </strong>{" "}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            lg={4}
            className={classes.imgGrid}
            style={{ textAlign: "center" }}
          >
            <img
              src={myImg}
              alt="MyPic"
              className={classes.myImg}
              ref={props.myImgRef}
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            className={classes.textGrid}
            ref={props.aboutMeDes}
          >
            <Typography variant="h6" color="primary">
              Who am I ?
            </Typography>
            <br></br>
            <Typography variant="body2">
              &nbsp;A Front-End Developer for{" "}
              <a
                href="http://shipnext.in"
                // target="_blank"
                className={classes.anchor}
                style={{ textDecoration: "none", color: "#009ADA" }}
              >
                {" "}
                ShipNext
              </a>{" "}
              in Bangalore, India. I have serious passion for developing
              creative and dynamic webpages / websites with better user
              experiences. Graduated from RGUKT RKV (IIIT). Loves to read &
              learn new things.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        // alignItems="center"
        // style={{ backgroundColor: "#f5f5f5" }}
      >
        <Grid item xs={12} style={{ padding: "30px 0px", textAlign: "center" }}>
          <Typography
            variant="h6"
            color="primary"
            ref={props.whatToExpectRef}
            style={{ opacity: "0" }}
          >
            What you can expect
          </Typography>
        </Grid>
        {advantages.map((item, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm={6}
            md={3}
            lg={2}
            className={classes.textAlignCenter}
            ref={item.ref}
            style={{ opacity: "0" }}
          >
            <div
              style={{
                height: "50px",
                alignItems: "center"
              }}
            >
              <i className={`material-icons ${classes.icon}`}>{item.icon}</i>
            </div>
            <Typography variant="h6" gutterBottom>
              {" "}
              {item.heading}
            </Typography>
            <Typography variant="body2"> {item.description}</Typography>
          </Grid>
        ))}
      </Grid>
      <Arrows
        handleScrollToKeyskills={props.handleScrollToKeyskills}
        handleScrollToHome={props.handleScrollToHome}
      />
    </Grid>
  );
};

export default AboutMe;
