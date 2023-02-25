import React from "react";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Typography,
  AppBar,
  Grid,
  Divider,
  Avatar,
  IconButton,
} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// style
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    opacity: 1,
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  divider: {
    height: 30,
    alignSelf: "center",
    margin: "0px 15px",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
  },
  container: {
    padding: theme.spacing(2),
  },
  appbar: {
    width: "100%",
    boxShadow: "none"
  },
  userLogo: {
    marginRight: 15,
  },
  logoutDiv: {
    "& .MuiAvatar-root": {
      width: 20,
      height: 20,
    },
  },
  icon: {
    color: "white"
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   onLogout = ()=>{
  //     sessionStorage.clear();
  //     this.props.history.push('/login')
  //   };

  render() {
    const { classes } = this.props;
    // const location = window.location.pathname

    return (
      <div className={classes.root}>
        {/* AppBar Component in Top navar */}
        <AppBar position="static" className={classes.appbar}>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.container}
          >
            <IconButton onClick={() => (this.props?.name ? this.props?.back() : null)}><ArrowBackIosIcon className={classes.icon} fontSize="small" /></IconButton>
            <Typography color="textHeading" variant="h6">{this.props?.name ? this.props?.name : "View Audience"}</Typography>
          </Grid>
        </AppBar>
        {/* end */}
      </div >
    );
  }
}

export default withStyles(styles)(Header);
