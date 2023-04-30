
import {GET_ITEMS, ADD_ITEM, UPDATE_ITEM,
                   REMOVE_ITEM, CHECKOUT} from "./ItemTypes.js";

const ItemReducer = (state, action) => {
  switch (action.type) {
	  
	case GET_ITEMS:
	  return {
		  ...state,
		  items: action.payload
		  }
		  
	case 'START_LOADING':
	return{...state,loading: true}
	case 'END_LOADING':
	return{...state,loading: false}
	
    case ADD_ITEM:
      return {
       ...state, 
       items: [...state.items, action.payload],
      };
    case UPDATE_ITEM: 
        return{
		...state,
		items: state.items.map((item) =>
        (item._id === action.payload._id ? action.payload : item)) 
			}

    case REMOVE_ITEM:
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.payload.id),
        ],
      };


    // If the action type is CHECKOUT,
    // we want to clear the cartItems array and set the checkout to true
    case CHECKOUT:
      return {
        items: [],
        checkout: true
      };

   
    default:
      return state;
  }
};

export default ItemReducer;

