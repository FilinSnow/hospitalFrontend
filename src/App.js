import React from "react";
import RegisterAuth from "./Components/RegisterAuth/RegisterAuth";
import LoginAuth from "./Components/LoginAuth/LoginAuth";
import MainContent from "./Components/MainContent/MainContent";

import './App.scss';
import { Route } from "react-router";




const App = () => {
  return (
      <div className="wrapper">
         {/* <RegisterAuth /> */}
        {/* <LoginAuth /> */}
        {/*<MainContent />*/}

        <Route path='/register' render={() => <RegisterAuth />}/>
        <Route path='/login' render={() => <LoginAuth />}/>
      </div>
  );
}

export default App;
