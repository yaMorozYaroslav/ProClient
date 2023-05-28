import React from 'react'
import decode from 'jwt-decode'

import {UserContext, OpenContext} from '../Context/Contexts'


export const TheBar =()=> {
	
	//const {currentId, setCurrentId} )= React.useContext(ItemContext
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
	        	if(userData)token = userData.token
	        	if(token){
	        		const decodedToken = decode(token)
	        		console.log(decodedToken)
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
	
	const onAddItem = () => {
		if(userKeys.length > 0)openItemForm()
		if(userKeys.length === 0)alert('SignIn To Add An Item')
		}
	
	const button = { 'cursor':'pointer',
		             'fontSize':'25px',
		             'border':'1px solid black',
		             'margin':'10px'}
	
	return <div style={{'marginLeft':'70%', 'display': 'flex'}}>
	        {!authForm && <button  style={button} onClick={onAddItem}>AddItem</button>}
	        {userKeys.length > 0 &&
				<div>		   
				   <h2>Hello, {userData.result.name}</h2>
				   <button  style={button} onClick={handLogout}> Logout </button></div>
				}
			{!authForm && !userKeys.length && <div >
				         <button style={button} onClick={openAuthForm}>SignIn</button>
				</div>}    
	       </div>
	}
