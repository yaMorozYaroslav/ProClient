import React from 'react'
import {FiltContext} from '../Context/Contexts'


export const Filter =(props)=> {
	
	const {state, setCategory} = React.useContext(FiltContext)
	console.log(state)
	function onCategory(event){
		props.onCategory(event.target.value)
		//setCategory(event.target.value)	
		}
	function onSearch(event){
		props.searchSelected(event.target.value)
		}
	function onMinPrice(event){
		props.minPriceSelected(event.target.value)
		}
	function onMaxPrice(event){
		props.maxPriceSelected(event.target.value)
		}
	return <>
	     <input onChange={onMinPrice} placeholder='MinPrice'/>
	     <input onChange={onMaxPrice} placeholder='MaxPrice'/>
	     <input onChange={onSearch} placeholder='Search'/>
	     <select name='howFilter' onChange={onCategory}>
	       <option value='all'>All</option>
	       <option value='soils'>Soils</option>
	       <option value='pesticides'>Pesticides</option>
	       <option value='seeds'>Seeds</option>
	     
	     </select>
	</>
	}
