import React from 'react';
import store from '../../redux/store.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NavLeft from '../nav-left/navLeft.js';

class ProfilePage extends React.Component {

	render() {
		
		return(<div>
				<NavLeft/>
				</div>)
	}
};

export default ProfilePage;



// function mapStateToProps(state) {

//   return {profile_data:state.login.profile_data}
// }

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actionCreators, dispatch) }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)