import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../Redux/itemsSlice'
import FileBase from 'react-file-base64'

const initialState = {title: '', description: '', price: '', condition: '', photo: ''}

export const ItemForm = () => {
	
	const dispatch = useDispatch()
	const [source, setSource] = React.useState(initialState)
/*	const FileUploaded = ({onFileSelectSuccess, onFileSelectError}) => {
		const aRef = React.useRef(null)
		const handFile =(e) => {
      const file = e.target.files[0];
      if (file.size > 20000)
      onFileSelectError({ error: "File size cannot exceed more than 1MB" });
      else onFileSelectSuccess(file);
}	
		return (
		  <div>
		  <input type='file' onChange={handFile}/>
		  <button onClick={(e) => aRef.current && aRef.current.click()} />
		  </div>
		)
		} */
	const handSubmit =(e)=> {
		e.preventDefault()
		dispatch(addItem(source))
		console.log(source)
		setSource(initialState)
		console.log(source)
		}
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	//const resetFile =()=> aRef.current.value = null
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

	 
	 <button onClick={handSubmit}>Save</button>
	</form>
	 </section>
	 )
	}
