import React from 'react';
import SearchBar from './searchbar.js';
import SearchBox from './searchbox.js';
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
				<div className='row'>
				<div className='col-sm-12'>
					<div className='col-sm-2'><span>UpgrAID</span></div>
					<div className='col-sm-2'><SearchBar userList={this.props.userList}/></div>
				</div>
				</div>

				<div className='user-list-modal'>
				<SearchBox filteredUsers={this.props.filteredUsers}/>
				</div>

			</nav>)
	}
};

function mapStateToProps(state) {
	
  return {
  	profileData:state.login.profile_data,
  	userList:state.login.userList,
  	filteredUsers:state.login.filteredUsers
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)