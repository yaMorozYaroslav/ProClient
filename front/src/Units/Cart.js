import React from 'react'
import Badge from "@material-ui/core/Badge"
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import CartIcon from "@material-ui/icons/ShoppingCart"

import {OpenContext, CartContext} from '../Context/Contexts'

const CartItem =({item,removeFromCart,increase,decrease,clearCart}) => {
	
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
	            <button onClick={() => clearCart()}>ClearCart</button></>)}
	             
          </>
	}
