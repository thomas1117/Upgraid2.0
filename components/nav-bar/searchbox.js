import React from 'react';
import SearchBar from './searchbar.js';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions/profile.js';
import {grabUsers} from '../../redux/actions/profile.js';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class SearchBox extends React.Component {
	componentWillMount() {
		
	}
	render() {
		
		return(
			<div>
				<ul>
					{this.props.filteredUsers.map(function(obj){
						return <li key={obj.id}><Link to={`/users/${obj.id}`}>{obj.username}</Link></li>
					})}
				</ul>
			</div>)
	}
};

export default SearchBox;