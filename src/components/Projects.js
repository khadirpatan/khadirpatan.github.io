import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    backgroundColor: "white",
    padding: "40px 0px",
    minHeight: "60vh",
    [theme.breakpoints.down("sm")]: {
      padding: "40px  10px",
    },
  },
  hr: {
    width: "80px",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      width: "20%",
    },
  },
  skill: {
    // backgroundColor: "white",
    // margin: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 10px 1px lightgrey",
    height: "480px",
    paddingBottom: "20px",
  },
}));
const Projects = (props) => {
  const classes = useStyles();
  const projects = [
    {
      id: 1,
      name: "ShipNext ",
      description:
        "Web application for fleet owners and customers to order a shipment ,bid it and track the shipment throughout.  React , Material UI , Apollo Cleint, CSS, ES6",
      image: "shipnextOfc.png",
      url: "https://shipnext.in",
      ref: props.project1Ref,
    },

    {
      id: 2,
      name: "Whatsapp Template",
      image: "whatsaap.PNG",
      description:
        " Template of Whatsapp by just using HTML & CSS and taking care of responsiveness by using Media Queries ",
      url: "https://khadirpatan.github.io/whatsaap",
      ref: props.project2Ref,
    },
    {
      id: 3,
      name: "Movie Search App",
      description:
        "Movie serach Web application - user can search any movie listed on IMDB database, Integrated OMBD API Key using Ajax , Used Bootstrap for Responsiveness",
      image: "moviesearch.PNG",
      url: "https://khadirpatan.github.io/moviesearch",
      ref: props.project3Ref,
    },
    {
      id: 4,
      name: "Shopping Cart ",
      description:
        "A small web application for shopping, developed functionalities for adding items to the cart removing items from cart  and checkout. ",
      image: "shoppingCart.png",
      url: "https://khadirpatan.github.io/shopping-cart",
      ref: props.project4Ref,
    },

    {
      id: 6,
      name: "Portfolio ",
      description:
        "A small project about creating a Single page responsive design describing my skills using basic HTML, CSS & JS. ",
      image: "portfolio.PNG",
      url: "https://khadirpatan.github.io/",
      ref: props.project6Ref,
    },
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.projectsContainer}
    >
      <Grid item xs={12} lg={8} md={10}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            color="primary"
            style={{ opacity: "0" }}
            ref={props.projectsTitle}
          >
            {" "}
            PROJECTS
          </Typography>

          <hr
            className={classes.hr}
            style={{ opacity: "0" }}
            ref={props.projectsHr}
          />
        </Grid>
        <br />
        <Grid
          container
          // justify="center"
          alignItems="center"
          style={{ padding: "0px,10px" }}
          spacing={3}
        >
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              ref={project.ref}
              style={{ opacity: "0", }}
            >
              <Grid container>
                <Grid item xs={12} className={classes.skill}>
                  <img
                    style={{
                      width: "100%",
                      height: "200px",
                      marginBottom: "15px",
                      border: "1px solid lightgrey",
                    }}
                    src={require(`../images/${project.image}`)}
                    alt="Card"
                  />

                  <Typography variant="h6">{project.name}</Typography>
                  <Grid item xs={12} style={{ padding: "20px" }}>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ padding: "0px 20px 10px 20px" }}>
                    <Typography variant="body2">
                      <a href={project.url} style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="primary" size="small">
                          {" "}
                          Go to page
                        </Button>
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
