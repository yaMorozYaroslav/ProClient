import { useReducer, useContext } from "react";
import {ItemContext} from "../Contexts";
import {FiltContext} from "../Contexts"
import ItemReducer from "./ItemReducer";
import {getItems, createItem, editItem, deleteItem} from '../../api'

import {GET_ITEMS, START_LOADING, END_LOADING, ADD_ITEM,
	      SET_SINGLE_ID, DEL_SINGLE_ID, UPDATE_ITEM, REMOVE_ITEM,
	         SET_ID, REMOVE_ID, SET_SINGLE, ERROR} from "./ItemTypes.js"

export const ItemState = ({ children }) => {
  
  const initialState = {
    items: [],
    count: null,
    loading: false, 
    error: [],
    currentId: null, 
    single: false,
    singleId: null
  };
  const {category, type, search} = useContext(FiltContext)

  const [state, dispatch] = useReducer(ItemReducer, initialState)

  const fetchItems = async(category, type, page, search) => {
	try{
		dispatch({type: START_LOADING})
		
		const {data} = await getItems(category, type, page, search)
		//console.log(data)
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
		const newData = (!category||category===data.category)&&
		                (!type||type===data.type)?data:null
		dispatch({type: ADD_ITEM, payload: newData})
	 }
    catch(err){
    	dispatch({type: ERROR, payload: err})
    }
  };

  const updateItem = async (id, source) => {
	  try{
		  const {data} = await editItem(id, source)
		  //console.log(data)
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
		dispatch({type: REMOVE_ITEM, payload: data})
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
     }catch(err){
	  dispatch({type: ERROR, payload: err})
	  }
    }
    const setSingle = (bool) => {
		try{
			dispatch({type: SET_SINGLE, payload: bool})
			}catch(err){
				dispatch({type: ERROR, payload: err})
			}
		   }
    const setSingleId = (id) => {
	  try{
    dispatch({ type: SET_SINGLE_ID, payload: id });
  }
  catch(err){
	  dispatch({type: ERROR, payload: err})
	  }
    }
    
     const delSingleId = () => {
	  try{
    dispatch({ type: DEL_SINGLE_ID });
     }catch(err){
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
        single: state.single,
        singleId: state.singleId,
        fetchItems,
        addItem,
        updateItem,
        removeItem,
        setCurrentId,
        removeCurrentId,
        setSingle,
        setSingleId,
        delSingleId,
        ...state,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
