import React, {useRef} from 'react'
import {useSelector} from 'react-redux'
import emailjs from '@emailjs/browser'
	
export const CartForm =({opened, setOpened})=> {
	
	const [forEmail, setForEmail] = React.useState([])
	
	const inCart = (useSelector(state => state.cart.cart))
	
	const form = useRef()
	
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_gf9ayyc', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
				e.target.reset()
	}
	
	React.useEffect(()=>{
		setForEmail(JSON.stringify(inCart))
		//console.log(forEmail)
		},[forEmail, inCart])
	
	
	return <>
	<form 
	      ref={form} onSubmit={sendEmail} 
	      style={{'display': !opened.mail?'none':'block', 'padding':'20px', 'background':'pink'}}>
	
	  <label htmlFor='Name'>Name</label>
	    <input type='text' placeholder='Name' name='user_name'  required/>
	  <label htmlFor='Email'>Email</label>
	    <input type='email' placeholder='Email' name='user_email' required/>
	  <label htmlFor='PhoneNumber'>PhoneNumber</label>
	    <input type='number' placeholder='PhoneNumber' name='user_phone' required />
	
	   <textarea readOnly value={forEmail} name='items' style={{'display':'none'}} required/>
	
	<button type='submit'>Send</button>
	</form>
	      </>
	}
