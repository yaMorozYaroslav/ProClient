import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import emailjs from '@emailjs/browser'
	
export const CartForm =()=> {
	
	const [forEmail, setForEmail] = React.useState([])
	
	const inCart = (useSelector(state => state.cart.cart))
	
	React.useEffect(()=>{
		setForEmail(JSON.stringify(inCart))
		console.log(forEmail)
		},[forEmail, inCart])
	
	
	return <><textarea readOnly value={forEmail}></textarea></>
	}
