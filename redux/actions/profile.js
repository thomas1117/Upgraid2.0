"use strict";

import store from '../store';
import axios from 'axios';

export function grabProfileData(resp) {
	    var username = resp.username;
	
		axios.get('https://safe-brook-9891.herokuapp.com/api/profiles/?username='+username).then(function(resp){
			
			store.dispatch({
			type: 'PROFILE',
			payload: resp
			});
	});

}

export function grabUsers() {
	axios.get('https://safe-brook-9891.herokuapp.com/api/users/').then(function(resp){
			
			var users = resp.data.map(function(obj){
				return {
					id:obj.id,
					username:obj.username
				}
			});

			store.dispatch({
				type:'GRAB_USERS',
				payload:users
			});
	});
}

export function filterUsers(resp) {

	store.dispatch({
		type:'FILTERED_USERS',
		payload:resp
	});
}

