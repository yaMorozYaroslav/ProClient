import {AUTH, LOGOUT} from './UserTypes'

export const UserReducer = (state, action) => {
	switch(action.type) {
		
		case AUTH:
		  return {...state, userData: action.payload}
		  console.log(action.payload)
		case LOGOUT:
		  return {...state, userData: null}

		default:
		  return state
	}
  }
