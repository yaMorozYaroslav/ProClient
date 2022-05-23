import React from 'react'
import {LOGOUT} from '../tools/consts'
import {Button, Navbar, NavbarBrand, Container} from 'reactstrap'
import decode from 'jwt-decode'
import {useDispatch, connect} from 'react-redux'
import Auth from './Auth'
import Filler from './Filler'
import List from './List'
import Solo from './Solo'

export const AppBar =(props)=> {

	const dispatch = useDispatch()
	const [user, setUser] = React.useState(
		        JSON.parse(localStorage.getItem('profile')))

	const [currentId, setCurrentId] = React.useState(null)
	const [soloId, setSoloId] = React.useState(null)
  const logout =()=>{
		            dispatch({type: LOGOUT})
	            	setUser(null)
	            }
	
	React.useEffect(()=>{
	        	const token = user?.token
	        	if(token){
	        		const decodedToken = decode(token)
	        		if(decodedToken.exp * 1000 < new Date().getTime()){
	        		  dispatch({type: LOGOUT})
	            	setUser(null)
	            }
	        	}
	        	setUser(JSON.parse(localStorage.getItem('profile')))
	        },[props.isAuth, currentId, user?.token, dispatch])
	return(<>
		    <Navbar color="black" dark-expand="sm" className="mb-0">
		     <Container>
		      <NavbarBrand href="/" style={{fontSize: '25px'}}>List of Goods</NavbarBrand>
		      <p style={{color: 'green', fontSize: '20px'}} >{user?
		      	  `Nice to meet you, ${user.result.name}. ^^`
		          :'Please, authorize to add your item.'}</p>

            <div style={{display: 'flex'}}>
              <Auth />
              <Button 
                onClick={logout}
                color="danger"
                style={{marginLeft: '5px', marginRight: '5px'}}
                >Logout</Button>
              <Filler currentId={currentId} setCurrentId={setCurrentId}/>
              <Solo soloId={soloId} setSoloId={setSoloId}/>
            </div>
		      </Container>
		     </Navbar>
		     <List setCurrentId={setCurrentId} setSoloId={setSoloId}/>
		  </>)
}
const mapState =state=>{
	return{
		isAuth: state.auth.authData
	}
}
export default connect(mapState, null)(AppBar)