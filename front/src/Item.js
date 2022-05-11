import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteItem} from './actions/itemAct'

export const Item =({item})=>{
	const dispatch = useDispatch()
	return(<>
		<p>{item.name}</p>
		<button onClick={()=>dispatch(deleteItem(item._id))}>Delete</button>
		</>)
}