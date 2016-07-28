"use strict";

import store from '../store';
import axios from 'axios';
import {browserHistory} from 'react-router';
const URL = "https://safe-brook-9891.herokuapp.com/api/";

export function doThis(resp) {
		store.dispatch({
		type: 'SAVE_PROFILE',
		payload: resp
		})
	}

export function login(resp) {
		var username = resp.username;

		axios.post(URL+'api-token-auth/',{
	  		username:username,
	  		password:resp.password
	  	}).then(function(resp){
	  		axios.defaults.headers.common['Authorization'] = 'Token ' + resp.data.token;
	  		
	  		localStorage.setItem('token',resp.data.token);

	  		browserHistory.push('/profile/' + username);

	  		store.dispatch({
				type:'LOGIN',
				payload:resp
				})
	  	});


}