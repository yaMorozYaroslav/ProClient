import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";

export const sumItems = (cartItems) => {
  let itemCount = cartItems.reduce((total, product) =>
                                           total + product.quantity, 0)
  let total = cartItems
    .reduce((total, product) => total + 
                                   product.price * product.quantity, 0)
                                  .toFixed(2);
  return { itemCount, total };
};

const CartReducer = (state, action) => {
  
  switch (action.type) {
    
    case ADD_TO_CART:
      
      const itemInCart = state.cartItems.find((item) => 
                                       item._id === action.payload._id)
      if (itemInCart) {
        itemInCart.quantity++;    
      } else {state.cartItems.push({ ...action.payload, quantity: 1 })}

      return {
        ...state,
        cartItems: [...state.cartItems],
      }

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => 
                                  item._id !== action.payload)]
      }

    // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
    case INCREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
    case DECREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

   case CHECKOUT:
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };

    case CLEAR:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state
  }
};

export default CartReducer
