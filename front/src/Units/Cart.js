import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement,removeItem} from '../Redux/cartSlice'

const CartItem =({item})=> {
	const dispatch = useDispatch()
    return <><section>
               {item._id} + {item.quantity}
             <button onClick={()=>dispatch(increment(item._id))}>inc</button>
             <button onClick={()=>dispatch(decrement(item._id))}>dec</button>
             <button onClick={()=>dispatch(removeItem(item._id))}>delete</button>
           </section></>
	}

export const Cart =()=> {
	const cartState = useSelector(state => state.cart.cart)
	
	return<>{cartState.map(item => (<CartItem key={item._id} item={item}/>))}</>
	}
