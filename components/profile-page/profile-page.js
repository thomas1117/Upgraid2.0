import React from 'react';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions/profile.js';
import {grabProfileData} from '../../redux/actions/profile.js';
import {connect} from 'react-redux';
import NavLeft from '../nav-left/navLeft.js';

class ProfilePage extends React.Component {

	componentWillMount() {
		grabProfileData({username:this.props.params.username});
		
	}

	render() {

		if(this.props.profileData){
			
			return(<div>
				<NavLeft 
				userList={this.props.userList}
				groups={this.props.profileData.user.goal_set} 
				friends={this.props.profileData.user.friend_set}/>
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
  	userList:state.login.userList
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)