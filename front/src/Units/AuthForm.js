import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signUp} from '../Redux/authSlice'

const initialState = {name: '', email: '', password: '', confPass: ''}

export const AuthForm = () => {
	const dispatch = useDispatch()
	const authData = useSelector(state => state.auth.authData)
	const [source, setSource] = React.useState(initialState)
	const handSubmit =(e)=> {
		e.preventDefault()
		dispatch(signUp(source))
		}
	console.log(authData)
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	 return(
	 <section>
	 <h2>Registration</h2>
	<form>
	 <label>Name:</label>
	 <input name='name'
	 onChange={handChange}/>
	 
	 <label>Email:</label>
	 <input name='email'
	 onChange={handChange}/>
	 
	 <label>Password:</label>
	 <input name='password'
	 onChange={handChange}/>
	 
	 <label>Confirm:</label>
	 <input name='confPass'
	 onChange={handChange}/>
	 
	 <button onClick={handSubmit}>Save</button>
	</form>
	 </section>
	 )
	}
