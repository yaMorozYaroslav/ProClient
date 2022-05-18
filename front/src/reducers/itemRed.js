import {DOWNLOADED, FETCH_ALL,
        CREATE, EDIT, DELETE} from '../tools/consts'

const itemRed = (items=[], action) => {
	switch(action.type){
		   /* case DOWNLOADED:
		          return{...state, loading: false}*/
        case FETCH_ALL:
              return action.payload
        case CREATE:
              return action.payload
        case EDIT:
              return items.map(
                                   item => item._id === action.payload._id 
                                   ? action.payload : item)
		case DELETE:
		      return items.filter(
		      	                    item => item._id !== action.payload)
		default: 
		         return items
	}
}
export default itemRed