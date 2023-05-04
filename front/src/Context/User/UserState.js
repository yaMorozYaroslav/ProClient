//import {UserReducer} from '../UserReducer'
import React from 'react'
import {register, auth} from '../../api'
import {UserContext} from '../Contexts'
import {UserReducer} from './UserReducer'
import {AUTH, LOGOUT} from './UserTypes'

export const UserState = ({children}) => {
	//const UserContext = React.useContext(UserContext)
   const initialState = {userData: []}

   const [state, dispatch] = React.useReducer(UserReducer, initialState)
	
	
	const signUp = async(source) => {
		const {data} = await register(source)
        dispatch({type: AUTH, payload: data})
		}
	const signIn = async(source) => {
		try{
		const {data }= await auth(source)
		dispatch({type: AUTH, payload: data})
	}catch(err){console.log(err)}
		}
    const logout = () => {
		dispatch({type: LOGOUT})
   		console.log(state.userData)
		}
	return (

    <UserContext.Provider
      value={{userData: state.userData, signUp, signIn, logout}}>
      {children}
    </UserContext.Provider>
  )
	}
