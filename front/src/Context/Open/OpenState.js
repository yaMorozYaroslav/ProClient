import React from 'react'
import {OpenContext} from '../Contexts'
import {OpenReducer} from './OpenReducer'
import {OPEN_ITEM, CLOSE_ITEM, 
	    OPEN_AUTH, CLOSE_AUTH, OPEN_MAIL, CLOSE_MAIL} from './OpenTypes'

export const OpenState = ({children}) => {
	
   const initialState = {item: false, auth: false, mail: false}
   
   const [state, dispatch] = React.useReducer(OpenReducer, initialState)
	
	
	const openItemForm = () => {
        dispatch({type: OPEN_ITEM})
		}
		
	const closeItemForm = () => {
        dispatch({type: CLOSE_ITEM})
		}
		
    const openAuthForm = () => {
        dispatch({type: OPEN_AUTH})
		}
		
	const closeAuthForm = () => {
        dispatch({type: CLOSE_AUTH})
		}
		
	const openMailForm = () => {
        dispatch({type: OPEN_MAIL})
		}
	const closeMailForm = () => {
        dispatch({type: CLOSE_MAIL})
		}
	return (

   <OpenContext.Provider
     value={{state, openItemForm, closeItemForm,
		    openAuthForm, closeAuthForm, openMailForm, closeMailForm}}>
      {children}
    </OpenContext.Provider>
  )
	}
