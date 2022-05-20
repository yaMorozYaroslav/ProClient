import React from 'react'
import {CardGroup } from 'reactstrap'
import {useDispatch, useSelector, connect} from 'react-redux'
import {getItems} from '../actions/itemAct'
import Item from './Item'
const List =({setCurrentId})=> {
	const dispatch = useDispatch()
    const {items, loading} = useSelector(state=>state.items)
    const isAuth = useSelector(state=>state.auth)
    console.log(isAuth)
	React.useEffect(()=>{
		dispatch(getItems())
	}, [dispatch])
  if(!loading){console.log(loading)}
	if(loading)return 'Please, wait while I wake up the server. It takes less than two minutes.'
	return(
       <CardGroup style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr'}}>
       {items?items.map(item=>(<Item key={item._id} item={item} setCurrentId={setCurrentId}/>)):null}
        
       	</CardGroup>
		)
}

export default List