import React from 'react'
import {useDispatch} from 'react-redux'
import {getItems} from './actions/itemAct'

export const App =()=> {
     const dispatch = useDispatch()

React.useEffect(()=>{
	dispatch(getItems())
}, [dispatch])   
return <p>Hello</p> 
}