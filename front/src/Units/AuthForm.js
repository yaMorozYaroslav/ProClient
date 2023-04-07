import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setData, signUp} from '../Redux/authSlice'

const initialState = {name: '', email: '', password: '', confPass: ''}

export const AuthForm = () => {
	const dispatch = useDispatch()
	const [source, setSource] = React.useState(initialState)
	const authData = useSelector(state => state.auth.authData)
	const [registered, setRegistered] = React.useState(false)
	const profile = JSON.parse(localStorage.getItem('profile'))
	const handSubmit =(e)=> {
		e.preventDefault()
		dispatch(signUp(source))
		}
	
	
	React.useEffect(()=>{
	if(authData.length)localStorage.setItem('profile', JSON.stringify(authData[0]))
	//console.log(authData)
	//dispatch(setData('dick'))
	console.log(authData)
		},[authData])
	
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
	 <button onClick={()=>setRegistered(isRegistered => !isRegistered)}>
		 {registered?'Authentication':'Registration'}
     </button>
	 </section>
	 )
	}
