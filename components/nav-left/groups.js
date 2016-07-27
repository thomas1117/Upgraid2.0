import React from 'react';

//renders buttons which are links to groups based on how many goals they have.
class Groups extends React.Component {
	groupLi() {
		return this.props.groups.map(function(obj,i){
			return <li key={i}>{obj.title}</li>
		})
	}
	render(){

		return(
			<div>
			<h2>My Groups</h2>

			<ul>
				{this.groupLi()}
			</ul>
			</div>
		)
	}
		
};

module.exports = Groups;

// var props = this.props;
// 		var test=this.props.goals.map(function(obj){

// 					return(<p key={obj.id} className="groupButton"><GroupsBtn theme={obj.theme} id={obj.group} title = {obj.title} completed={obj.completed}/></p>)

// 			});
// 					return(<div id="groupsContainer"><h2 id="groupsHeader">My Groups</h2>{test}</div>)
// 			}