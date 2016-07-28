"use strict";

import axios from 'axios';


var userInitialState = {
	user_data:{},
	profile_data:null,
  goals:[],
  userGoals:[],
  userFriends:[],
  userList:[],
  filteredUsers:[],
};

export default function(state = userInitialState, action) {
    switch(action.type) {

    	case 'LOGIN': 

    		return {...state}

	  	case 'PROFILE':

      var toFriend = action.payload.data[0].user.to_friend_set.filter(function(obj){
        
        if(obj.accepted===true){
          return obj;
        }
      }).map(function(obj){
        return {
            id:obj.from_friend.id,
            username:obj.from_friend.username
          }
      })
      var fromFriend =action.payload.data[0].user.friend_set.filter(function(obj){
        
        if(obj.accepted===true){
          return obj;
        }
       
      }).map(function(obj){
        return {
            id:obj.to_friend.id,
            username:obj.to_friend.username
          }
      })
     
      var friends = toFriend.concat(fromFriend);
        
	  		return {...state,profile_data:action.payload.data[0],goals:action.payload.data[0].user.goal_set,userFriends:friends}

      case 'PROFILE_USER':
      var toFriend = action.payload.data[0].user.to_friend_set.filter(function(obj){
        
        if(obj.accepted===true){
          return obj;
        }
      }).map(function(obj){
        return {
            id:obj.from_friend.id,
            username:obj.from_friend.username
          }
      })
      var fromFriend =action.payload.data[0].user.friend_set.filter(function(obj){
        
        if(obj.accepted===true){
          return obj;
        }
       
      }).map(function(obj){
        return {
            id:obj.to_friend.id,
            username:obj.to_friend.username
          }
      })
     
      var friends = toFriend.concat(fromFriend);

      console.log(friends)
        return {...state,userGoals:action.payload.data[0].user.goal_set,userFriends:friends}

      case 'GRAB_USERS':
        
        return {...state,userList:action.payload}

      case 'FILTERED_USERS':
      
        return {...state,filteredUsers:action.payload}

      case 'ADD_GOAL':
        var list = [...state.goals,action.payload.data]
        return {...state,goals:list}

      case 'UPDATE_GOALS':


        var goalList = state.goals.map(obj=>{
          if(obj.id===action.payload.data.id) {
            obj.completed = action.payload.data.completed;
          }
          return obj;

        });

        return {...state,goals:goalList}

        
      case 'SAVE_PROFILE':

           return {
           	...state,
           	user_data:action.payload} 
           
              
        default:
            return state;
            
    }
}

