import React from 'react'
import decode from 'jwt-decode'

import {AuthForm} from './AuthForm'
import {ItemForm} from './ItemForm'

import {UserContext} from '../Context/Contexts'
import {UserState} from '../Context/User/UserState'


export const TheBar =({currentId, setCurrentId, opened, setOpened})=> {
	//const dispatch = useDispatch()
	const {userData, logout} = React.useContext(UserContext)
	//const authData = useSelector(state => state.auth.authData)
	const profile = JSON.parse(localStorage.getItem('profile'))
	
	const handLogout =(e)=> {
		e.preventDefault()
		logout()
		localStorage.removeItem('profile')
		}
React.useEffect(()=>{
	            let token
	        	if(profile)token = profile.token
	        	if(token){
	        		const decodedToken = decode(token)
	        		if(decodedToken.exp * 1000 < new Date().getTime()){
	        		 //logout()
	        		 //localStorage.removeItem('profile')
	        		 alert('Token has expired')
	              }
	        	}
	        },[userData, profile])
	        
    let userKeys
	if(profile)userKeys = Object.keys(profile)
	if(!profile)userKeys = []
	
	return <>
	       <UserState>
	        {!userKeys.length && opened.auth && <><AuthForm/></>}
	
	        {userKeys.length
				?<><button  onClick={()=>setOpened({...opened, item:true})}>addItem</button>
				   <button  onClick={handLogout}> logout </button></>
				:null}
			{!opened.auth && !userKeys.length && <>
				         <h2>SignIn to Add an Item</h2>
				         <button onClick={()=>setOpened({...opened, auth:true})}>SignIn</button>
				</>}
		    {userKeys.length > 0 && opened.item && 
			         <ItemForm  opened={opened} setOpened={setOpened} currentId={currentId} setCurrentId={setCurrentId}/>}
	       </UserState>
	       </>
	}
