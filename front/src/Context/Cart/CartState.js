import { useReducer } from "react"
import {CartContext} from "../Contexts"
import CartReducer from "./CartReducer"
import { sumItems } from "./CartReducer"

import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";

export const CartState = ({ children }) => {
  
  const initialState = {
    cartItems: [],
    checkout: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (payload) => {
    dispatch({ type: ADD_TO_CART, payload })
  }

  const increase = (payload) => {
    dispatch({ type: INCREASE, payload });
  };

  const decrease = (payload) => {
    dispatch({ type: DECREASE, payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: REMOVE_ITEM, payload });
  };

  
  const clearCart = () => {
    dispatch({ type: CLEAR });
  };

  const handleCheckout = () => {
    dispatch({ type: CHECKOUT });
  };

  return (
     <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        handleCheckout,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

