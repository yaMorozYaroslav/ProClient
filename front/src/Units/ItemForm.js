import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, editItem} from '../Redux/itemsSlice'
import FileBase from 'react-file-base64'

const initialState = {title: '', description: '', price: '', condition: '', photo: ''}

export const ItemForm = ({currentId, setCurrentId}) => {
	
	const ref = React.useRef()
	const dispatch = useDispatch()
	const [source, setSource] = React.useState(initialState)
    const user = JSON.parse(localStorage.getItem('profile'))
    //const items = useSelector(state => state.items.items)
    const item = useSelector(state => (currentId 
                                 ? state.items.items.find((message) => 
                                  message._id === currentId) : null))
    React.useEffect(()=>{
	       	                      if(item){setSource(item)
				                       console.log(item)}
	       },[item, setSource])
    
	const handSubmit =(e)=> {
		e.preventDefault()
		dispatch(addItem(source))
		}
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	const reset =(e)=> {
		setCurrentId(null)
		ref.current.reset()
		}
	/* <FileBase 
               type="file"
               multiple={false}
               value={source.photo}
               onDone={({base64})=>setSource({
                        ...source, photo: base64})}/> */
	 return(
	 <section>
	 <h2>Item</h2>
	<form >
	 <label>Title:</label>
	 <input name='title' 
	 value={source.title||''}    
	 onChange={handChange}/>
	 
	 <label>Description:</label>
	 <input name='description'
	 value={source.description||''} 
	 onChange={handChange}/>
	 
	 <label>Price:</label>
	 <input name='price'
	 value={source.price||''} 
	 onChange={handChange}/>
	 
	 <label>Condition:</label>
	 <input name='condition'
	 value={source.condition||''} 
	 onChange={handChange}/>
	 
	 <label>Photo:</label>
	 <input 
	     type='file' 
	     onChange={(e)=> setSource({...source,photo: e.target.files[0]}||'')} />
	
                            
	 <button onClick={handSubmit}>Save</button>
	</form>
	 </section>
	 )
	}
