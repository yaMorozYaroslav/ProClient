import { useReducer } from "react";
import ItemContext from "./ItemContext";
import ItemReducer from "./ItemReducer";
import {getItems, createItem, editItem, deleteItem} from '../api'

import {GET_ITEMS, ADD_ITEM, UPDATE_ITEM,
                   REMOVE_ITEM, CHECKOUT} from "./ItemTypes.js";

export const ItemState = ({ children }) => {
  
  const initialState = {
    items: [],
    checkout: false,
    loading: false, 
    error: null
  };


  const [state, dispatch] = useReducer(ItemReducer, initialState);

  
  const fetchItems = async() => {
	try{
		dispatch({type: 'START_LOADING'})
		const {data} = await getItems()
		dispatch({type: GET_ITEMS, payload: data})
		dispatch({type: 'END_LOADING'})
	 }
	catch(err){	return err.message}
   }
  
  const addItem = (source) => async(dispatch)=> {
    try{
		const {data} = await createItem(source)
		dispatch({type: ADD_ITEM, payload: data})
	 }
    catch(error){
    	console.log(error)
    }
  };

  const updateItem = (id, source) => async(dispatch)=> {
	  try{
		  const {data} = await editItem(id, source)
		  dispatch({type: UPDATE_ITEM, payload: data})
		  }
	  catch(error){
		console.log(error)
	   }
	  }

   const removeItem =(id)=> async(dispatch)=> {
	try{
		await deleteItem(id)
		dispatch({type: REMOVE_ITEM, payload: id})
	 }
	catch(error){
		console.log(error)
	}
   }

  const handleCheckout = () => {
    dispatch({ type: CHECKOUT });
  };

  return (

    <ItemContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        fetchItems,
        addItem,
        updateItem,
        removeItem,
        handleCheckout,
        ...state,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
