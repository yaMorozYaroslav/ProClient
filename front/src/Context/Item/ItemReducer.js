
import {GET_ITEMS, START_LOADING, END_LOADING, ADD_ITEM,
	   UPDATE_ITEM, REMOVE_ITEM, CHECKOUT, SET_ID, REMOVE_ID, ERROR} from "./ItemTypes.js"

const ItemReducer = (state, action) => {
  switch (action.type) {
	  
	case GET_ITEMS:
	  return {...state, items: action.payload.items }
		  
	case START_LOADING:
	return{...state,loading: true}
	case END_LOADING:
	return{...state,loading: false}

    case ADD_ITEM:
      return {...state, items: [...state.items, action.payload]
      }
    case UPDATE_ITEM: 
        return{
	     ...state, items: state.items.map((item) =>
        (item._id === action.payload._id ? action.payload : item)) 
			}

    case REMOVE_ITEM:
    console.log(action.payload)
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload.id),
      }

    case SET_ID: 
      return {...state, currentId: action.payload}
    case REMOVE_ID:
      return {...state, currentId: null}
    case ERROR:
	return{...state, error: action.payload, loading: false}
	
    default:
      return state;
  }
}

export default ItemReducer;

