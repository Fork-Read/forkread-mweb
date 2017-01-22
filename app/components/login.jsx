'use strict';

import React from 'react';

class Login extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="u-c-full-h">
				<div className="c-card">
					<p className="c-card__heading">
						Enter mobile number
					</p>
					<div className="pure-u-1-1 c-section">
						<input type="text" className="c-input--clear" placeholder="+91 123456789" autofocus />
					</div>
					<div className="pure-u-1-1 c-section--large">
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