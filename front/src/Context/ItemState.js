import { useReducer } from "react";
import {ItemContext} from "../App";
import {ItemReducer} from "./ItemReducer";
import { sumItems } from "./ItemReducer";
import {editItem} from '../api'

export const ItemState = ({ children }) => {
  //   Initial State of the cart
  const initialState = {
    items: [],
    checkout: false,
  };

  //Set up the reducer
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  const getItems = () => dispatch({ type: "GET_ITEMS"})

  //Function to handle when an item is added 
  const addItem = (source) => {
    dispatch({ type: "ADD_ITEM", source });
  };

  const updateItem = (id, source) => async(dispatch)=> {
	  try{
		  const {data} = await editItem(id, source)
		  dispatch({type: "UPDATE_ITEM", payload: data})
		  }
	  }

  //Function to remove an item from the cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };


  //Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    //Add the functions that have been defined above into the Context provider, and pass on to the children
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        handleCheckout,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
