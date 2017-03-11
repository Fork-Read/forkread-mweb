'use strict';

import React from 'react';

class InlineLoader extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return(
			<i className="ion-load-c ion-animate-spin"></i>
		);
	}
};

export default InlineLoader;