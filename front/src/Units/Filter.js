import React from 'react'
import {FiltContext} from '../Context/Contexts'
import {ItemContext} from '../Context/Contexts'


export const Filter =(props)=> {
	
	const [show, setShow] = React.useState(false)
	const {state, setCategory, setSearch,
		   setMinPrice, setMaxPrice, reset} = React.useContext(FiltContext)
	const {fetchItems, single} = React.useContext(ItemContext)
	
	function onCategory(event){
		event.preventDefault()
		setCategory(event.target.value)	
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
	const resetFilt =()=> {
		reset()
		if(!state.itemCategory)fetchItems()
		}
	
    const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
		const text = {'fontSize':'20px', 'margin': '4px'}
	return <> {show && <div>
		 <button onMouseOver={changeBorder} style={{...text, 'cursor':'pointer'}} onClick={()=>setShow(false)}>HideFilters</button>
		  <label style={{'fontSize':'30px', 'color':'purple'}}>Category</label>
		 <select value={state.itemCategory} style={{...text, 'cursor':'pointer'}}
		         onClick={()=>fetchItems(state.itemCategory, 1)} name='howFilter' onChange={onCategory}>
	       <option value=''>All</option>
	       <option value='seeds'>Seeds</option>
	       <option value='soils'>Soils</option>
	       <option value='supplements'>Supplements</option>
	       <option value='equipment'>Equipment</option>
	     </select>
	     <input style={text} value={state.itemPrice.min} onChange={onMinPrice} placeholder='MinPrice' type='num'/>
	     <input style={text} value={state.itemPrice.max} onChange={onMaxPrice} placeholder='MaxPrice' type='num'/>
	     <input style={text} value={state.itemSearch} onChange={onSearch} placeholder='Search'/>
	     <button onClick={resetFilt} onMouseOver={changeBorder} style={{...text, 'cursor':'pointer'}}>Reset</button>
	     </div>}
	     {!show && !single && <button onMouseOver={changeBorder} style={{...text, 'cursor':'pointer'}} onClick={()=>setShow(true)}>ShowFilters</button>}
	     </>
	}
