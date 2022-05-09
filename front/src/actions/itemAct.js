import {GET_ITEMS, ADD_ITEM, DELETE} from '../constants/actionTypes'
import * as api from '../api'

export const getItems =()=> async(dispatch)=>{
	try{
		const {data} = await api.fetchItems()
		dispatch({type: GET_ITEMS, payload: data})
	}catch(error){
		console.log(error.message)
	}
export const addItem =(post)=> async(disaptch)=>{
    try{
    	const {data} = await api.addItem(post)
    	dispatch({type: ADD_ITEM, payload: data})
    }catch(error){
    	console.log(error)
    }
}
export const deleteItem =(id)=> async(dispatch)=>{
	try{
		await api.deleteItem(id)
		dispatch({type: DELETE, payload: id})
	}catch(error){
		console.log(error)
	}
}