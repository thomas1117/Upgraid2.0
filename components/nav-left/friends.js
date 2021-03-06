import React from 'react';
import {Link} from 'react-router';

//renders buttons which are links to groups based on how many goals they have.
class Friends extends React.Component {
	friendsLi() {
		
		return this.props.friends.map(function(obj,i){
			return <li key={i}><Link to={`/users/${obj.id}`}>{obj.username}</Link></li>
		});	
	}
	render(){

		return(
			<div>
			<h2>Friends</h2>

			<ul>
				{this.friendsLi()}
			</ul>
			</div>
		)
	}
		
};

module.exports = Friends;