import React from 'react'
import decode from 'jwt-decode'

import {UserContext} from '../Context/Contexts'
import {OpenContext, ItemContext} from '../Context/Contexts'


export const TheBar =()=> {
	
	//const {currentId, setCurrentId} = React.useContext(ItemContext)
	const {userData, logout} = React.useContext(UserContext)
	
	const {authForm, openItemForm, openAuthForm} = React.useContext(OpenContext)
	//console.log(state)
	const profile = JSON.parse(localStorage.getItem('profile'))
	
	const removeProfile = () => localStorage.removeItem('profile')
	
	const handLogout =(e)=> {
		e.preventDefault()
		logout()
		removeProfile()
		}
		
    React.useEffect(()=>{
	            let token
	        	if(profile)token = profile.token
	        	if(token){
	        		const decodedToken = decode(token)
	        		if(decodedToken.exp * 1000 < new Date().getTime()){
	        		 logout()
	        		 removeProfile()
	        		 alert('Token has expired')
	              }
	        	}
	        },[userData, profile, logout])
	        
    let userKeys
	if(userData)userKeys = Object.keys(userData)
	if(!userData)userKeys = []
	
	
	return <>
	        {userKeys.length > 0 &&
				<><button  onClick={openItemForm}>addItem</button>
				   <button  onClick={handLogout}> logout </button></>
				}
			{!authForm && !userKeys.length && <>
				         <h2>SignIn to Add an Item</h2>
				         <button onClick={openAuthForm}>SignIn</button>
				<br/></>}

	      
	       </>
	}
