import { useReducer } from "react";
import {ItemContext} from "../Contexts";
import ItemReducer from "./ItemReducer";
import {getItems, createItem, editItem, deleteItem} from '../../api'

import {GET_ITEMS, START_LOADING, END_LOADING, ADD_ITEM,
	   UPDATE_ITEM, REMOVE_ITEM, SET_ID, REMOVE_ID, ERROR} from "./ItemTypes.js"

export const ItemState = ({ children }) => {
  
  const initialState = {
    items: [],
    count: null,
    loading: false, 
    error: [],
    currentId: null
  };

  const [state, dispatch] = useReducer(ItemReducer, initialState)

  const fetchItems = async(category) => {
	try{
		dispatch({type: START_LOADING})
		
		const {data} = await getItems(category)
		console.log(data)
		dispatch({type: GET_ITEMS, payload: data})
		
		dispatch({type: END_LOADING})
	 }
	catch(err){	
		dispatch({type: ERROR, payload: err.message})
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

  const updateItem = async (id, source) => {
	  try{
		  const {data} = await editItem(id, source)
		  console.log(data)
		  dispatch({type: UPDATE_ITEM, payload: data})
		  }
	  catch(err){
		dispatch({type: ERROR, payload: err})
	   }
	  }

   const removeItem = async(id) => {
	try{
		const {data} = await deleteItem(id)
		console.log(data)
		dispatch({type: REMOVE_ITEM, payload: id})
	 }
	catch(err){
		dispatch({type: ERROR, payload: err})
	}
   }

  const setCurrentId = (id) => {
	  try{
    dispatch({ type: SET_ID, payload: id });
  }
  catch(err){
	  dispatch({type: ERROR, payload: err})
	  }
    }
    
     const removeCurrentId = () => {
	  try{
    dispatch({ type: REMOVE_ID });
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
        currentId: state.currentId,
        fetchItems,
        addItem,
        updateItem,
        removeItem,
        setCurrentId,
        removeCurrentId,
        ...state,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
