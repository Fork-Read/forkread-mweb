'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { sendOTPRequest, sendOTPVerifyRequest, sendOTPResendRequest } from '../../actions/authenticate_actions';

const mapStateToProps = function(state){
  return {
    user: state.userReducer.user,
    otp_verification_failed: state.authenticationReducer.otp_verification_failed
  };
}

const mapDispatchToProps = function(dispatch){
  return {
    requestForOTP(number, locale){
      let __payload;

      __payload = Object.assign({}, {
        number,
        locale
      });

      dispatch(sendOTPRequest(__payload));
    },
    resendOTP(number){
      let __payload;

      __payload = Object.assign({}, {
        number
      });

      dispatch(sendOTPResendRequest(__payload));
    },
    verifyOTP(otp, number){
      let __payload;

      __payload = Object.assign({}, {
        otp,
        number
      });

      dispatch(sendOTPVerifyRequest(__payload, function(){
        browserHistory.push('/home');
      }));
    }
  }
}

class OTP extends React.Component{
	constructor(props) {
		super(props);

    this.otp = '';

    this.state = {
      isNextEnabled: false
    };
	}

  componentDidMount(){
    this.props.requestForOTP(this.props.user.number, 'en-IN');
  }

  onOTPInput(ev){
    this.otp = ev.target.value.toString().trim();

    this.checkIfNextEnabled();
  }

  checkIfNextEnabled(){
    this.setState({
      isNextEnabled: this.otp.length === 6
    });
  }

  initiateOTPVerification(){
    this.props.verifyOTP(this.otp, this.props.user.number);
  }

  initiateOTPResendRequest(){
    this.props.resendOTP(this.props.user.number);
  }

  getErrorLayout(){
    let __layout = null;

    if(this.props.otp_verification_failed){
      __layout = (
        <div className="u-t-center u-f-medium u-cushion-b u-t-error">
          {this.props.otp_verification_failed.msg}
        </div>
      );
    }

    return __layout;
  }

	render() {
    let __isNextEnabled, __disabledClass;

    __isNextEnabled = this.state.isNextEnabled;
    __disabledClass = __isNextEnabled ? '' : 'disabled';

		return(
			<div>
        <div className="c-card--full u-pos-has">
          <p className="c-card__heading">
            Enter 6 digit verification code
          </p>
          <p className="c-card__caption">
          	We have sent you a SMS with the code
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="text"
              className="c-input--clear u-f-xl"
              placeholder="Enter code"
              onChange={this.onOTPInput.bind(this)}
              autoFocus />
          </div>
          <div className="pure-u-22-24 c-section--large u-pos u-pos-m-b">
            {this.getErrorLayout()}
          	<div
              className="u-t-center u-f-medium u-cushion-b u-t-primary u-pointer"
              onClick={this.initiateOTPResendRequest.bind(this)}>
          		Resend SMS
          	</div>
            <button
              type="submit"
              disabled={!__isNextEnabled}
              className={`u-t-center c-btn--primary ${__disabledClass}`}
              onClick={this.initiateOTPVerification.bind(this)}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(OTP);




