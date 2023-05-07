//import {UserReducer} from '../UserReducer'
import React from 'react'
import {register, auth} from '../../api'
import {UserContext} from '../Contexts'
import {UserReducer} from './UserReducer'
import {AUTH, LOGOUT} from './UserTypes'

export const UserState = ({children}) => {
	
   const initialState = {item: false, auth: false, mail: false}
   
   const [state, dispatch] = React.useReducer(UserReducer, initialState)
	
	
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

   <UserContext.Provider
     value={{state, openAuthForm, closeAuthForm,
		    openAuthForm, closeAuthForm, openAuthForm, closeAuthForm}}>
      {children}
    </UserContext.Provider>
  )
	}
