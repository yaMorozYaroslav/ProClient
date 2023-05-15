import {AUTH, LOGOUT, FROM_STORAGE} from './UserTypes'

export const UserReducer = (state, action) => {
	switch(action.type) {
		
		case AUTH:
		  return {...state, userData: action.payload}
		case LOGOUT:
		  return {...state, userData: {}}
        case FROM_STORAGE:
          return {...state, userData: action.payload}
        case 'START_LOADING':
	      return{...state,loading: true}
	    case 'END_LOADING':
	      return{...state,loading: false}
        
		default:
		  return state
	}
  }
