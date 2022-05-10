import {createSlice} from '@reduxjs/toolkit'
import {FETCH_ALL, CREATE, DELETE} from '../actionTypes'

const initialState = {
	posts: [],
	status: 'idle',
	error: null
}
const func = (state = initialState, action) =>{
	switch(action.type){
	case DELETE:
	    return state.posts.filter((post)=>post._id !== action.payload)
/*	case UPDATE:
	    return posts.map((post)=>post._id===action.payload._id
	    	                                    ?action.payload:post)*/
	case FETCH_ALL:
        return action.payload
	case CREATE:
        return [...state.posts, action.payload]
	default:
	     return state.posts
	}
}
export default func