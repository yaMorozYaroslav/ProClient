//import {UserReducer} from '../UserReducer'
import React from 'react'
import {register, auth} from '../../api'
import {UserContext} from '../Contexts'
import {UserReducer} from './UserReducer'
import {AUTH, LOGOUT, FROM_STORAGE, ERROR, NO_ERROR} from './UserTypes'

export const UserState = ({children}) => {
	
   const initialState = {userData: {}, loading: false, error: null}
   
   const [state, dispatch] = React.useReducer(UserReducer, initialState)
	
	
	const signUp = async(source) => {
		try{
		const {data} = await register(source)
        dispatch({type: AUTH, payload: data})
		}catch(err){dispatch({type: ERROR, payload: err})}
	}
		
	const signIn = async(source) => {
		try{
		dispatch({type: 'START_LOADING'})
		const {data}= await auth(source)
		dispatch({type: AUTH, payload: data})
		dispatch({type: 'END_LOADING'})
	}catch(err){dispatch({type: ERROR, payload: err})}
		}
	const setFromStorage =(source)=> {
		dispatch({type: FROM_STORAGE, payload: source})
		}
		
    const logout = () => {
		dispatch({type: LOGOUT})
		}
	const clearError = () => dispatch({type: NO_ERROR})
	
	return (

    <UserContext.Provider
      value={{userData: state.userData, error: state.error, signUp,
		                signIn, logout, setFromStorage, clearError}}>
      {children}
    </UserContext.Provider>
  )
	}
