import React from "react";

import iconPlus from '../../img/plus.svg';

const MainContent = (props) => {
  return (
    <div className='container__auth'>
      <div className="auth__header">
        <div className="header__icon">
          <img src={iconPlus} alt="" />
        </div>
        <div className="header__title">
          <h1>Приемы</h1>
        </div>
      </div>
      <div className="container__reception">
        
      </div>
    </div>
  );
}

export default MainContent;
