import React from 'react'
import {connect} from 'react-redux'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'

import {useDispatch, useSelector} from 'react-redux'

import useStyles from './styles'
import {createPost, updatePost} from '../../actions/postact'

const Form =({currentId, setCurrentId})=>{
	const [postData, setPostData] = React.useState({
	        data: ''})

	const post = useSelector((state)=>
		  currentId?state.posts.find((p)=>p._id===currentId):null)
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

    React.useEffect(()=>{
    	if(post) setPostData(post)
    }, [post])
    
    const clear =()=>{
     setCurrentId(null)
     setPostData({ data: ''})

	}

	const handleSubmit =(e)=>{
       e.preventDefault()

       if(currentId === null){
          dispatch(createPost({...postData, name: user?.result?.name}))
          clear()
       }else{ 
       	  dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))
          clear()
          }
      }
      if(!user?.result?.name){

      	return(
      		<Paper className={classes.paper}>
      		  <Typography variant="h6" align="center">
              Please Sign In to add your own memory
      		  </Typography>
      		</Paper>
      		)
      }
	return(
       <Paper className={classes.paper}>
         <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
		   <Typography variant="h6">{!currentId?'Creating':'Editing'} a request</Typography>
           <TextField name="data" variant="outlined" label="data" 
		              fullWidth value={postData.data}
    onChange={(e)=>setPostData({...postData,data: e.target.value})}/>

		 <Button 
		      className={classes.buttonSubmit} variant="contained"
		      color="primary" size="large" type="submit" fullWidth>
		 Submit</Button>
		 <Button 
		      variant="contained"  color="secondary" 
		      size="small" onClick={clear} fullWidth>
		 Clear</Button>
		 </form>
	   </Paper>
		)
}
export default connect(null, {Form})(Form)