'use strict';

import React from 'react';
import { map as _map } from 'lodash';

import TabItem from './tab_item.jsx';

class TabItemList extends React.Component{
	constructor(props){
		super(props);
	}

	getTabItemLayouts(){
		let itemLayouts;

		itemLayouts = _map(this.props.tabConfig, function(config, index){
			return (
				<TabItem config={config} key={index} />
			);
		});

		return itemLayouts;
	}

	render(){
		let tabItemLayouts;

		tabItemLayouts = this.getTabItemLayouts();

		return (
			<div className="c-tabs--list">
				{tabItemLayouts}
			</div>
		);
	}
};

TabItemList.propTypes = {
	tabConfig: React.PropTypes.array.isRequired
};

export default TabItemList;