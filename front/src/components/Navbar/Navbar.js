import React from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { AppBar, Typography, Button, Toolbar, Avatar} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import memories from '../../images/memories.png'
import useStyles from './styles'

const Navbar =()=>{
  const classes = useStyles()
  const [user, setUser] = React.useState(
            JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const logout =()=>{
    dispatch({type: 'LOGOUT'})
    navigate(0)
    setUser(null)
  }


  React.useEffect((user, logout)=>{
    const token = user?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  return(
   <AppBar 
          className={classes.appBar}
          position="static"
          color="inherit">
        <div className={classes.brandContainer}>
          <Typography 
             element={Link} to="/"
             className={classes.heading}
             variant="h2" 
             align="center"> Requests
          </Typography>
           <img
               className={classes.image}
               src={memories} 
               alt="memories"
               height="60" />
        </div>
          <Toolbar className={classes.toolbar}>
            {user?(<div className={classes.profile}>
              <p> {user.name}</p>
                     
                      <Button 
                              variant="contained" 
                              className={classes.logout}
                              color="secondary"
                              onClick={logout}
                        >Logout</Button>
                   </div>)
                 : (
                 <Link className={classes.link} to="/auth">
                   <Button variant="contained" color="primary"
                    >Sign In</Button>
                 </Link>
                 )}
        </Toolbar>
      </AppBar>
     
  )
}
export default Navbar