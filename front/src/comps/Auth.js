import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signin, signup} from '../actions/authAct'

const initialState = {name: '', email: '', password: ''}

const Auth =()=>{
	const [isSignup, setIsSignup] = React.useState(false)
	const [formData, setFormData] = React.useState(initialState)

	const dispatch = useDispatch()
	//const navigate = useNavigate()

	const handleSubmit =(e)=>{
		e.preventDefault()
		if(isSignup){
			dispatch(signup(formData))
		}else{
			dispatch(signin(formData))
		}
	}
	const handleChange =(e)=>{
		setFormData({...formData, [e.target.name]: e.target.value})
	}
	const switchMode =()=> {setIsSignup((prevIsSignup)=>!prevIsSignup)}
	return(<>
      <section>
         <label>name</label>
         <textarea name='name' label='name' type='text' onChange={handleChange}/>
         <label>email</label>
         <textarea name='email' label='email' type='email' onChange={handleChange}/>
         <label>password</label>
         <textarea name='password' label='password' type='password' onChange={handleChange}/>
         <button onClick={handleSubmit}>submit</button>
         <button onClick={switchMode}>{isSignup?'Do':'Not'}</button>
      </section>
		</>)
}
export default Auth