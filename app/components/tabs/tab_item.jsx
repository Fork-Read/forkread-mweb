'use strict';

import React from 'react';
import { Link } from 'react-router';

class TabItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="c-tabs--item u-spacer-l u-spacer-r u-cushion-b">
				<Link to={this.props.config.linkTo}>
					{this.props.config.name}
				</Link>
			</div>
		);
	}
};

TabItem.propTypes = {
	config: React.PropTypes.object.isRequired
};

export default TabItem;