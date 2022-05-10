import React from 'react'
//import {connect} from 'react-redux'
import {fetchItems} from './reducers/itemSlice'
import {useDispatch, useSelector} from 'react-redux'


export const App =()=>{
	  const loading = useSelector(state=>state.items.status)
	  const items = useSelector(state=>state.items.items)
      const dispatch = useDispatch()
      React.useEffect(()=>{
      	
      dispatch(fetchItems())
      	
        },[dispatch])
      console.log(items)
      return <p>HEllo</p>
}