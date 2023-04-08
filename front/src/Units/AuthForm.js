import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {signUp, signIn} from '../Redux/authSlice'


const initialState = {name: '', email: '', password: '', confPass: ''}

export const AuthForm = () => {
	
	const dispatch = useDispatch()
	const [source, setSource] = React.useState(initialState)
	const [registered, setRegistered] = React.useState(false)
	
	
	const handSubmit =(e)=> {
		e.preventDefault()
		if(!registered && source.password === source.confPass){
			                                  dispatch(signUp(source))}
        if(registered)dispatch(signIn(source))
	}

	
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	 return(
	 <section>
	 <h2>{!registered?'Registration':'Authentication'}</h2>
	<form>
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
