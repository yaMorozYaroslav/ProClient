import React from 'react'
import {FiltContext} from '../Context/Contexts'
import {ItemContext} from '../Context/Contexts'


export const Filter =(props)=> {
	
	const subSeed = ['','flowers', 'veggies', 'herbs', 'seedlings']
    const subSoil = ['','for flowers','for veggies', 'for fruit']
    const subSupplements = ['','fertilizers', 'pesticides', 'other']
    const subEquipment = ['','gloves','tools','gear']
	
	const [show, setShow] = React.useState(false)
	const {state, category, type, search, setCategory, setType, setSearch,
		   setMinPrice, setMaxPrice, reset} = React.useContext(FiltContext)
	const {fetchItems, single} = React.useContext(ItemContext)
	
	  let currType
    if(category==='seeds'){currType = subSeed}
	if(category==='soils'){currType = subSoil}
	if(category==='supplements'){currType = subSupplements}
	if(category==='equipment'){currType = subEquipment}
	
	const resetFilt =()=> {
		reset()
		fetchItems('', '', 1)
		}
	function onCategory(event){
		event.preventDefault()
		if(search)setSearch('')
		setCategory(event.target.value)	
		fetchItems(event.target.value, '', 1, '')
		}
	function onType(event){
		event.preventDefault()
		setType(event.target.value)
		fetchItems(category, event.target.value, 1, '')
		}
	function onMinPrice(event){
		setMinPrice(event.target.value)
		}
	function onMaxPrice(event){
		setMaxPrice(event.target.value)
		}
	function onSearch(event){
		event.preventDefault()
		setSearch(event.target.value)
		if(category)setCategory('')
		fetchItems(category, type, 1, event.target.value)
		}
    const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
		const text = {'fontSize':'20px', 'margin': '4px'}
	return <> {show && <div>
		 <button onMouseOver={changeBorder} style={{...text, 'cursor':'pointer'}} onClick={()=>setShow(false)}>HideFilters</button>
		  <label style={{'fontSize':'30px', 'color':'purple'}}>Category</label>
		 <select value={category} style={{...text, 'cursor':'pointer'}}
		          onChange={onCategory}>
	       <option value=''>all</option>
	       <option value='seeds'>seeds</option>
	       <option value='soils'>soils</option>
	       <option value='supplements'>supplements</option>
	       <option value='equipment'>equipment</option>
	     </select>
	       <label style={{'fontSize':'30px', 'color':'darkblue'}}>Type</label>
	     <select name='type'
	         value={state.itemType}
	         onChange={onType}
	         style={{...text, 'cursor':'pointer'}}
	         required >
	     {currType && currType.map((item,i) => 
			   <option key={i} value={item}>{!item?'all':item}</option>)}
	 </select><br/>
	     <input style={text} value={state.itemPrice.min} onChange={onMinPrice} placeholder='MinPrice' type='num'/>
	     <input style={text} value={state.itemPrice.max} onChange={onMaxPrice} placeholder='MaxPrice' type='num'/>
	     <input style={text} value={state.itemSearch} onChange={onSearch} placeholder='Search'/>
	     <button onClick={resetFilt} onMouseOver={changeBorder} style={{...text, 'cursor':'pointer'}}>Reset</button>
	     </div>}
	     {!show && !single && <button onMouseOver={changeBorder} style={{...text, 'cursor':'pointer'}} onClick={()=>setShow(true)}>ShowFilters</button>}
	     </>
	}
