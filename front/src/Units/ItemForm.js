import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../Redux/itemsSlice'
import FileBase from 'react-file-base64'

const initialState = {title: '', description: '', price: '', condition: '', photo: ''}

export const ItemForm = () => {
	
	const ref = React.useRef()
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
		reset()
		console.log(source)
		}
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	const reset =(e)=> {
		ref.current.reset()
		}
	//const resetFile =()=> aRef.current.value = null
	 return(
	 <section>
	 <h2>Item</h2>
	<form ref={ref}>
	 <label>Title:</label>
	 <input name='title'     
	 onChange={handChange}/>
	 
	 <label>Description:</label>
	 <input name='description'
	 onChange={handChange}/>
	 
	 <label>Price:</label>
	 <input name='price'
	 onChange={handChange}/>
	 
	 <label>Condition:</label>
	 <input name='condition'
	 onChange={handChange}/>
	 
	 <FileBase 
                         type="file"
                         multiple={false}
                         value={source.photo}
                         onDone={({base64})=>setSource({
                            ...source, photo: base64})}/>
                            
	 <button onClick={handSubmit}>Save</button>
	</form>
	 </section>
	 )
	}
