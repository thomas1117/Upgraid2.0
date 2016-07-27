import React from 'react';
import SearchBar from './searchbar.js';

var Nav = React.createClass({
	render:function() {
		return(
			<nav>

				<span>UpgrAID</span>
				<SearchBar/>
			</nav>)
	}
});

export default Nav;