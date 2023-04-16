import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
	
export const CartForm =()=> {
	
	const [forEmail, setForEmail] = React.useState([])
	
	const inCart = (useSelector(state => state.cart.cart))
	
	React.useEffect(()=>{
		console.log(inCart.length === 0)
		},[inCart])
	
	
	return <></>
	}
