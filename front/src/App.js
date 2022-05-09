import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'

import {getPosts} from './actions/postact'

import useStyles from './styles'

export const App =()=> {
    const [currentId, setCurrentId] = React.useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getPosts())
    }, [ dispatch])
  return(<p>Hello</p> )
}