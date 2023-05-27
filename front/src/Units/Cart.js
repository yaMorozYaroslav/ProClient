import React from 'react'
import Badge from "@material-ui/core/Badge"
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import CartIcon from "@material-ui/icons/ShoppingCart"

import {OpenContext, CartContext} from '../Context/Contexts'

const CartItem =({item,removeFromCart,increase,
	              decrease,clearCart, setFromLocale}) => {
	
    return <><section>
               {item.length}
               {item._id} + {item.quantity}
             <button onClick={()=>increase(item._id)}>inc</button>
             <button onClick={()=>decrease(item._id)}>dec</button>
             <button onClick={()=>removeFromCart(item._id)}>delete</button>
           </section></>
	}

export const Cart =()=> {
	
	const [open, setOpen] = React.useState(false)
	
	const {cartItems, increase, decrease, 
		     removeFromCart, clearCart} = React.useContext(CartContext)
	
	
	console.log(cartItems)
	const {mailForm, openMailForm, closeMailForm} = React.useContext(OpenContext)
	
	React.useEffect(()=>{
		console.log(Object.keys(cartItems).length)
		
		const cart = JSON.parse(localStorage.getItem('cart'))
		
		const shouldUpdateStorage = Object.keys(cartItems).length > 0 && 
		         JSON.stringify(cartItems) !== JSON.stringify(cart)
		if(shouldUpdateStorage){
		  localStorage.setItem('cart', JSON.stringify(cartItems))
		  }
       /*
		const shouldUpdateState = profile && 
		            Object.keys(profile).length > 0 &&
		            JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateState){
		setFromStorage(profile)
	    } */
		},[cartItems])
//	return<>{cartState.map(item => (<CartItem key={item._id} item={item}/>))}</>
    return<>
            <Badge color='secondary'
                   style={{'cursor':'pointer'}}
                   overlap="rectangular"
                   badgeContent={cartItems.length}
                   onClick={() => setOpen(cartItems.length > 0 && !open ? true : false)}>
            Cart<CartIcon/>
            </Badge>
            
            {open && cartItems.map(item => (<CartItem 
				                                 key={item._id} 
				                                 item={item} 
				                                 removeFromCart={removeFromCart}
				                                 increase={increase}
				                                 decrease={decrease}/>))}
            
			{open && cartItems.length > 0 && (<>
				 <button onClick={!mailForm?openMailForm:closeMailForm}>
				                                     OrderItems</button>
				                                     
			    <button onClick={() => setOpen(false)}>
	                                                CloseCart</button>
	            <button onClick={() => clearCart()}>ClearCart</button>
	            </>)}
	             
          </>
	}
