COPY
// /src/Context/Cart/CartReducer.jsx

//Import the Action types
/*import {
  REMOVE_ITEM,
  ADD_ITEM,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";

// Export function to calculate the total price of the cart and the total quantity of the cart
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};
*/

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const ItemReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case 'ADD_ITEM':
        state.items.push({...action.payload});
        
      return {
        ...state,
        items: [...state.items],
      };
    case 'UPDATE_ITEM': 
        return{
		...state,
		items: state.items.map((item) =>
        (item._id === action.payload._id ? action.payload : item)) 
			}

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.payload.id),
        ],
      };


    // If the action type is CHECKOUT,
    // we want to clear the cartItems array and set the checkout to true
    case 'CHECKOUT':
      return {
        items: [],
        checkout: true
      };

   
    default:
      return state;
  }
};

export default ItemReducer;

