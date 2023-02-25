import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  TopNavBar,
  SideNavBar
} from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%"
  },
  content: {
    width: '100%',
    height: 'calc(100% - 64px)',
    overflow: "auto",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 56
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
  },
  topNavbar: {
  },
  sideNavbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));


const withNavBars = (Component) => (props) => {
  const classes = useStyles({ props });

  return (
    <div className={classes.root}>
      {/* Your nav bars here */}
      <div className={classes.topNavbar}>
        <TopNavBar />
      </div>



      {/* Content */}
      <div className={classes.content}>
        <Component {...props}>{props.children}</Component>
      </div>
    </div>
  );
};

export default withNavBars;
