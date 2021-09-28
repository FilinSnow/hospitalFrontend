import React from "react";
import {Redirect} from "react-router";


const AuthHOC = (Component) => {
  
  const token = JSON.parse(localStorage.getItem('token'));
  const showComponent = (props) => {
    console.log(props);
    if (token) {
      return <Component {...props} />
    }
    return <Redirect to='/login'/>
  }
  return showComponent
}


export default AuthHOC;