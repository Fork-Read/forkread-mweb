'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import InlineLoader from './inline_loader.jsx';

import { isValidNumber, isInputEmpty, isValidEmail } from '../utilities/validators';
import { initiateUserLogin } from '../actions/user_actions';

const PASSWORD_LENGTH = 7;

const mapStateToProps = function(state){
  return {
    user_login_failure: state.userReducer.user_login_failure
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    sendLoginRequest(payload){
      let __payload;

      __payload = Object.assign({}, payload);

      dispatch(initiateUserLogin(__payload));
    }
  }
}

class Login extends React.Component{
  constructor(props){
    super(props);

    this.loginData = {
      input: '',
      password: ''
    }

    this.state = {
      isNextEnabled: false,
      isLoading: false
    }
  }

  onInputChange(ev){
    let input = ev.target.value.toString().trim();

    this.loginData.input = input;

    this.checkIfNextEnabled();
  }

  onPasswordChange(ev){
    this.loginData.password = ev.target.value.toString();

    this.checkIfNextEnabled();
  }

  checkIfNextEnabled(){
    let __isValid;

    __isValid = isValidNumber(this.loginData.input, 'en-IN') || isValidEmail(this.loginData.input);
    __isValid = __isValid && !isInputEmpty(this.loginData.password);
    __isValid = __isValid && this.loginData.password.length >= PASSWORD_LENGTH;

    this.setState({
      isNextEnabled: __isValid
    });
  }

  initiateRequestForOTP(){
    this.props.sendLoginRequest(this.loginData);
    this.showLoader();
  }

  hideLoader(){
    this.setState({
      isLoading: false
    });
  }

  showLoader(){
    this.setState({
      isLoading: true
    });
  }

  getButtonDetails(){
    let __buttonDetails;

    __buttonDetails = {
      isDisabled: false,
      disabledClass: '',
      innerLayout: (<span>Login</span>)
    };

    if(!this.state.isNextEnabled){
      __buttonDetails.isDisabled = true;
      __buttonDetails.disabledClass = 'disabled';
    }

    if(this.state.isLoading && !this.props.user_login_failure){
      __buttonDetails.innerLayout = (<InlineLoader />);
    }

    return __buttonDetails;
  }

  getErrorLayout(){
    let __layout = null;

    if(this.props.user_login_failure){
      __layout = (
        <div className="u-t-center u-f-medium u-cushion-b u-t-error">
          {this.props.user_login_failure.msg}
        </div>
      );
    }

    return __layout;
  }

  render(){
    let __buttonDetails;

    __buttonDetails = this.getButtonDetails();

    return (
      <div>
        <div className="c-card--full u-pos-has">
          <p className="c-card__heading">
            Enter mobile/email
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="text"
              className="c-input--clear u-f-xl"
              placeholder="+91 9876543210"
              onChange={this.onInputChange.bind(this)}
              autoFocus />
          </div>
          <p className="c-card__heading">
            Enter password
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="password"
              className="c-input--clear u-f-xl"
              placeholder="password"
              onChange={this.onPasswordChange.bind(this)} />
          </div>
          <div className="pure-u-22-24 c-section--large u-pos u-pos-m-b">
            {this.getErrorLayout()}
            <div className="u-t-center u-f-medium u-cushion-b u-pointer">
              Don't have an account?
              <Link to="/signup">
                <span className="u-t-primary"> SignUp </span>
              </Link>
            </div>
            <button
              type="submit"
              disabled={__buttonDetails.isDisabled}
              onClick={this.initiateRequestForOTP.bind(this)}
              className={`u-t-center c-btn--primary ${__buttonDetails.disabledClass}`}>
              {__buttonDetails.innerLayout}
            </button>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);




