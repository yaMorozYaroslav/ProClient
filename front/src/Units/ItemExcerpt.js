import React from 'react'

export const ItemExcerpt = ({item, setCurrentId, openItemForm, 
	                          userData, removeItem, addToCart }) => {
   const profile = JSON.parse(localStorage.getItem('profile'))
    const handEdit =(e)=> {
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

	return (
	<article style={{'background':`#${randomColor}`}}>
	  <h3>{item.title}</h3>
	  <img src={item.photo}/>
	  <p>{item.category}</p>
	  <p>{item.description}</p>
	  <p>{item.price}</p>
	  {(userData.result && 
	   (userData.result._id === item.creator||userData.result.role === 'admin')) && 
	   (<>
	  <button onClick={handDelete}>Remove</button>
	  <button onClick={handEdit}>Edit</button>
	    </>)}
	   <button onClick={() => addToCart(newItem)}>Buy</button>
	</article>
	  )
	}
