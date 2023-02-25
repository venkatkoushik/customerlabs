import React from "react";
import { LinearProgress } from "@material-ui/core";
import networkCall from "./networkcall";
import {
  LocalStorageKeys,
  NetWorkCallMethods,
  refreshCacheAndReload,
  semverGreaterThan,
} from "./utils";

class AppAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.checkForLatestBuild();
    this.refreshAPI();
  }

  refreshAPI = () => {};

  checkForLatestBuild = () => {
    networkCall(
      `${window.location.protocol}//${window.location.hostname}${
        window.location.port ? ":" + window.location.port : ""
      }/meta.json`,
      NetWorkCallMethods.get,
      null,
      null,
      false,
      true
    )
      .then((_) => {
        const isVersion = semverGreaterThan(
          _.data.version,
          localStorage.getItem(LocalStorageKeys.version)
        );
        localStorage.setItem(LocalStorageKeys.version, _.data.version);
        if (isVersion) {
          refreshCacheAndReload();
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  render() {
    let { loading } = this.state;

    return <>{loading ? <LinearProgress /> : this.props.children}</>;
  }
}

export default AppAuth;
