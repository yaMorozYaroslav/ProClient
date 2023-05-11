import { useReducer } from "react";
import {ItemContext} from "../Contexts";
import ItemReducer from "./ItemReducer";
import {getItems, createItem, editItem, deleteItem} from '../../api'

import {GET_ITEMS, START_LOADING, END_LOADING, ADD_ITEM,
	   UPDATE_ITEM, REMOVE_ITEM, CHECKOUT, ERROR} from "./ItemTypes.js"

export const ItemState = ({ children }) => {
  
  const initialState = {
    items: [],
    checkout: false,
    loading: false, 
    error: null
  };

  const [state, dispatch] = useReducer(ItemReducer, initialState)

  const fetchItems = async() => {
	try{
		dispatch({type: START_LOADING})
		const {data} = await getItems()
		dispatch({type: GET_ITEMS, payload: data})
		dispatch({type: END_LOADING})
	 }
	catch(err){	
		dispatch({type: ERROR, payload: err})
	  }
   }
  
  const addItem = async(source) => {
    try{
		const {data} = await createItem(source)
		dispatch({type: ADD_ITEM, payload: data})
	 }
    catch(err){
    	dispatch({type: ERROR, payload: err})
    }
  };

  const updateItem = (id, source) => async(dispatch)=> {
	  try{
		  const {data} = await editItem(id, source)
		  dispatch({type: UPDATE_ITEM, payload: data})
		  }
	  catch(err){
		dispatch({type: ERROR, payload: err})
	   }
	  }

   const removeItem =(id)=> async(dispatch)=> {
	try{
		await deleteItem(id)
		dispatch({type: REMOVE_ITEM, payload: id})
	 }
	catch(err){
		dispatch({type: ERROR, payload: err})
	}
   }

  const handCheckout = () => {
	  try{
    dispatch({ type: CHECKOUT });
  }
  catch(err){
	  dispatch({type: ERROR, payload: err})
	  }
    }
  return (

    <ItemContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        error: state.error,
        fetchItems,
        addItem,
        updateItem,
        removeItem,
        handCheckout,
        ...state,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
