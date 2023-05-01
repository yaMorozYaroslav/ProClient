import {AUTH, LOGOUT} from './UserTypes'

const UserReducer = (state, action) => {
	switch(action.type) {
		case AUTH:
		console.log(action.data)
		return {...state, userData: action.data}
		}
	}
