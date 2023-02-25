import React from "react";
import { LoginSuccess } from "../../router/access";
import { LocalStorageKeys } from "../../utils";
import { Login } from './login';
import { withRouter } from 'react-router-dom';

class LoginParent extends React.Component {

    componentDidMount(){
        if(localStorage.getItem(LocalStorageKeys.authToken)){
            this.props.history.push(LoginSuccess())
        }
    }

    render() {
        return <Login />;
    }
}

export default withRouter(LoginParent);
