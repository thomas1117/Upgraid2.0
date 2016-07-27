"use strict";

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Add middleware to createStore
var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import login from './reducers/login.js';


// Combine Reducers
var reducers = combineReducers({
    login:login
});

// Create Store
var store = createStoreWithMiddleware(reducers);

export default store;