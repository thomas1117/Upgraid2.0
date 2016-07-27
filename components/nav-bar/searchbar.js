// import React from 'react';
// import {filterUsers} from '../../redux/actions/profile.js';

// class SearchBar extends React.Component {
// 	searchFriends(e) {
// 		var userInput = e.target.value.toLowerCase();

// 		var filtered = this.props.userList.filter(function(obj){
// 			if(obj.username.slice(0,userInput.length).toLowerCase()===userInput) {
// 				return true;
// 			}
// 		});

// 		filterUsers(filtered)

// 	}
// 	render() {


// 			return(<div>
// 				<input onChange={(e) => this.searchFriends(e)}/>
// 				</div>)
		
// 	}
// };

// export default SearchBar;