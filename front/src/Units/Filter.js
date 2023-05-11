import React from 'react'
import {FiltContext} from '../Context/Contexts'


export const Filter =(props)=> {
	
	const {state, setCategory, setSearch,setMinPrice, setMaxPrice} = React.useContext(FiltContext)
	//console.log(state)
	function onCategory(event){
		event.preventDefault()
		setCategory(event.target.value)
		//setCategory(event.target.value)	
		}
	function onSearch(event){
		event.preventDefault()
		setSearch(event.target.value)
		}
	function onMinPrice(event){
		setMinPrice(event.target.value)
		}
	function onMaxPrice(event){
		setMaxPrice(event.target.value)
		}
	return <>
	     <input onChange={onMinPrice} placeholder='MinPrice' type='num'/>
	     <input onChange={onMaxPrice} placeholder='MaxPrice' type='num'/>
	     <input onChange={onSearch} placeholder='Search'/>
	     <select name='howFilter' onChange={onCategory}>
	       <option value='all'>All</option>
	       <option value='soils'>Soils</option>
	       <option value='pesticides'>Pesticides</option>
	       <option value='seeds'>Seeds</option>
	     
	     </select>
	</>
	}
