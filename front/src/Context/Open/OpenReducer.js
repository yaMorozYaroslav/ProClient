import {OPEN_ITEM, CLOSE_ITEM, 
	    OPEN_AUTH, CLOSE_AUTH, OPEN_MAIL, CLOSE_MAIL} from './OpenTypes'
	    
export const OpenReducer = (state, action) => {
	switch(action.type){
		case OPEN_ITEM:
		  return {...state, item: true}
		case CLOSE_ITEM:
		  return {...state, item: false}
		case OPEN_AUTH:
		  return {...state, auth: true}
		case CLOSE_AUTH:
		  return {...state, auth: false}
		case OPEN_MAIL:
		  return {...state, mail: true}
		case CLOSE_MAIL:
		  return {...state, mail: false}
		
		default: 
		     return state
		}
	}
