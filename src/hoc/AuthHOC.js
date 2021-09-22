import React from "react";
import { Redirect } from "react-router";
import LoginAuth from "../Components/LoginAuth/LoginAuth";
import RegisterAuth from "../Components/RegisterAuth/RegisterAuth";

const AuthHOC = (Component) => {
    const showComponent = (props) => {
        // console.log(props);
        // console.log(window.location);
        // if(window.location.pathname === '/login') {
        //     <LoginAuth />
        // }
        // else if(window.location.pathname === '/register') {
        //     <RegisterAuth />
        // }
        if (true) {
            return <Component {...props} />
        }

        return <Redirect to='/login' />
    }
    return showComponent
}



export default AuthHOC;