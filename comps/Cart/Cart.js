'use client'
import React from 'react'
import {useCartContext} from '../../context/cart/CartState'
import * as S from './cart.styled'
import {useRouter} from 'next/navigation'
import {MailForm} from './MailForm/MailForm'
import {useTranslations} from 'next-intl'

export const Cart =({servData})=> {
	
	const t = useTranslations('First')
	const tc = useTranslations('Cart')
	
	const {cartItems, increase, decrease, 
		              removeFromCart, clearCart} = useCartContext()
		              
	const [open, setOpen] = React.useState(false)
	
	const {push} = useRouter()
	
	const increaser =(e, id)=>{e.preventDefault();increase(id)}  
	
	const cleaner = () => {clearCart();
		                   localStorage.removeItem('cart');
		                   setOpen(false);push('/')}
		                   
	const remover = (e, id) => {e.preventDefault()
		                        removeFromCart(id)
		                     if(cartItems.length === 1)cleaner()}
		
	function counter(){
		console.log(cartItems)
		let total = cartItems.reduce((accum, item) => 
		               {return accum += (item.price * item.quantity)},0)
		return total
		}

	return <S.Container>	
	
	    <S.CartList>{cartItems.map((item,index)=>
				 
		   <S.Thing key={item._id}> 
		      <S.Number>{index+1}.</S.Number>
              <S.StyledImage alt='' src={item.photo&&item.photo.length
				                      ?item.photo:'/next.svg'}
                              width={0} height={0} priority={true}/>
		        <S.Title>{item.title} </S.Title><br/>
		               
		        <S.Quantity>{tc('price')}: {item.price} <br/>
		                    {tc('quantity')}: {item.quantity}</S.Quantity>
		                       
		      <S.Butts> 
		        <S.ThingButt onClick={(e)=> increaser(e,item._id)}>
			                          {tc('increase')}</S.ThingButt> 
		        <S.ThingButt onClick={()=>decrease(item._id)}>
		                              {tc('decrease')}</S.ThingButt>
		        <S.ThingButt onClick={(e)=>remover(e,item._id)}>
		                              {tc('remove')}</S.ThingButt>
		      </S.Butts>                         
		   </S.Thing>)}
	    </S.CartList>
		      
		    {open && <MailForm servData={servData} setOpen={setOpen} 
				               cartItems={cartItems}
				               clearCart={clearCart} push={push}/>}
	                 
	         <S.CartButts>
	             <S.Total>{tc('total')}: {counter()}</S.Total>
		          <S.Button onClick={()=>setOpen(true)}>
		                              {tc('buy_items')}</S.Button>
		          <S.Button onClick={cleaner}>
		                              {tc('clear_cart')}</S.Button><br/>
		          <S.StyledLink className='styledLink' href='/'>
		                              {tc('Menu')}</S.StyledLink>
		     </S.CartButts>
	       </S.Container>
	}
