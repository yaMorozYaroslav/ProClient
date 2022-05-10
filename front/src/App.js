import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from './actions/itemAct'

//import useStyles from './styles'

export const App =()=> {
 const dispatch = useDispatch()
 const items = useSelector(state => state.posts)
 React.useEffect(()=>{
   dispatch(getPosts())
 },[])
 console.log(items)
   return <p>Hello</p>
    }
