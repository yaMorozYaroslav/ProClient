import {AUTH, LOGOUT} from '../constants/actionTypes'

const initialState = {
	token: localStorage.getItem('profile'),
	isAuthenticated: null,
	isLodaing: false,
	user: null
}
export default function authReducer(state=initialState, action){
	switch(action.type){
		case AUTH:
		   localStorage.setItem('profile', action.payload.token)
		   return{
		   	...state,
		   	...action.payload,
		   	isAuthenticated: true,
		   	isLoading: false
		   }
		case LOGOUT:
		   localStorage.removeItem('profile')
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