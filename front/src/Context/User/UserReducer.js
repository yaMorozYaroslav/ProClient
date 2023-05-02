import {AUTH, LOGOUT} from './UserTypes'

export const UserReducer = (state, action) => {
	switch(action.type) {
		
		case AUTH:
		console.log(action.data)
		  return {...state, userData: action.data}
		
		case LOGOUT:
		  return {...state, userData: null)
		}
		default:
		  return state
	}
