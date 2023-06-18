import React, {useContext} from 'react'

import {UserContext} from '../Context/Contexts'
import {OpenContext} from '../Context/Contexts'

const initialState = {name: '', email: '', password: '', confPass: ''}

export const AuthForm = () => {
	
    const {userData, signIn, clearError,
		   signUp, setFromStorage, error} = useContext(UserContext)
		   
	const {authForm, closeAuthForm} = useContext(OpenContext)
	
	const [source, setSource] = React.useState(initialState)
	const [registered, setRegistered] = React.useState(false)
	
	const profile = JSON.parse(localStorage.getItem('profile'))
	
	const currentUser = (source) => Object.keys(source).length > 0
	
	const handSubmit =(e)=> {
		e.preventDefault()
		if(!registered)if(source.password === source.confPass){
			                                           signUp(source)
	   }else{alert('Passwords do not match.')}
        if(registered)signIn(source)        
	}
	// 
	
	React.useEffect(()=>{
		
		const shouldUpdateStorage = currentUser(userData) && 
		         JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateStorage){
		  localStorage.setItem('profile', JSON.stringify(userData))
		  }

		const shouldUpdateState = profile && currentUser(profile) &&
		         JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateState){
		setFromStorage(profile)
	    }
		},[userData, profile, setFromStorage])
		
   React.useEffect(()=>{
	   if(currentUser(userData) && authForm)closeAuthForm()
	   },[authForm, userData, closeAuthForm])
    
    if(error)alert(error)
	if(error)clearError() 
    
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
	
	const text = {'fontSize':'22px', 'margin':'5px'}
	const input = {'width':'200px'}
	const pointer = {'cursor':'pointer'}
	
	 return(
	 <section style={{'display': !authForm ?'none':'block', 'textAlign':'center'}}>
	 <h2>{!registered?'Registration':'Authentication'}</h2>
	<form style={text} onSubmit={handSubmit} id='form'>
	 <label>Email:</label>
	 <input style={{...text, ...input}} name='email'
	 onChange={handChange} required/>
	
	 <label>Password:</label>
	 <input style={{...text, ...input}} name='password'
	 onChange={handChange} required/>
	 
	 {!registered && (<>
	 <label>Name:</label>
	 <input style={{...text, ...input}} name='name'
	 onChange={handChange} required/>
	 
	 <label>ConfPass:</label>
	 <input style={{...text, ...input}} name='confPass'
	 onChange={handChange} required/>
	                   </>)}
	 <br/>              
	 <button style={text} onMouseOver={changeBorder} type='submit'>Save</button>
	</form>
	 <button style={{...text, ...pointer}} onMouseOver={changeBorder} onClick={()=>setRegistered(isRegistered => !isRegistered)}>
		 {!registered?'ToAuthentication':'ToRegistration'}
     </button>
     <button style={{...text, ...pointer}} onMouseOver={changeBorder} onClick={()=>closeAuthForm()}>CloseForm</button>
	 </section>
	 )
	}
