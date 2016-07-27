import React from 'react';
import SearchBar from './searchbar.js';
import SearchBox from './searchbox.js';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions/profile.js';
import {grabUsers} from '../../redux/actions/profile.js';
import {connect} from 'react-redux';
import {filterUsers} from '../../redux/actions/profile.js';

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open:false,
			length:0,
		}
	}
	componentWillMount() {
		grabUsers();
	}
	searchFriends(e) {
		var userInput = e.target.value.toLowerCase();
		this.setState({length:e.target.value.length})

		var filtered = this.props.userList.filter(function(obj){
			if(obj.username.slice(0,userInput.length).toLowerCase()===userInput) {
				return true;
			}
		});

		filterUsers(filtered)

	}
	clicked() {
		
		this.setState({
			open:true
		});
	}
	render() {

		let {open,length} = this.state;
	
		return(
			<nav>
				<div className='row'>
				<div className='col-sm-12'>
					<div className='col-sm-2'><span>UpgrAID</span></div>
					<div className='col-sm-2'><input onFocus={(e)=>this.clicked(e)} onChange={(e) => this.searchFriends(e)}/></div>
				</div>
				</div>

				<div className='user-list-modal'>

				{open && length ? <SearchBox filteredUsers={this.props.filteredUsers}/> : null	}

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