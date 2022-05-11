import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from './actions/itemAct'
import {Form} from './Form'
import {Items} from './Items'
//import useStyles from './styles'

export const App =()=> {
 const dispatch = useDispatch()
 const items = useSelector(state => state.items)
 React.useEffect(()=>{
   dispatch(getItems())
 },[dispatch])
 console.log(items)
   return <><Form/><Items/></>
    }
