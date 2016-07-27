import React from 'react';
import SearchBar from './searchbar.js';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions/profile.js';
import {grabUsers} from '../../redux/actions/profile.js';
import {connect} from 'react-redux';

class Nav extends React.Component {
	componentWillMount() {
		grabUsers();
	}
	render() {
	
		return(
			<nav>

				<span>UpgrAID</span>
				<SearchBar userList={this.props.userList}/>
			</nav>)
	}
};

function mapStateToProps(state) {
	
  return {
  	profileData:state.login.profile_data,
  	userList:state.login.userList
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)