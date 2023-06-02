const button = {'fontSize':'20px', 'cursor':'pointer', 'margin':'5px'}

export const CartItem =({item,removeFromCart,increase,
	              decrease,clearCart, setFromLocale, cartItems}) => {
	    
		const onDelete =()=>{
			removeFromCart(item._id)
			if(cartItems.length <= 1)localStorage.removeItem('cart')
			}
			
	    const onDecrease =()=> {
			if(item.quantity > 1){decrease(item._id)
            }else{}
			}
			
		const itemIndex = cartItems.findIndex(obj => { return obj._id === item._id}) + 1
		console.log(itemIndex)
		const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
		
    return <><section>
               {itemIndex}. &nbsp;
             <img style={{'width':'80px'}} src={item.photo} />
               {item.title} * {item.quantity}
             <button onMouseOver={changeBorder} style={button} onClick={()=>increase(item._id)}>inc</button>
             <button onMouseOver={changeBorder} style={button} onClick={onDecrease}>dec</button>
             <button onMouseOver={changeBorder} style={button} onClick={onDelete}>delete</button>
           </section></>
	}
