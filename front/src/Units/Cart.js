import React from 'react'
import Badge from "@material-ui/core/Badge"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import CartIcon from "@material-ui/icons/ShoppingCart"
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,removeItem} from '../Redux/cartSlice'

const CartItem =({item})=> {
	const dispatch = useDispatch()
    return <><section>
               {item.length}
               {item._id} + {item.quantity}
             <button onClick={()=>dispatch(increment(item._id))}>inc</button>
             <button onClick={()=>dispatch(decrement(item._id))}>dec</button>
             <button onClick={()=>dispatch(removeItem(item._id))}>delete</button>
           </section></>
	}

export const Cart =({opened, setOpened})=> {
	
	const [open, setOpen] = React.useState(false)
	const cartState = useSelector(state => state.cart.cart)
	
//	return<>{cartState.map(item => (<CartItem key={item._id} item={item}/>))}</>
    return<>
            <Badge color='secondary'
                   style={{'cursor':'pointer'}}
                   overlap="rectangular"
                   badgeContent={cartState.length}
                   onClick={() => setOpen(cartState.length > 0 && !open ? true : false)}>
            Cart<CartIcon/>
            </Badge>
            
            {open && cartState.map(item => (<CartItem key={item._id} item={item}/>))}
            
			{open && cartState.length > 0 && (<>
				             <button 
				                onClick={() => setOpen({...opened, mail: !opened.mail})}>
				             OrderItems</button>
				             <button 
	                            onClick={() => setOpen(false)}>
	                         CloseCart</button></>)}
          </>
	}
