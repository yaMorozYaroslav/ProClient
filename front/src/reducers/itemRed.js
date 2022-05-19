import {FETCH_ALL, CREATE, EDIT, DELETE} from '../tools/consts'
const initial = {items:[], loading:true}
const itemRed = (state=initial, action) => {
	switch(action.type){
		   
        case FETCH_ALL:
              return {...state, loading: true, items:action.payload}
        case CREATE:
              return {...state, items: [...state.items, action.payload]}
        case EDIT:
              return {...state, items: state.items.map(
                                   item => item._id === action.payload._id 
                                   ? action.payload : item)}
		case DELETE:
		      return {...state, items: state.items.filter(
		      	                    item => item._id !== action.payload)}
		default: 
		         return state.items
	}
}
export default itemRed