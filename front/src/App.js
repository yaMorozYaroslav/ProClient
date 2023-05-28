import React from 'react'

import {Cart} from './Units/Cart'
import {TheBar} from './Units/TheBar'
import {Filter} from './Units/Filter'
import {ItemsList} from './Units/ItemsList'

import {AuthForm} from './Units/AuthForm'
import {ItemForm} from './Units/ItemForm'
import {MailForm} from './Units/MailForm'

import {ItemState} from './Context/Item/ItemState'
import {UserState} from './Context/User/UserState'
import {OpenState} from './Context/Open/OpenState'
import {FiltState} from './Context/Filter/FiltState'
import {CartState} from './Context/Cart/CartState'


export const App =()=> {
	
	
	return (
	       <>
	       <UserState>
	       <ItemState>
	       <OpenState>
	       <FiltState>
	       <CartState>
	       
	         <Cart/>
	         <TheBar/>
	         <MailForm/>
	         <AuthForm/>
	         <ItemForm/>     
	         <Filter  /> 
	         <ItemsList />
	         
	           </CartState>
	           </FiltState>
	           </OpenState>
	           </ItemState>
	           </UserState>
	       </>
	      )
	}
