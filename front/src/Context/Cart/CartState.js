import { useReducer } from "react"
import {CartContext} from "../Contexts"
import CartReducer from "./CartReducer"

import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  FROM_LOCALE,
  CLEAR,
} from "./CartTypes.js";

export const CartState = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, {cartItems:[]})

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

  const setFromLocale =(source)=> {
		dispatch({type: FROM_LOCALE, payload: source})
		}
  

  return (
     <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        clearCart,
        setFromLocale
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

