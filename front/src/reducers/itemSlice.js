import {GET_ITEMS, ADD_ITEM, DELETE} from '../constants/actionTypes'

const func = (items=[], action) => {
	switch(action.type){
		case GET_ITEMS:
		     return action.payload
		case ADD_ITEM:
		     return [...items, action.payload]
		case DELETE:
		     return items.filter((post)=>post._id !== action.payload)
		default:
		     return items
	}
}
export default func