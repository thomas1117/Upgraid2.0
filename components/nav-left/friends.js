import React from 'react';

//renders buttons which are links to groups based on how many goals they have.
class Friends extends React.Component {
	friendsLi() {
	
		return this.props.friends.filter(function(obj,i){
			
			if(obj.accepted===true) {
				return obj;
			}
			
		}).map(function(obj,i){
			return <li key={i}>{obj.to_friend.username}</li>
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