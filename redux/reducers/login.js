"use strict";

import axios from 'axios';
import {browserHistory} from 'react-router';

var userInitialState = {
	profile_data:{}
};

export default function(state = userInitialState, action) {
    switch(action.type) {

    	case 'LOGIN': 

    		axios.post('https://safe-brook-9891.herokuapp.com/api/api-token-auth/',{
	  		username:action.payload.username,
	  		password:action.payload.password
	  	}).then(function(resp){
	  		axios.defaults.headers.common['Authorization'] = 'Token ' + resp.data.token;
	  		
	  		localStorage.setItem('token',resp.data.token);

	  	}).then(function(){
	  		axios.get('https://safe-brook-9891.herokuapp.com/api/profiles/?username='+action.payload.username).then(function(resp){

	  		}).then(function(){
	  			browserHistory.push('/profile/' + action.payload.username);
	  		})
	  	});
        
        case 'SAVE_PROFILE':

           return {
           	...state,
           	profile_data:action.payload} 
           
              
        default:
            return state;
            
    }
}

