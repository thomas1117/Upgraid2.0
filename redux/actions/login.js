"use strict";

import store from '../store';

export function doThis(resp) {
		store.dispatch({
		type: 'SAVE_PROFILE',
		payload: resp
		})
	}

export function login(resp) {
	store.dispatch({
		type:'LOGIN',
		payload:resp
	})
}