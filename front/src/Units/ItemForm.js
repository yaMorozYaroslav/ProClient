import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../Redux/itemsSlice'
import FileBase from 'react-file-base64'

const initialState = {title: '', description: '', price: '', condition: '', photo: null}

export const ItemForm = () => {
	const dispatch = useDispatch()
	const [source, setSource] = React.useState(initialState)
	
	const handSubmit =(e)=> {
		e.preventDefault()
		dispatch(addItem(source))
		setSource(initialState)
		}
	console.log(source)
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	 return(
	 <section>
	 <h2>Item</h2>
	<form>
	 <label>Title:</label>
	 <input name='title'
	        value={source.title}
	 onChange={handChange}/>
	 
	 <label>Description:</label>
	 <input name='description'
	 value={source.description}
	 onChange={handChange}/>
	 
	 <label>Price:</label>
	 <input name='price'
	 value={source.price}
	 onChange={handChange}/>
	 
	 <label>Condition:</label>
	 <input name='condition'
	 value={source.condition}
	 onChange={handChange}/>
	 
	 <FileBase multiple={false}
	 onDone={({base64})=>setSource({...source, photo: base64})}/>
	 
	 <button onClick={handSubmit}>Save</button>
	</form>
	 </section>
	 )
	}
