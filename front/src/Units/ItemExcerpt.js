import React from 'react'

export const ItemExcerpt =({item, setCurrentId, single, setSingle, openItemForm, 
	                            userData, removeItem, addToCart }) => {
    
     
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
	   setCurrentId(item._id)
	   setSingle(true)
	   }
   const parag = {fontSize: '17px'}
   const button = {cursor: 'pointer', margin: '2px', fontSize: '18px'}
	return (<>
	<article style={{border:`6px solid #${randomColor}`, textAlign:'center',
	                 background: '#b7b7b7', padding: '5px'}}>
	  {single && <button style={button} 
		            onClick = {()=>setSingle(false)}>ToTheList</button>}
	  <h2>{item.title}</h2>
	  <img src={item.photo} alt='' style={{'width':'200px'}} 
	                                                onClick={onSingle}/>
	  <p>{item.category}</p>
	  <p style={parag}>{item.description}</p>
	  <p style={parag}>{item.price} $</p>
	  {(userData.result && 
	   (userData.result._id === item.creator||userData.result.role === 'admin')) && 
	   (<>
	  <button style={button} onClick={handDelete}>Remove</button>
	  <button style={button} onClick={handEdit}>Edit</button>
	    </>)}
	   <button style={button} onClick={() => addToCart(newItem)}>Buy</button>
	</article>
	 </> )
	}
