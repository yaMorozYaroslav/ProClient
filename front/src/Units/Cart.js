import React from 'react'
import Badge from "@material-ui/core/Badge"
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import CartIcon from "@material-ui/icons/ShoppingCart"

import {OpenContext, CartContext, ItemContext} from '../Context/Contexts'

const button = {'fontSize':'20px', 'cursor':'pointer'}

const CartItem =({item,removeFromCart,increase,
	              decrease,clearCart, setFromLocale, cartItems}) => {
		const onDelete =()=>{
			removeFromCart(item._id)
			//localStorage.setItem('cart', JSON.stringify(cartItems))
			if(cartItems.length <= 1)localStorage.removeItem('cart')
			}
	    const onDecrease =()=> {
			decrease(item._id)
			if(item.quantity < 2)removeFromCart(item._id)
			}
    return <><section>
               {item.length}
             <img style={{'width':'80px'}} src={item.photo} />
               {item.title} * {item.quantity}
             <button style={button} onClick={()=>increase(item._id)}>inc</button>
             <button style={button} onClick={onDecrease}>dec</button>
             <button style={button} onClick={onDelete}>delete</button>
           </section></>
	}

export const Cart =()=> {
	
	const [open, setOpen] = React.useState(false)
	
	const {cartItems, increase, decrease, 
		     removeFromCart, clearCart, setFromLocale} = React.useContext(CartContext)
	const {loading} = React.useContext(ItemContext)
	console.log(cartItems)
	const {mailForm, openMailForm, closeMailForm} = React.useContext(OpenContext)
	
	React.useEffect(()=>{
		const cart = JSON.parse(localStorage.getItem('cart'))
		
		const shouldUpdateStorage = Object.keys(cartItems).length > 0 &&
		                            JSON.stringify(cartItems) !== JSON.stringify(cart)
		if(shouldUpdateStorage){
		  localStorage.setItem('cart', JSON.stringify(cartItems))
		  }
		  
        const shouldUpdateState = cart && loading && 
		                          Object.keys(cart).length > 0 &&
		              JSON.stringify(cartItems) !== JSON.stringify(cart)
		            
		if(shouldUpdateState){
		                 setFromLocale(cart)}
		},[cartItems, loading, setFromLocale])
		console.log(loading)
		
		const onClearCart =()=> {
			clearCart()
			localStorage.removeItem('cart')
			}
		
//	return<>{cartState.map(item => (<CartItem key={item._id} item={item}/>))}</>
    return<div style={{'marginTop':'15px','fontSize':'32px'}}>
            <Badge color='secondary'
                   style={{'cursor':'pointer'}}
                   overlap="rectangular"
                   badgeContent={cartItems.length}
                   onClick={() => setOpen(cartItems.length > 0 && !open ? true : false)}>
            Cart<CartIcon style={{ 'height': '40px', 'width': '40px' }}/>
            </Badge>
            
            {open && cartItems.map(item => (<CartItem 
				                                 key={item._id} 
				                                 item={item} 
				                                 removeFromCart={removeFromCart}
				                                 increase={increase}
				                                 decrease={decrease}
				                                 cartItems={cartItems}/>))}
            
			{open && cartItems.length > 0 && (<>
				 <button  style={button} 
				          onClick={!mailForm?openMailForm:closeMailForm}>
				                                     OrderItems</button>
				                                     
			    <button style={button}
			            onClick={() => setOpen(false)}>
	                                                CloseCart</button>
	            <button style={button}
	                    onClick={onClearCart}>ClearCart</button>
	            </>)}
	             
          </div>
	}
