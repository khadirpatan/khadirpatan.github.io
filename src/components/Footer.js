import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    width: "100%",
    backgroundColor: "#242424",
    position: "relative",
    bottom: "0",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px"
    }
  },
  lightWeight: {
    fontWeight: "550",
    color: "white"
  },
  noUnderline: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
      color: "rgb(146, 144, 248)"
    }
  },
  marginLeft15: {
    marginLeft: "15px"
  },
  avatar: {
    backgroundColor: "#858585"
  }
}));
const Footer = props => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footer}>
        <List className={classes.lightWeight}>
          <ListItem>
            <Avatar className={classes.avatar}>
              <i className="material-icons" style={{ fontSize: "28px" }}>
                place
              </i>
            </Avatar>

            <Typography variant="body2" className={classes.marginLeft15}>
              Rammurthy Nagar, <br></br>Bangalore , India
            </Typography>
          </ListItem>
          <ListItem>
            <Avatar className={classes.avatar}>
              <i className="material-icons" style={{ fontSize: "28px" }}>
                phone
              </i>
            </Avatar>
            <Typography variant="body2" className={classes.marginLeft15}>
              +91 8985343998
            </Typography>
          </ListItem>

          <ListItem>
            <Avatar className={classes.avatar}>
              <i className="material-icons" style={{ fontSize: "28px" }}>
                mail
              </i>
            </Avatar>
            <a
              href="mailto:khadirpatan1994@gmail.com"
              className={classes.noUnderline}
            >
              <Typography variant="body2" className={classes.marginLeft15}>
                khadirpatan1994@gmail.com
              </Typography>
            </a>
          </ListItem>
        </List>
        <div style={{ borderTop: "1px solid lightgrey", padding: "10px 0px" }}>
          <Typography
            align="center"
            variant="body2"
            className={classes.lightWeight}
          >
            Copyrights &copy; 2019 Khadir Patan
          </Typography>
        </div>
      </div>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
