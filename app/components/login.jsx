'use strict';

import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <div className="c-card--full u-pos-has">
          <p className="c-card__heading">
            Enter mobile number
          </p>
          <div className="pure-u-1-1 c-section">
            <input type="text" className="c-input--clear u-f-xl" placeholder="+91 123456789" autofocus />
          </div>
          <div className="pure-u-22-24 c-section--large u-pos u-pos-m-b">
            <button type="submit" className="u-t-center c-btn--primary">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    )
  }
};

export default Login;