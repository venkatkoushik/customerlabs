import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { LocalStorageKeys } from '../../utils';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../router/routes';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        marginTop: "20%"
    }
}))

export const Login = props => {

    const history = useHistory();
    const classes = useStyles();

    const onLogin = () => {
        localStorage.setItem(LocalStorageKeys.authToken, "authtoken");
        history.push(Routes.home);
    }

    return <div className={classes.root}>
        <Typography variant="body1">
            Your are not logged in!!!
        </Typography>
        <Button
            variant={"contained"}
            color={"primary"}
            onClick={onLogin}
        >
            LogIn
        </Button>
    </div>
}
