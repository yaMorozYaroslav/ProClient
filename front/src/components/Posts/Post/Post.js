import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

import useStyles from './styles'
import {useDispatch} from 'react-redux'

import {deletePost, likePost} from '../../../actions/postact'

export const Post =({post, setCurrentId})=>{
	const classes = useStyles()
	const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))

  

	return(
        <Card className={classes.card}>
           <CardMedia className={classes.media} component='div' title={post.data}/>
		<div className={classes.overlay}>
		    <Typography variant="h6">{post.name}</Typography>
		    <Typography variant="body2">{moment(post.date).fromNow()}</Typography>
		</div>
		<div className={classes.overlay2}>
		  {(user?.result?.googleId === post?.creator||
         	     user?.result?._id===post?.creator) && (
		  <Button 
		     style={{color: 'white'}} 
		     size="small" 
		     onClick={()=> setCurrentId(post._id)}>
           <MoreHorizIcon fontSize="medium" />
		   </Button>
		   )}
		</div>
		
		 <Typography className={classes.name} variant="h5" gutterBottom>{post.name}</Typography>
	  <CardContent>
		 
	  </CardContent>
	  <CardActions className={classes.cardActions}>
        
               <Button 
                 size="small"
                 color="primary" 
                 onClick={()=>dispatch(deletePost(post._id))}>
               <DeleteIcon fontSize="small" />
               Delete
         </Button>
	  </CardActions>
		</Card>
		)
}