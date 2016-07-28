import React from 'react';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions/profile.js';
import {grabProfileData} from '../../redux/actions/profile.js';
import {connect} from 'react-redux';
import NavLeft from '../nav-left/navLeft.js';
import GoalList from '../goal-list/goals.js';

class ProfilePage extends React.Component {

	componentWillMount() {
		grabProfileData({username:this.props.params.username});
		
	}

	render() {

		if(this.props.profileData){
			
			return(<div>
				<NavLeft 
				userList={this.props.userList}
				groups={this.props.goals} 
				friends={this.props.friends}/>
				<GoalList goals={this.props.goals} />

				</div>)
		}

		else {
			return <div></div>
		}
		
	}
};





function mapStateToProps(state) {
	
  return {
  	profileData:state.login.profile_data,
  	friends:state.login.userFriends,
  	goals:state.login.goals,
  	userList:state.login.userList
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)