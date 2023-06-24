const button = {'height':'45px', 'width':'45px','fontSize':'20px', 
	            'cursor':'pointer', 'marginTop':'25px', 'marginLeft':'5px'}

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
		
    return <><section style={{'display':'flex', 'height':'100px'}}>
              
              <h5> {itemIndex}. &nbsp; </h5>
             <img style={{'width':'80px', 'margin':'10px'}} src={item.photo} />
              <p style={{'marginRight':'5px'}}> {item.title} * {item.quantity}</p>
             <button onMouseOver={changeBorder} style={button} onClick={()=>increase(item._id)}>+</button>
             <button onMouseOver={changeBorder} style={button} onClick={onDecrease}>-</button>
             <button onMouseOver={changeBorder} style={{...button, 'background':'pink'}} onClick={onDelete}>del</button>
           {item.quantity * item.price}
           </section></>
	}
