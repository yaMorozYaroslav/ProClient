import {createSlice} from '@reduxjs/toolkit'
import {FETCH_ALL, CREATE, DELETE} from '../actionTypes'

const itemSlice = (items=[], action) =>{
	switch(action.type){
	case DELETE:
	    return items.filter((item)=>item._id !== action.payload)
/*	case UPDATE:
	    return posts.map((post)=>post._id===action.payload._id
	    	                                    ?action.payload:post)*/
	case FETCH_ALL:
        return action.payload
	case CREATE:
        return [...items, action.payload]
	default:
	     return items
	}
}
export default itemSlice