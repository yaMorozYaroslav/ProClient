//import {UserReducer} from '../UserReducer'
import React from 'react'
import {register, auth} from '../../api'
import {UserContext} from '../Contexts'
//import {AUTH} from '../UserTypes'

export const UserState = ({children}) => {
	const UserContext = React.useContext(UserContext)
	
	const [userData, setUserData] = React.useState(null)
	
	const signUp = async(source) => {
		const {data} = await register(source)
		setUserData(data)
		console.log(userData)
		}
	const signIn = async(source) => {
		const {data} = await auth(source)
		setUserData(data)
		console.log(userData)
		}
    const logout = () => {
		setUserData(null)
		console.log(userData)
		}
	return (

    <UserContext.Provider
      value={{userData, signUp, signIn, logout}}>
      {children}
    </UserContext.Provider>
  )
	}
