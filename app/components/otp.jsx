'use strict';

import React from 'react';

class OTP extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {

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
            <input type="text" className="c-input--clear u-f-xl" placeholder="Enter code" maxLength={6} autofocus />
          </div>
          <div className="pure-u-22-24 c-section--large u-pos u-pos-m-b">
          	<div className="u-t-center u-f-medium u-cushion-b u-t-primary u-pointer">
          		Resend SMS
          	</div>
            <button type="submit" className="u-t-center c-btn--primary">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
		);
	}
};

export default OTP;