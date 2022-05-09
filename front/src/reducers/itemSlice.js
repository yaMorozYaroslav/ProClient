import {GET_ITEMS, ADD_ITEM, DELETE} from '../constants/actionTypes'

const initialState = {
	items: [],
	status: 'idle',
	error: null
}

const func = (state = initialState, action) => {
	switch(action.type){
		case GET_ITEMS:
		     return action.payload
		case ADD_ITEM:
		     return [...state.items, action.payload]
		case DELETE:
		     return state.items.filter((post)=>post._id !== action.payload)
		default:
		     return state.items
	}
}
export default func