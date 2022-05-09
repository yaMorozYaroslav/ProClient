import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {connect} from 'react-redux'
import {getItems} from './actions/itemAct'

const App =()=> {
     const dispatch = useDispatch()
     const items = useSelector((state)=> state.items)
React.useEffect(()=>{
	dispatch(getItems())
	console.log(items)
}, [dispatch])   
return <p>Hello</p> 
}
export default connect(null, {getItems})(App)