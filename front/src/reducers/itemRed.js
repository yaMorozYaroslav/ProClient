import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../tools/consts'

const itemRed = (items=[], action) => {
	switch(action.type){
        case FETCH_ALL:
              return action.payload
        case CREATE:
              return [...items, action.payload]
        case UPDATE:
              return items.map((item)=>
              item._id === action.payload._id ? action.payload: item)
		case DELETE:
		      return items.filter((item)=>item._id !== action.payload)
		default: 
		         return items
	}
}
export default itemRed