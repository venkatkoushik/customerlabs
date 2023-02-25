import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";

class NotFound extends React.Component {
  render() {
    return (
      <Grid
        container
        style={{ height: "100vh", width: "100%" }}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1">404</Typography>
          <Typography variant="h2">Page not Found</Typography>
          <Link href="/">Go Home</Link>
        </Grid>
      </Grid>
    );
  }
}

export default NotFound;
