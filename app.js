require("!style!css!sass!./style/sass/main.scss");
require("!style!css!sass!./style/sass/common.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Login from './components/login-reg/login.js';
import Profile from './components/profile-page/profile-page.js';
import Nav from './components/nav-bar/nav-body.js';
import store from './redux/store.js';
import Main from './components/main.js';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>

				<Route path="/" component={Main}>
				<IndexRoute component={Login}/>
	            	<Route path='/profile/:username' component={Profile}/>          		
	        	</Route>
	        	
				
		</Router>
		
	</Provider>,
	document.getElementById('app'));


