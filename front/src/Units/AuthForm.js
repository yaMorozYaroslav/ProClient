import React from 'react'
import {useDispatch} from 'react-redux'

//import {signUp, signIn} from '../Redux/authSlice'
//import {signUp, signIn} from '../Context/User/UserState'
import {UserContext} from '../Context/Contexts'

const initialState = {name: '', email: '', password: '', confPass: ''}

export const AuthForm = () => {
	
	const {userData, signUp, signIn} = React.useContext(UserContext)
	
	const [source, setSource] = React.useState(initialState)
	const [registered, setRegistered] = React.useState(false)
	
	
	const handSubmit =(e)=> {
		e.preventDefault()
		if(!registered && source.password === source.confPass){
			                                  signUp(source)}
        if(registered)signIn(source)
	}
	
	React.useEffect(()=>{
		//const isNew =  userData !== JSON.parse(localStorage.getItem('profile'))
		//if(isNew){
		//if(userData.length > 0)console.log(userData, JSON.parse(localStorage.getItem('profile')))
		//console.log(Object.keys(userData).length === 0, JSON.parse(localStorage.getItem('profile')))
		if(Object.keys(userData).length > 0){
		  localStorage.setItem('profile', JSON.stringify(userData))
          console.log(userData, JSON.parse(localStorage.getItem('profile')))
		  console.log(Object.keys(userData))}
		},[userData])

	
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
