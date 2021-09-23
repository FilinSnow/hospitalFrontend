import React from "react";
import {Redirect} from "react-router";

const AuthHOC = (Component) => {
  const showComponent = (props) => {
    if (true) {
      return <Component {...props} />
    }
    return <Redirect to='/login'/>
  }
  return showComponent
}


export default AuthHOC;