import React, { useEffect, useState } from "react";
import RegisterAuth from "./Components/RegisterAuth/RegisterAuth";


import './App.scss';
import { Redirect, Route, Switch, useHistory } from "react-router";
import MainContainer from "./Components/MainContainer/MainContainer";
import LoginAuth from "./Components/LoginAuth/LoginAuth";
import { connect } from "react-redux";


const App = (props) => {
  // console.log(props);
  const history = useHistory();
  const [flag, setFlag] = useState(false);
  const token = JSON.parse(localStorage.getItem('token'));
  useEffect(() => {
    console.log(token);
      // setFlag(!flag)
  }, [token])

  // console.log(flag);
  return (
    <div className="wrapper">
 
        {token 
        ? <Redirect to='/' />
        : <Redirect to='/login' />
      }
        <Route exact path='/' component={() =>
          <MainContainer
            setFlag={setFlag}
            flag={flag}
            token={token}
            userId={props.userId}
          />} />
        <Route path='/login' component={() => <LoginAuth setFlag={setFlag} flag={flag} token={token}/>} />
        <Route path='/register' component={() => <RegisterAuth setFlag={setFlag} flag={flag} token={token}/>} />
        {/* <Redirect to='/login' /> */}
  
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    userId: state.receptionPage.userId
  }
}

export default connect(mapStateProps, null)(App);
