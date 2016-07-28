import React from 'react';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions/profile.js';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/actions/profile.js';
import GoalList from '../goal-list/goals.js';
import Groups from '../nav-left/groups.js';
import Friends from '../nav-left/friends.js';

class ProfileUser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}
	componentWillMount() {

		getUserProfile(this.props.params.id);
	}

	render() {
		return(
			<div>
				<GoalList user={true} goals={this.props.goals}/>
				<Groups user={true} groups={this.props.goals}/>
				<Friends friends={this.props.friends}/>
			</div>)
	}
};

function mapStateToProps(state) {
	
  return {
  	profileData:state.login.profile_data,
  	goals:state.login.userGoals,
  	userList:state.login.userList,
  	friends:state.login.userFriends,
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser)