import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  keyskillContainer: {
    // minHeight: "100vh",
    padding: "40px 0px",
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.down("sm")]: {
      padding: "40px  10px"
    }
  },
  hr: {
    width: "80px",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      width: "20%"
    }
  },
  skill: {
    backgroundColor: "white",
    // margin: "10px",
    textAlign: "center",
    padding: "20px"
  },
  mobileSkill: {
    backgroundColor: "white",
    // margin: "10px",
    // textAlign: "center",
    padding: "10px 20px"
  },
  keySkillIcon: {
    height: "40px",
    width: "40px",
    marginBottom: "12px",
    transition: "transform 0.5s",
    "&:hover": {
      transform: `scale(1.5)`
    }
  }
}));
const Keyskills = props => {
  const classes = useStyles();

  const skills = [
    "React",
    "JavaScript",
    "ES6",
    "HTML",
    "CSS",
    "Material-ui",
    "BootStrap",
    "ApolloClient",
    "GraphQL",
    "Node",
    "Jquery",
    "MongoDB"
  ];

  // const getSkillsForMobile = () => {
  //   return (
  //     <Grid
  //       container
  //       justify="center"
  //       alignItems="center"
  //       style={{ padding: "35px,0px" }}
  //     >
  //       {skills.map((item, index) => (
  //         <Grid item xs={12} key={index}>
  //           <Grid container>
  //             <Grid item xs={12} className={classes.mobileSkill}>
  //               <img
  //                 src={require(`../images/${item.toLowerCase()}.png`)}
  //                 className={classes.keySkillIcon}
  //                 alt=""
  //               />{" "}
  //               &nbsp;&nbsp;&nbsp;&nbsp;
  //               <Typography variant="h6" display="inline">
  //                 {item}
  //               </Typography>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   );
  // };
  return (
    <Grid
      container
      justify="center"
      className={classes.keyskillContainer}
      ref={props.keyskillRef}
      style={{ opacity: "0" }}
    >
      <Grid
        item
        xs={12}
        lg={9}
        md={10}
        style={{ opacity: "0" }}
        ref={props.keySkillEachRef}
      >
        {/* <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h6" color="primary">
            {" "}
            Skill set{" "}
          </Typography>
        </Grid>
        <br></br> */}

        {/* <Hidden lgUp>{getSkillsForMobile()}</Hidden> */}
        {/* <Hidden mdDown> */}
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ padding: "20px,0px" }}
          spacing={3}
        >
          {skills.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Grid container>
                <Grid item xs={12} className={classes.skill}>
                  <img
                    src={require(`../images/${item.toLowerCase()}.png`)}
                    className={classes.keySkillIcon}
                    alt=""
                  />
                  <br></br>
                  <Typography variant="h6">{item}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        {/* </Hidden> */}
      </Grid>
    </Grid>
  );
};

export default Keyskills;
