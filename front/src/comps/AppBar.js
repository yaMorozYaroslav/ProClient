import React from 'react'
import {LOGOUT} from '../tools/consts'
import {Collapse, Button, Navbar, NavbarBrand, Nav, NavItem, Container} from 'reactstrap'
import decode from 'jwt-decode'
import {useDispatch, connect} from 'react-redux'
import Auth from './Auth'
import Filler from './Filler'
import List from './List'

export const AppBar =(props)=> {
	const [user, setUser] = React.useState(
		        JSON.parse(localStorage.getItem('profile')))
	const [currentId, setCurrentId] = React.useState(null)
	            const dispatch = useDispatch()
	            const logout =()=>{
	            	dispatch({type: LOGOUT})
	            	setUser(null)
	            }
	        React.useEffect(()=>{
	        	const token = user?.token
	        	console.log(token)
	        	if(token){
	        		const decodedToken = decode(token)
	        		if(decodedToken.exp * 1000 < new Date().getTime()) logout()
	        	    
	        	}
	        	setUser(JSON.parse(localStorage.getItem('profile')))
	        },[props.isAuth])
	        //console.log(props.isAuth)
	return(<>
		    <Navbar color="black" dark-expand="sm" className="mb-0">
		     <Container>
		      <NavbarBrand href="/">List of Goods</NavbarBrand>
		      <p style={{color: 'green'}} >{user?`Nice to meet you, ${user.result.name}. ^^`
		          :'Please, authorize to add your item.'}</p>
            <div style={{display: 'flex'}}>
              <Auth />
              <Button 
                onClick={logout}
                style={{marginLeft: '5px', marginRight: '5px'}}
                >Logout</Button>
              <Filler currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
		      </Container>
		     </Navbar>
		     <List/>
		  </>)
}
const mapState =state=>{
	return{
		isAuth: state.auth.authData
	}
}
export default connect(mapState, null)(AppBar)