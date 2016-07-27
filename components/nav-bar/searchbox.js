import React from 'react';
import SearchBar from './searchbar.js';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions/profile.js';
import {grabUsers} from '../../redux/actions/profile.js';
import {connect} from 'react-redux';

class SearchBox extends React.Component {
	componentWillMount() {
		
	}
	render() {
		
		return(
			<div>
				<ul>
					{this.props.filteredUsers.map(function(obj){
						return <li key={obj.id}>{obj.username}</li>
					})}
				</ul>
			</div>)
	}
};

export default SearchBox;