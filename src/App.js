import React from "react";
import RegisterAuth from "./Components/RegisterAuth/RegisterAuth";
import LoginAuth from "./Components/LoginAuth/LoginAuth";


import './App.scss';
import { Route } from "react-router";
import MainContainer from "./Components/MainContainer/MainContainer";




const App = () => {

  return (
      <div className="wrapper">
         {/* <RegisterAuth /> */}
        {/* <LoginAuth /> */}
        <MainContainer />
        {/* <Route path='/' render={() => <MainContentContainer />}/> */}
        <Route path='/register' render={() => <RegisterAuth />}/>
        <Route path='/login' render={() => <LoginAuth />}/>
      </div>
  );
}

export default App;
