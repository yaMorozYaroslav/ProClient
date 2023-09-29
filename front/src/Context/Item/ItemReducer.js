
import {GET_ITEMS, START_LOADING, END_LOADING, ADD_ITEM,
	    SET_SINGLE, SET_SINGLE_ID, DEL_SINGLE_ID, UPDATE_ITEM,
	    REMOVE_ITEM, SET_ID, REMOVE_ID, ERROR} from "./ItemTypes.js"

const ItemReducer = (state, action) => {
  switch (action.type) {
	  
	case GET_ITEMS:
	//console.log(action.payload)
	  return {...state, items: action.payload }
		  
	case START_LOADING:
	return{...state,loading: true}
	case END_LOADING:
	return{...state,loading: false}

   /* case ADD_ITEM:
      return {...state.items, items: [...state.items, action.payload]
      }*/
    case ADD_ITEM:
      console.log(action.payload)
      return {...state, items: {...state.items, data: [...state.items.data, action.payload]}
      }
    case UPDATE_ITEM: 
        return{
	     ...state, items: {...state.items, data: state.items.data.map((item) =>
        (item._id === action.payload._id ? action.payload : item)) }
			}

    case REMOVE_ITEM:
    console.log(action.payload)
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      }

    case SET_ID: 
      return {...state, currentId: action.payload}
    case REMOVE_ID:
      return {...state, currentId: null}
    case SET_SINGLE:
      return {...state, single: action.payload}
    case SET_SINGLE_ID: 
      return {...state, singleId: action.payload}
    case DEL_SINGLE_ID:
      return {...state, singleId: null}
    case ERROR:
	return{...state, error: action.payload, loading: false}
	
    default:
      return state;
  }
}

export default ItemReducer;

