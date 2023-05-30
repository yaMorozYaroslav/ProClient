import React from 'react'
import {FiltContext} from '../Context/Contexts'
import {ItemContext} from '../Context/Contexts'


export const Filter =(props)=> {
	
	const [show, setShow] = React.useState(false)
	const {state, setCategory, setSearch,setMinPrice, setMaxPrice} = React.useContext(FiltContext)
	const {fetchItems} = React.useContext(ItemContext)
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
		const text = {'fontSize':'20px', 'margin': '4px'}
	return <> {show && <div>
		 <button style={text} onClick={()=>setShow(false)}>HideFilters</button>
		  <label style={{'fontSize':'30px', 'color':'purple'}}>Category</label>
		 <select style={text} onClick={()=>fetchItems(state.itemCategory)} name='howFilter' onChange={onCategory}>
	       <option value='all'>All</option>
	       <option value='soil'>Soils</option>
	       <option value='pesticide'>Pesticides</option>
	       <option value='seed'>Seeds</option>
	     </select>
	     <input style={text} onChange={onMinPrice} placeholder='MinPrice' type='num'/>
	     <input style={text} onChange={onMaxPrice} placeholder='MaxPrice' type='num'/>
	     <input style={text} onChange={onSearch} placeholder='Search'/>
	     </div>}
	     {!show && <button style={text} onClick={()=>setShow(true)}>ShowFilters</button>}
	     </>
	}
