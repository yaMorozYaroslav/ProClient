import {FETCH_ALL,CREATE, EDIT, DELETE} from '../tools/consts'
import * as api from '../tools/api'

export const getItems =()=> async(dispatch)=> {
	try{
		const {data} = await api.fetchItems()
		dispatch({type: FETCH_ALL, payload: data})
	 }
	catch(error){
		console.log(error.message)
	}
   }

export const addItem =(itemData)=> async(dispatch)=> {
	try{
		const {data} = await api.createItem(itemData)
		dispatch({type: CREATE, payload: data})
	 }
    catch(error){
    	console.log(error)
    }
   }

export const updateItem =(id, item)=> async(dispatch)=> {
	try{
		const {data} = await api.editItem(id, item)
		dispatch({type: EDIT, payload: data})
	 }
	catch(error){
		console.log(error)
	}
   }
   
export const removeItem =(id)=> async(dispatch)=> {
	try{
		await api.deleteItem(id)
		dispatch({type: DELETE, payload: id})
	 }
	catch(error){
		console.log(error)
	}
   }