import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {AuthForm} from './AuthForm'
import {ItemForm} from './ItemForm'

import {setData} from '../Redux/authSlice'



export const TheBar =({currentId, setCurrentId})=> {
	const dispatch = useDispatch()
	
	const authData = useSelector(state => state.auth.authData)
	const profile = JSON.parse(localStorage.getItem('profile'))
	
React.useEffect(()=>{
	if(authData.length && JSON.stringify(authData[0]) !== JSON.stringify(profile))
	   localStorage.setItem('profile', JSON.stringify(authData[0]))
	
	if(JSON.stringify(authData[0]) !== JSON.stringify(profile)&&
	   JSON.stringify(profile).length > 4)dispatch(setData(profile))
	  
	console.log(authData[0])
	//console.log((JSON.stringify(authData[0]) !== JSON.stringify(profile)))
		},[authData, dispatch, profile, localStorage])
	return <>{!authData.length && <><ItemForm currentId={currentId} setCurrentId={setCurrentId}/>
	         <AuthForm/></>}
	        {authData.length?<button onClick={() => localStorage.removeItem('profile')}> logout </button>:null}
	       </>
	}
