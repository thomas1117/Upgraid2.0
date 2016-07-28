"use strict";

import store from '../store';
import axios from 'axios';

const URL = "https://safe-brook-9891.herokuapp.com/api/";

export function grabProfileData(resp) {
	    var username = resp.username;
	
		axios.get(URL+'profiles/?username='+username).then(function(resp){
			
			store.dispatch({
			type: 'PROFILE',
			payload: resp
			});
	});

}

export function grabUsers() {
	axios.get(URL+'users/').then(function(resp){
			
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
};

export function addGoal(data) {

	axios.post('https://safe-brook-9891.herokuapp.com/api/goals/',data).then(function(resp){
		store.dispatch({
			type:'ADD_GOAL',
			payload:resp
		});	
	});

}

export function completeGoal(resp) {
	var data = {id:resp.id,title:resp.title,theme:resp.theme,completed:true}
	axios.put(URL+'goals/' + resp.id,data).then(function(resp){
			store.dispatch({
				type:'UPDATE_GOALS',
				payload:resp
			});
	});

}

