import React, {createContext, useContext} from 'react'

import {Cart} from './Units/Cart'
import {TheBar} from './Units/TheBar'
import {Filter} from './Units/Filter'
import {ItemsList} from './Units/ItemsList'

import {AuthForm} from './Units/AuthForm'
import {ItemForm} from './Units/ItemForm'
import {MailForm} from './Units/CartForm'

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
	         <MailForm/>
	         
	         <TheBar currentId={currentId} setCurrentId={setCurrentId}
	                 opened={opened} setOpened={setOpened}/>
	         <AuthForm/>
	         <ItemForm currentId={currentId} setCurrentId={setCurrentId} />     
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
