import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signUp, setData} from '../Redux/authSlice'

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
	
	
	//if(authData !== profile)dispatch(setData('dick'))
	
	React.useEffect(()=>{
	if(authData.length)localStorage.setItem('profile', JSON.stringify(authData[0]))
	
	if(JSON.stringify(authData[0])!==JSON.stringify(profile)&&
	   JSON.stringify(profile).length > 4)
	  dispatch(setData(profile))
	  
	console.log(authData[0])
		},[authData, dispatch, profile])
	
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
