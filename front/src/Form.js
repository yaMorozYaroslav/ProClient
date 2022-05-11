import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {createItem} from './actions/itemAct'

export const Form = ()=> {
	const dispatch = useDispatch()
	const [itemData, setItemData] = React.useState({name: ''})
	const submit =(e)=>{
		e.preventDefault()
	if(itemData.name){
		dispatch(createItem(itemData))
		clear()
	}

	}
	const clear =()=> {
		setItemData({name: ''})
	}
	return(
      <section><form>
      <label htmlFor="name">title:</label>
      <textarea id='itemName' name='itemName' value={itemData.name}
                onChange={(e)=>setItemData({...itemData, name: e.target.value})} />
      <button onClick={submit}>submit</button>
      </form></section>
		)
}