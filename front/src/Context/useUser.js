import {useContext} from 'react'
import {AuthContext} from '../App'

import {auth} from '../api'

export const UseUser = () => {
	const {user, setUser} = useContext(AuthContext)
        if(user !== null)console.log(user)
        
    const login = async () => {
	  const result = await auth({email: 'ya.moroz@gmail.com', password: 'HorHor'})
	  localStorage.setItem('profile', JSON.stringify(result.data))
      setUser(result.data);
      if(user !== null) console.log(user)
  }; 
  return <button onClick={login}>Login</button>
		}
	
	
