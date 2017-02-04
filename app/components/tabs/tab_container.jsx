'use strict';

import React from 'react';

import TabItemList from './tab_item_list.jsx';

class TabContainer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return (
			<div className="c-tabs--container">
				<TabItemList tabConfig={this.props.tabConfig} />
			</div>
		);
	}
};

TabContainer.propTypes = {
	tabConfig: React.PropTypes.array.isRequired
};

export default TabContainer;