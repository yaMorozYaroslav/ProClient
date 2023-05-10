import React, {createContext, useContext} from 'react'

//import {UseUser} from './Context/useUser'

import {Cart} from './Units/Cart'
import {CartForm} from './Units/CartForm'
import {TheBar} from './Units/TheBar'
import {Filter} from './Units/Filter'
import {ItemsList} from './Units/ItemsList'

import {ItemState} from './Context/Item/ItemState'
import {UserState} from './Context/User/UserState'
import {OpenState} from './Context/Open/OpenState'
import {FiltState} from './Context/Filter/FiltState'


export const App =()=> {
	
	const [currentId, setCurrentId] = React.useState(null)
	const [opened, setOpened] = React.useState({item: false, auth: false, cart: false, mail: false})
	
	const [itemCategory, setItemCategory] = React.useState('all')
	const [itemSearch, setItemSearch] = React.useState('')
	const [itemPrice, setItemPrice] = React.useState({min:0, max:0})
	
	
		
	
	return (
	       <>
	       <UserState>
	       <ItemState>
	       <OpenState>
	       <FiltState>
	         <Cart opened={opened} setOpened={setOpened}/>
	         <CartForm opened={opened} setOpened={setOpened}/>
	         
	         <TheBar currentId={currentId} setCurrentId={setCurrentId}
	                 opened={opened} setOpened={setOpened}/>
	                 
	         <Filter />
	           
	         <ItemsList setCurrentId={setCurrentId} 
	                    opened={opened} setOpened={setOpened}
	                    />
	           </FiltState>
	           </OpenState>
	           </ItemState>
	           </UserState>
	       </>
	      )
	}
