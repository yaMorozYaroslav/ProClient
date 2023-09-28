import React from 'react'

export const ItemExcerpt =({item, setCurrentId, single, setSingle,
	                       setSingleId, delSingleId, openItemForm,
	                       userData, removeItem, addToCart, setOpen}) => {
     const pointer = 'https://cdn-icons-png.flaticon.com/512/178/178404.png?w=740&t=st=1688989387~exp=1688989987~hmac=8143b1693b344a06a46761d35f7b1107ed19894e68a123f60e0fd627f8ef1945'
     const [over, setOver] = React.useState(false)
     const showPointer = over && !single
   
    const handEdit =(e)=>  {
		e.preventDefault()
		openItemForm()
		setCurrentId(item._id)
		}
	const handDelete =(e)=> {
		e.preventDefault()
		removeItem(item._id)
		}
   const randomColor = Math.floor(Math.random()*16777215).toString(16)
   
   const newItem = {_id: item._id, title: item.title, 
	                price: item.price, photo: item.photo}
   const onSingle = () => {
	   setSingleId(item._id)
	   setSingle(!single)
	   }
   const parag = {fontSize: '17px'}
   const button = {cursor: 'pointer', margin: '2px', fontSize: '20px'}
   const buyButt = {cursor: 'crosshair', border: '3px solid green', fontSize: '20px'}
   const listButt = {cursor: 'pointer', padding: '4px', fontSize: '20px'}
	return (<>
	<article style={{border:`6px solid #${randomColor}`, textAlign:'center',
	                 background: '#b7b7b7', padding: '5px'}}>
	  {single && <button style={listButt} 
		            onClick = {()=>setSingle(false)}>ToTheList</button>}
	  <h2>{item.title}</h2>
	  <img src={!showPointer?item.photo:pointer} alt='' style={{width:'200px', height: '220px'}}
	       onMouseOut={()=>setOver(false)} onMouseOver={()=>setOver(true)}
	                                                onClick={onSingle}/>
	  <p>{item.category}</p>
	  <p>{item.subCategory&&item.subCategory.length?item.subCategory:'text'}</p>
	  <p style={parag}>{!single?item.description.substring(0,25)+'...':item.description}</p>
	  <p style={parag}>{item.price} $</p>
	  {(userData.user && 
	   (userData.user._id === item.creator||userData.user.role === 'admin')) && 
	   (<>
	  <button style={button} onClick={handDelete}>Remove</button>
	  <button style={button} onClick={handEdit}>Edit</button>
	    </>)}
	   <button style={buyButt} onClick={() => addToCart(newItem)}>Buy</button>
	</article>
	 </> )
	}
