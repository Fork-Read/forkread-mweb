'use strict';

import React from 'react';

import { isValidNumber, isValidEmail, isInputEmpty } from '../utilities/validators';

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
			isNextEnabled: false
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

		this.setState({
			isNextEnabled: __isValid
		});
	}

	render(){
		let disabledButtonClass;

		disabledButtonClass = this.state.isNextEnabled ? '' : 'disabled';

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
              placeholder="password"
              onChange={this.onInputChange.bind(this, 'password')} />
          </div>
          <div className="pure-u-22-24 c-section--large u-pos u-pos-m-b">
            <div className="u-t-center u-f-medium u-cushion-b u-pointer">
              Already have a account? <span className="u-t-primary">Login</span>
            </div>
            <button
              type="submit"
              disabled={!this.state.isNextEnabled}
              className={`u-t-center c-btn--primary ${disabledButtonClass}`}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
		)
	}
};

export default Signup;