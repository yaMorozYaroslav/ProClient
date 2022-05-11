import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from './actions/itemAct'
import {Form} from './comps/Form'
import {Items} from './comps/Items'
import Auth from './comps/Auth'
//import useStyles from './styles'

export const App =()=> {
 const dispatch = useDispatch()
 const items = useSelector(state => state.items)
 React.useEffect(()=>{
   dispatch(getItems())
 },[dispatch])
 console.log(items)
   return <><Form/><Items/><Auth/></>
    }
