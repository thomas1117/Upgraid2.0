import React from 'react';
import Groups from './groups.js';
import Friends from './friends.js';

class NavLeft extends React.Component {
	render() {
		return(<div className='nav-left-body'>
				<Groups groups={this.props.groups}/>
				<Friends friends={this.props.friends}/>
			</div>)
	}
};

export default NavLeft;