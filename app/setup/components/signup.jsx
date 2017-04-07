'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import InlineLoader from '../../common/components/inline_loader.jsx';

import { isValidNumber, isValidEmail, isInputEmpty } from '../../utilities/validators';
import { createUserRequest } from '../../actions/user_actions';

const PASSWORD_LENGTH = 7;

const mapDispatchToProps = function(dispatch){
  return {
    createNewUser(userData){
      let __payload;

      __payload = Object.assign({}, {
        user: userData
      });

      dispatch(createUserRequest(__payload));
    }
  }
}

const mapStateToProps = function(state){
  return {
    user_create_failure: state.userReducer.user_create_failure
  };
}

class Signup extends React.Component{
	constructor(props){
		super(props);

		this.userData = {
			name: '',
			email: '',
			password: '',
			number: ''
		};

		this.state = {
			isNextEnabled: false,
      isLoading: false
		}
	}

	onInputChange(type, ev){
		let __inputValue;

		__inputValue = ev.target.value;

		switch(type){
			case 'name':
			case 'number':
			case 'email':
				__inputValue = __inputValue.toString().trim();
				break;
		}

		this.userData[type] = __inputValue;

		this.checkIfNextEnabled();
	}

	checkIfNextEnabled(){
		let __isValid;

		__isValid = !isInputEmpty(this.userData.name);
		__isValid = __isValid && isValidEmail(this.userData.email);
		__isValid = __isValid && isValidNumber(this.userData.number, 'en-IN');
		__isValid = __isValid && !isInputEmpty(this.userData.password);
    __isValid = __isValid && this.userData.password.length >= PASSWORD_LENGTH;

		this.setState({
			isNextEnabled: __isValid
		});
	}

	initiateUserCreationRequest(){
    
    if(this.state.isLoading){
      return;
    }

		this.props.createNewUser(this.userData);
    this.showLoader();
	}

  showLoader(){
    this.setState({
      isLoading: true
    });
  }

  hideLoader(){
    this.setState({
      isLoading: false
    });
  }

  getButtonDetails(){
    let __buttonDetails;

    __buttonDetails = {
      isDisabled: false,
      disabledClass: '',
      innerLayout: (<span>Register</span>)
    };

    if(!this.state.isNextEnabled){
      __buttonDetails.isDisabled = true;
      __buttonDetails.disabledClass = 'disabled';
    }

    if(this.state.isLoading && !this.props.user_create_failure){
      __buttonDetails.innerLayout = (<InlineLoader />);
    }

    return __buttonDetails;
  }

  getErrorLayout(){
    let __layout = null;

    if(this.props.user_create_failure){
      __layout = (
        <div className="u-t-center u-f-medium u-cushion-b u-t-error">
          {this.props.user_create_failure.msg}
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
            Enter name
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="text"
              className="c-input--clear u-f-xl"
              placeholder="John Smith"
              onChange={this.onInputChange.bind(this, 'name')}
              autoFocus />
          </div>
          <p className="c-card__heading">
            Enter mobile number
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="text"
              className="c-input--clear u-f-xl"
              placeholder="+91 9876543210"
              onChange={this.onInputChange.bind(this, 'number')} />
          </div>
          <p className="c-card__heading">
            Enter email
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="email"
              className="c-input--clear u-f-xl"
              placeholder="abc@example.com"
              onChange={this.onInputChange.bind(this, 'email')} />
          </div>
          <p className="c-card__heading">
            Enter password
          </p>
          <div className="pure-u-1-1 c-section">
            <input
              type="password"
              className="c-input--clear u-f-xl"
              placeholder={`password (min. ${PASSWORD_LENGTH} characters)`}
              onChange={this.onInputChange.bind(this, 'password')} />
          </div>
          <div className="pure-u-22-24 c-section--large u-pos u-pos-m-b">
            {this.getErrorLayout()}
            <div className="u-t-center u-f-medium u-cushion-b u-pointer">
              Already have a account?
              <Link to="/login">
                <span className="u-t-primary"> Login </span>
              </Link>
            </div>
            <button
              type="submit"
              disabled={__buttonDetails.isDisabled}
              className={`u-t-center c-btn--primary ${__buttonDetails.disabledClass}`}
              onClick={this.initiateUserCreationRequest.bind(this)} >
              {__buttonDetails.innerLayout}
            </button>
          </div>
        </div>
      </div>
		)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);




