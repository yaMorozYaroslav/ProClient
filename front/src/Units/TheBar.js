import React from 'react'
import decode from 'jwt-decode'

import {AuthForm} from './AuthForm'
import {ItemForm} from './ItemForm'

import {UserContext} from '../Context/Contexts'
import {OpenContext} from '../Context/Contexts'

import {UserState} from '../Context/User/UserState'
import {OpenState} from '../Context/Open/OpenState'

export const TheBar =({currentId, setCurrentId, opened, setOpened})=> {
	
	const {userData, logout} = React.useContext(UserContext)
	
	const {auth, openItemForm, openAuthForm} = React.useContext(OpenContext)
	//console.log(state)
	const profile = JSON.parse(localStorage.getItem('profile'))
	
	const handLogout =(e)=> {
		e.preventDefault()
		logout()
		localStorage.removeItem('profile')
		}
React.useEffect(()=>{
	            let token
	        	if(profile)token = profile.token
	        	if(token){
	        		const decodedToken = decode(token)
	        		if(decodedToken.exp * 1000 < new Date().getTime()){
	        		 logout()
	        		 localStorage.removeItem('profile')
	        		 alert('Token has expired')
	              }
	        	}
	        },[userData, profile, logout])
	        
    let userKeys
	if(profile)userKeys = Object.keys(profile)
	if(!profile)userKeys = []
	console.log(auth)
	
	return (<>
	       <UserState>
	       <OpenState>
	        {auth ? <AuthForm/> : null}
	
	        {userKeys.length
				?<><button  onClick={openItemForm}>addItem</button>
				   <button  onClick={handLogout}> logout </button></>
				:null}
			{!auth && !userKeys.length && <>
				         <h2>SignIn to Add an Item</h2>
				         <button onClick={openAuthForm}>SignIn</button>
				</>}
		    {userKeys.length > 0 && opened.item && 
			         <ItemForm  opened={opened} setOpened={setOpened} currentId={currentId} setCurrentId={setCurrentId}/>}
	       </OpenState>
	       </UserState>
	       </>)
	}
