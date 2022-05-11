import React from 'react'
import {useSelector} from 'react-redux'
import {Item} from './Item'

export const Items =()=>{
	const items = useSelector(state=>state.posts)

return (<>{!items.length
	?'loading'
    : <div >{items.map((item)=>(
	<section key={item._id}>
	   <Item item={item} />
	</section>
	))}</div>}
	</>


	)}