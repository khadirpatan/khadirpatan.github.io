import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: "45px",
    cursor: "pointer",
    lineHeight: "1",
    // border: "1px solid #f5f5f5",
    boxShadow: "2px 2px 10px 1px #f5f5f5",

    transition: "transform 0.3s",
    color: theme.palette.primary.main,
    "&:hover": {
      transform: `scale(1.5)`
    }
  }
}));
const Arrows = props => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} style={{ textAlign: "right", padding: "20px" }}>
        <i
          className={`material-icons ${classes.icon}`}
          onClick={props.handleScrollToHome}
        >
          {" "}
          keyboard_arrow_up
        </i>
        <br></br>
        <i
          className={`material-icons ${classes.icon}`}
          onClick={props.handleScrollToKeyskills}
        >
          {" "}
          keyboard_arrow_down
        </i>
      </Grid>
    </Grid>
  );
};

export default Arrows;
