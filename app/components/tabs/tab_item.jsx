'use strict';

import React from 'react';
import { Link } from 'react-router';

class TabItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<Link
				to={this.props.config.linkTo}
				className="c-tabs--item u-spacer-l u-spacer-r u-cushion-b"
				activeClassName="active" >
				{this.props.config.name}
			</Link>
		);
	}
};

TabItem.propTypes = {
	config: React.PropTypes.object.isRequired
};

export default TabItem;