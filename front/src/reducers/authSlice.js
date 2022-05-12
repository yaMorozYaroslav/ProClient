import {AUTH, LOGOUT} from '../actionTypes'

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null
}
export default function authReducer(state = initialState, action){
	switch(action.type){
		case AUTH:
		localStorage.setItem('token', action.payload.token)
	return{
		...state,
		...action.payload,
		isAuthenticated: true,
		isLoading: false
	}
	  case LOGOUT:
	  localStorage.removeItem('token')
	  return{
	  	...state, 
	  	token: null,
	  	user: null,
	  	isAuthenticated: false,
	  	isLoading: false
	  }
	  default: return state
	}
}