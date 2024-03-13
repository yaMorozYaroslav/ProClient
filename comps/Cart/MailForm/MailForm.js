import React from 'react'
import emailjs from '@emailjs/browser'
import * as S from './mail-form.styled'
import {regionsGet, locationsGet, officesGet} from './requests'
import axios from 'axios'


export const MailForm =({servData, setOpen, cartItems, clearCart, push})=> {
	
    const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', delivery_method:'',
		                                        user_area:'', user_region:{},
		                                        user_location:'', post_office: '',
		                                        user_date:'', items:''})
		                                        
	const [selected, setSelected] = React.useState({regions: undefined,
		                                            locations: undefined,
		                                            offices: undefined })	 
	                                       
	const form = React.useRef()
	const handChange = (e) => setSource({...source, 
		                               [e.target.name]: e.target.value})
	const pickUp = source.delivery_method === 'pick up'
	const postOffice = source.delivery_method === 'post office'
	const template = pickUp?'template_gf9ayyc':'template_43tp6mb'
	
    function combArea(e){e.preventDefault();handChange(e);
	         const currRef = servData.filter(x => 
	                 x.name === e.target.value).map(({ref})=>ref)
	         regionsGet(currRef[0]).then(r=>{
				 console.log(r);
				 setSelected({...selected, regions: r.regionsAll})
				  })
	                 }
    function combRegion(e){e.preventDefault();handChange(e);
		     const currRef = selected.regions.filter(x =>
		             x.Description === e.target.value).map(({Ref})=>Ref)
		     locationsGet(currRef[0]).then(r=>{
				 console.log(r)
				 setSelected({...selected, locations: r.locationsAll})
				 })
		             }
    function combLocat(e){e.preventDefault();handChange(e);
		     const currRef = selected.locations.filter(x =>
		             x.Description === e.target.value).map(({Ref})=>Ref)
		     officesGet(currRef[0]).then(r=>{
				 console.log(r)
				 setSelected({...selected, offices: r.officesAll})
				 })
		             }
	//~ console.log(source)
	console.log(selected)
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
				                 
			   <S.Select onChange={combArea} name='user_area'>
			                                 {servData.map(({name, ref},i)=>
												<S.Option key={i} value={name}
												  >{name}</S.Option>)}
			   </S.Select>
			   
	     {selected.regions && 
			         <S.Select onChange={combRegion} name='user_region'>
			                    {selected.regions.map((region, i)=>
								  <S.Option key={i} value={region.Description}
								   >{region.Description}</S.Option>)}
			         </S.Select>}
			         
		 {selected.locations &&
			         <S.Select onChange={combLocat} name='user_location'>
			                {selected.locations.map((locat, i)=>
								  <S.Option disabled={locat.Warehouse === "0"}
								            key={i} value={locat.Description}
								   >{locat.Description}</S.Option>)}
                     </S.Select>}
                     
         {selected.offices &&
			         <S.Select onChange={handChange} name='post_office'>
			                {selected.offices.map((office, i)=>
								  <S.Option key={i} value={office.Description}
								  >{office.Description}</S.Option>)}
			         </S.Select> }                         		   
		
	           
	     <br />
	         <S.Textarea readOnly value={source.items} name='items' required/>
	         <S.Button type='submit'>Place The Order</S.Button>
	         <S.Button type="button" onClick={()=>setOpen(false)}>
	                                                          Close</S.Button>
	                 </S.Mailer></>                   
		                    }
