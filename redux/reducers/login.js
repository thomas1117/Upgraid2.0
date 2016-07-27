"use strict";

import axios from 'axios';


var userInitialState = {
	user_data:{},
	profile_data:null,
  userList:[],
  filteredUsers:[],
};

export default function(state = userInitialState, action) {
    switch(action.type) {

    	case 'LOGIN': 

    		return {...state}

	  	case 'PROFILE':

	  		return {...state,profile_data:action.payload.data[0]}

      case 'GRAB_USERS':
        
        return {...state,userList:action.payload}

      case 'FILTERED_USERS':
      console.log(action.payload)
        return {...state,filteredUsers:action.payload}

        
      case 'SAVE_PROFILE':

           return {
           	...state,
           	user_data:action.payload} 
           
              
        default:
            return state;
            
    }
}

