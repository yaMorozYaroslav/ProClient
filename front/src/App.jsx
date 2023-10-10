import React from 'react'

import {Cart} from './Units/Cart'
import {TheBar} from './Units/TheBar'
import {Filter} from './Units/Filter'
import {ItemsList} from './Units/ItemsList'

import {AuthForm} from './Units/AuthForm'
import {ItemForm} from './Units/ItemForm'
import {MailForm} from './Units/MailForm'

import {AllTheStates} from './Context/AllTheStates'

export const App =()=> {
	
	
	return (
	       <>
	       <AllTheStates>
	         <Cart/>
	         <MailForm/>
	         <TheBar/>
	         <AuthForm/>
	         <ItemForm/>     
	         <Filter  /> 
	         <ItemsList />
	       </AllTheStates>
	       </>
	      )
	}
