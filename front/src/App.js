import React from 'react'

import {Cart} from './Units/Cart'
import {CartForm} from './Units/CartForm'
import {TheBar} from './Units/TheBar'
import {Filter} from './Units/Filter'
import {ItemsList} from './Units/ItemsList'

export const App =()=> {
	const [currentId, setCurrentId] = React.useState(null)
	const [opened, setOpened] = React.useState({item: false, auth: false, cart: false})
	
	const [itemFilter, setItemFilter] = React.useState('all')
	const [itemSearch, setItemSearch] = React.useState('')
	const [itemPrice, setItemPrice] = React.useState({min:0, max:0})
	
	function onFilterSelected(filterValue){
		setItemFilter(filterValue)
		}
	function onSearchSelected(filterValue){
		setItemSearch(filterValue)
		}
	function onMinPrice(filterValue){
		setItemPrice({...itemPrice, min: filterValue})
		}
	function onMaxPrice(filterValue){
		setItemPrice({...itemPrice, max: filterValue})
		}
		
	return <>
	         <Cart opened={opened} setOpened={setOpened}/>
	         <CartForm/>
	         
	         <TheBar currentId={currentId} setCurrentId={setCurrentId}
	                 opened={opened} setOpened={setOpened}/>
	                 
	         <Filter filterSelected={onFilterSelected}
	                 searchSelected={onSearchSelected}
	                 minPriceSelected={onMinPrice}
	                 maxPriceSelected={onMaxPrice}/>
	         
	         <ItemsList setCurrentId={setCurrentId} 
	                    opened={opened} setOpened={setOpened}
	                    itemFilter={itemFilter} itemSearch={itemSearch}
	                    itemPrice={itemPrice}
	                    />
	       </>
	}
