import React, {useContext} from 'react'

import {UserContext} from '../Context/Contexts'
import {OpenContext} from '../Context/Contexts'

const initialState = {name: '', email: '', password: '', confPass: ''}

export const AuthForm = () => {
	
    const {userData, signIn, signUp, setFromStorage} = useContext(UserContext)
	const {authForm, closeAuthForm} = useContext(OpenContext)
	
	const [source, setSource] = React.useState(initialState)
	const [registered, setRegistered] = React.useState(false)
	
	const profile = JSON.parse(localStorage.getItem('profile'))
	
	const handSubmit =(e)=> {
		e.preventDefault()
		if(!registered && source.password === source.confPass){
			                                  signUp(source)}
        if(registered)signIn(source)
        closeAuthForm()
	}
	
	React.useEffect(()=>{
		
		const shouldUpdateStorage = Object.keys(userData).length > 0 && 
		         JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateStorage){
		  localStorage.setItem('profile', JSON.stringify(userData))
		  }

		const shouldUpdateState = profile && 
		            Object.keys(profile).length > 0 &&
		            JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateState){
		setFromStorage(profile)
	    }
		},[userData])

	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	 return(
	 <section style={{'display': !authForm ?'none':'block'}}>
	 <h2>{!registered?'Registration':'Authentication'}</h2>
	<form id='form'>
	 <label>Email:</label>
	 <input name='email'
	 onChange={handChange}/>
	
	 <label>Password:</label>
	 <input name='password'
	 onChange={handChange}/>
	 
	 {!registered && (<>
	 <label>Name:</label>
	 <input name='name'
	 onChange={handChange}/>
	 
	 <label>ConfPass:</label>
	 <input name='confPass'
	 onChange={handChange}/>
	                   </>)}
	                   
	 <button onClick={handSubmit}>Save</button>
	</form>
	 <button onClick={()=>setRegistered(isRegistered => !isRegistered)}>
		 {!registered?'to authentication':'to registration'}
     </button>
	 </section>
	 )
	}
