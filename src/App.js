import React, { useEffect, useState } from "react";
import RegisterAuth from "./Components/RegisterAuth/RegisterAuth";
import './App.scss';
import { Redirect, Route, Switch, useHistory } from "react-router";
import MainContainer from "./Components/MainContainer/MainContainer";
import LoginAuth from "./Components/LoginAuth/LoginAuth";
import { connect } from "react-redux";

const App = (props) => {
  const [flag, setFlag] = useState(false);
  const token = localStorage.getItem('token');

  return (
    <div className="wrapper">
      <Route exact path='/' component={() =>
        <MainContainer
          token={token}
          setFlag={setFlag}
          flag={flag}
          userId={props.userId}
        />} />
      <Route path='/login' component={() => <LoginAuth setFlag={setFlag} flag={flag} />} />
      <Route path='/register' component={() => <RegisterAuth setFlag={setFlag} flag={flag} />} />
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    userId: state.receptionPage.userId
  }
};

export default connect(mapStateProps, null)(App);
