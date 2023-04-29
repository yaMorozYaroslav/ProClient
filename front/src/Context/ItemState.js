import { useReducer } from "react";
import {ItemContext} from "../App";
import {ItemReducer} from "./ItemReducer";
import { sumItems } from "./ItemReducer";
import {editItem} from '../api'

export const ItemState = ({ children }) => {
  
  const initialState = {
    items: [],
    checkout: false,
  };


  const [state, dispatch] = useReducer(ItemReducer, initialState);

  const getItems = () => dispatch({ type: "GET_ITEMS"})

  const addItem = (source) => {
    dispatch({ type: "ADD_ITEM", source });
  };

  const updateItem = (id, source) => async(dispatch)=> {
	  try{
		  const {data} = await editItem(id, source)
		  dispatch({type: "UPDATE_ITEM", payload: data})
		  }
	  catch(error){
		console.log(error)
	   }
	  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (

    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        updateItem,
        removeItem,
        handleCheckout,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
