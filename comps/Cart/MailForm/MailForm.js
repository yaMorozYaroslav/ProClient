import React from 'react'
import emailjs from '@emailjs/browser'
import * as S from './mail-form.styled'

export const MailForm =({setOpen, cartItems, clearCart, push})=> {
    const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', delivery_method:'',
		                                        user_region:'', user_city:'',
		                                        post_devision:'', user_date:'',
		                                        items:''})
	const form = React.useRef()
	const handChange = (e) => setSource({...source, [e.target.name]: e.target.value})
	const pickUp = source.delivery_method === 'pick up'
	const postOffice = source.delivery_method === 'post office'
	const template = pickUp?'template_gf9ayyc':'template_43tp6mb'
	console.log(pickUp)
	//~ const remover = 
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', template, form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
				e.target.reset()
		clearCart()
		localStorage.removeItem('cart')
		setOpen(false)
		push('/')
	}
	React.useEffect(()=>{
	  //~ if(cartItems && source.items.length !== cartItems.length)
	         const remains = cartItems.map(({photo, creator, ...rest})=>  rest)
	         const muscles = remains.map(item => ({...item, $:'###'}))
		     setSource({...source, items: JSON.stringify(muscles)})
		},[])
		console.log(cartItems.length, source.items.length)
		console.log(source.items)
	return  <><S.Mailer ref={form}
	                    onSubmit={sendEmail}>
	  
	           <S.Input onChange={handChange} placeholder='Name' 
	                        name='user_name'  required/><br/>
	           <S.Input onChange={handChange} placeholder='Email' 
	                        name='user_email' required/><br/>
	           <S.Input onChange={handChange} placeholder='Phone Number' 
	                       name='user_phone' required /><br/>
	           <S.Select onChange={handChange} name='delivery_method' required>
	               <S.Option value='' hidden={source.delivery_method}>
	                                          Choose Delivery Method</S.Option>
	               <S.Option value='pick up'>Pick Up</S.Option>
	               <S.Option value='post office'>Post Office</S.Option>
	           </S.Select>
	           
	           {pickUp&&<S.Input name='user_date' onChange={handChange} 
				                 placeholder='when will you come?' required/>}
			   {postOffice&&<>
				          <S.Input onChange={handChange} name='user_region'
				                   placeholder='Region' required/>
				          <S.Input onChange={handChange} name='user_city'
				                   placeholder='City' required/>
				          <S.Input onChange={handChange} name='post_devision'
				                   placeholder='Post Devision' required/>
				          </>}
	           
	       <br />
	             <S.Textarea readOnly value={source.items} name='items'required/>
	             <S.Button type='submit'>Place The Order</S.Button>
	             <S.Button type="button" onClick={()=>setOpen(false)}>Close</S.Button>
	                 </S.Mailer></>                   
		                    }
