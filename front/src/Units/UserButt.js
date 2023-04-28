import {useContext} from 'react'
import {AuthContext} from '../App'

export const UserButt = () => {
	const {user, setUser} = useContext(AuthContext)
        if(user !== null)console.log(user)
        
    const handleLogin = () => {
      setUser('buly');
      if(user !== null) console.log(user)
  }; 
  return <button onClick={handleLogin}>Login</button>
		}
	
	
