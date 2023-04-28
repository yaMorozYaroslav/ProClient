import React, {createContext, useContext} from 'react'

import {UserButt} from './Units/UserButt'

import {Cart} from './Units/Cart'
import {CartForm} from './Units/CartForm'
import {TheBar} from './Units/TheBar'
import {Filter} from './Units/Filter'
import {ItemsList} from './Units/ItemsList'

export const AuthContext = createContext()

export const App =()=> {
	
	const [user, setUser] = React.useState(null)
	
	
	const [currentId, setCurrentId] = React.useState(null)
	const [opened, setOpened] = React.useState({item: false, auth: false, cart: false, mail: false})
	
	const [itemCategory, setItemCategory] = React.useState('all')
	const [itemSearch, setItemSearch] = React.useState('')
	const [itemPrice, setItemPrice] = React.useState({min:0, max:0})
	
	function onCategory(filterValue){
		setItemCategory(filterValue)
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
		
	
	return (
	       <>
	       <AuthContext.Provider value={{user, setUser}}>
	         <Cart opened={opened} setOpened={setOpened}/>
	         <CartForm opened={opened} setOpened={setOpened}/>
	         
	         <TheBar currentId={currentId} setCurrentId={setCurrentId}
	                 opened={opened} setOpened={setOpened}/>
	                 
	         <Filter onCategory={onCategory}
	                 searchSelected={onSearchSelected}
	                 minPriceSelected={onMinPrice}
	                 maxPriceSelected={onMaxPrice}/>
	                 
	         <UserButt/>
	         
	         <ItemsList setCurrentId={setCurrentId} 
	                    opened={opened} setOpened={setOpened}
	                    itemCategory={itemCategory} itemSearch={itemSearch}
	                    itemPrice={itemPrice}
	                    />
	           </AuthContext.Provider>
	       </>
	      )
	}
