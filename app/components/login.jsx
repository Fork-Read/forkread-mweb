'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { isValidNumber } from '../utilities/validators';
import { sendOTPRequest } from '../actions/authenticate_actions';

const mapDispatchToProps = function(dispatch){
  return {
    requestForOTP(number, locale){
      let __payload;

      __payload = Object.assign({}, {
        number,
        locale
      });

      dispatch(sendOTPRequest(__payload));
    }
  }
}

class Login extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      number: ''
    }
  }

  onNumberChange(ev){
    let number = ev.target.value.toString().trim();

    this.setState({
      number
    });
  }

  isNumberValid(){
    return isValidNumber(this.state.number, 'en-IN');   // The second parameter is the locale
  }

  checkIfButtonEnabled(){
    return this.isNumberValid();
  }

  initiateRequestForOTP(){
    this.props.requestForOTP(this.state.number, 'en-IN');
  }

  render(){
    let isButtonEnabled, disabledButtonClass;

    isButtonEnabled = this.checkIfButtonEnabled();
    disabledButtonClass = isButtonEnabled ? '' : 'disabled';

    return (
      <div>
        <div className="c-card--full u-pos-has">
          <p className="c-card__heading">
            Enter mobile number
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="text"
              className="c-input--clear u-f-xl"
              placeholder="+91 9876543210"
              onChange={this.onNumberChange.bind(this)}
              autoFocus />
          </div>
          <div className="pure-u-22-24 c-section--large u-pos u-pos-m-b">
            <div className="u-t-center u-f-medium u-cushion-b u-pointer">
              Don't have an account? <span className="u-t-primary">SignUp</span>
            </div>
            <button
              type="submit"
              disabled={!isButtonEnabled}
              onClick={this.initiateRequestForOTP.bind(this)}
              className={`u-t-center c-btn--primary ${disabledButtonClass}`}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(null, mapDispatchToProps)(Login);