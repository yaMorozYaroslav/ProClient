import React, {useRef} from 'react'
import {useSelector} from 'react-redux'
import emailjs from '@emailjs/browser'
import {Response} from './Response'
import {OpenContext, CartContext} from '../Context/Contexts'
	
export const MailForm =()=> {
	
	const [forEmail, setForEmail] = React.useState([])
	
	const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', items:[]})
    const [response, setResponse] = React.useState()
	
	const {mailForm, closeMailForm} = React.useContext(OpenContext)
	
	const {cartItems, clearCart} = React.useContext(CartContext)
	
    //const inCart = (useSelector(state => state.cart.cart))
	
	const form = useRef()
	
	const handChange = (e) => setSource({...source, [e.target.name]: e.target.value}) 
	
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_gf9ayyc', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
		console.log(source)
	    setResponse(source)
				e.target.reset()
		clearCart()
		localStorage.removeItem('cart')
		closeMailForm()
	}
	console.log(response)
	
	const onClearCart =()=> {
			clearCart()
			localStorage.removeItem('cart')
			}
	const itemsNoPhoto = cartItems.map(({photo, ...rest})=> rest)
	
	React.useEffect(()=>{
	  if(itemsNoPhoto && source.items.length !== itemsNoPhoto.length)
		     setSource({...source, items: itemsNoPhoto})
		},[source, itemsNoPhoto])
	//console.log(source.items.length, itemsNoPhoto.length)
	
	//const Response = ({response}) => <h6>{JSON.stringify(response.items)}</h6>
		
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
	
	const  input = {'fontSize':'15px', 'margin': '5px'}
	const button = {'fontSize':'20px', 'margin': '5px'}
	
	return <>
	{response && <Response response={response}/>}
	<form 
	      ref={form} onSubmit={sendEmail} 
	      style={{'display': !mailForm ?'none':'block', 'padding':'20px', 'background':'pink',
			      'fontSize':'20px', 'margin': '5px', 'textAlign':'center'}}>
	  <h3>Your contacts:</h3>
	  <label htmlFor='Name'>Name</label>
	    <input style={input} type='text' onChange={handChange} placeholder='Name' name='user_name'  required/>
	  <label htmlFor='Email'>Email</label>
	    <input style={input} type='email' onChange={handChange} placeholder='Email' name='user_email' required/>
	  <label htmlFor='PhoneNumber'>PhoneNumber</label>
	    <input style={input} type='number' onChange={handChange} placeholder='PhoneNumber' name='user_phone' required />
	
	   <textarea readOnly value={source.items} onChange={handChange} name='items' style={{'display':'none'}} required/>
	   <br />
	<button onMouseOver={changeBorder} style={button} type='submit'>SendMail</button>
	<button onMouseOver={changeBorder} style={button} onClick={closeMailForm}>CloseForm</button>
	</form>
	      </>
	}
