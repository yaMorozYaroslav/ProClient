import React from 'react'
import decode from 'jwt-decode'

import {UserContext, OpenContext} from '../Context/Contexts'


export const TheBar =()=> {
	
	const [openAlert, setOpenAlert] = React.useState(false)
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
		if(userKeys.length === 0){
			setOpenAlert(true)
			setTimeout(()=>setOpenAlert(false),3000)}
		}
		
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid black'
			setTimeout(() => e.target.style.border = '2px solid grey', 1000)
			}
	const alert = <p style={{'position':'absolute', 'fontSize':'28px',
		                     'left':'500px', 'border':'3px solid red'}}>Login to add an item.</p>
	
	const button = { 'height':'50px',
		             'cursor':'pointer',
		             'fontSize':'25px',
		             'border':'2px solid grey',
		             'margin':'10px'}
	
	return <>
	      {userKeys.length > 0 && <h1 style={{'position':'absolute', 'left':'200px'}}>Hello, {userData.result.name} :)</h1>}
	      {openAlert && !authForm ? alert : null} 
	      <div style={{'marginLeft':'60%', 'display': 'flex'}}>
	        {!authForm && <button onMouseOver={changeBorder} style={button} onClick={onAddItem}>AddItem</button>}
	   
	        {userKeys.length > 0 &&
				   <button  onMouseOver={changeBorder} style={{...button, 'background':'pink'}} onClick={handLogout}> Logout </button>}
			{!authForm && !userKeys.length && <div >
				         <button onMouseOver={changeBorder} style={button} onClick={openAuthForm}>SignIn</button>
				</div>}   
	       </div></>
	}
