import React from 'react'
import {getItems} from '../actions/itemAct'
import {useDispatch} from 'react-redux'

const List =()=> {
	const [currentId, setCurrentId] = React.useState(null)
	const dispatch = useDispatch()

	React.useEffect(()=>{
		dispatch(getItems())
	}, [dispatch])
}