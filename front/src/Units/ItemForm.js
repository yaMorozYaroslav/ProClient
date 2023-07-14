import React from 'react'
//import {useDispatch, useSelector} from 'react-redux'
//import { addItem, changeItem} from '../Redux/itemsSlice'
import FileBase from 'react-file-base64'
import {ItemContext} from '../Context/Contexts'
import {OpenContext} from '../Context/Contexts'

const initialState = {title: '', description: '', price: '', category: 'seed', photo: ''}

export const ItemForm = () => {
	
	const {items, addItem, updateItem,
		          currentId, setCurrentId} = React.useContext(ItemContext)
	
	const {itemForm, closeItemForm} = React.useContext(OpenContext)
	
	const ref = React.useRef()
	const [source, setSource] = React.useState(initialState)
    
    const currItem = items.find((item) => item._id === currentId)
    
    React.useEffect(()=>{
		
	       	   if(currItem)setSource(currItem)
								 
	       },[currItem])
	       
    const reset =()=> {	
		setCurrentId(null)
		setSource(initialState)
		ref.current.reset()
		}
		
	const handSubmit =(e)=> {
		e.preventDefault()
	if(source.price <= 0)alert('Number must be positive')
	if(!source.photo && source.price > 0)alert('Please, fill out the photo field.')
	if(source.photo && source.price > 0){
		if(!currentId){addItem(source)
		}else{updateItem(currentId, source)}
		reset()
		closeItemForm()
	}else{}
		}
	
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid purple'
			setTimeout(() => e.target.style.border = null, 1000)
			}
	
	const sText = {fontSize:'24px'}
	const sInput = {fontSize:'22px', margin:'7px'}
	const sButton = {fontSize:'26px', margin:'14px', cursor: 'pointer'}
	 return(
	 <section style={{'display': !itemForm ?'none':'block',
		              'textAlign':'center'}}>
	 <h1 style={{'fontSize':'30px'}}>Item</h1>
	<form onSubmit={handSubmit} style={sText} ref={ref}>
	 <label>Title:</label>
	 <input name='title' 
	 value={source.title||''}    
	 onChange={handChange}
	 style={sInput} required/><br/>
	 
	 <label style={{marginRight: '245px'}}>Description:</label><br/>
	 <textarea name='description'
	 value={source.description||''} 
	 onChange={handChange}
	 style={{...sInput, height: '50px', marginLeft: '45px'} } required/><br/>
	 
	 <label>Price:</label>
	 <input name='price'
	        type='number'
	        value={source.price||''} 
	        onChange={handChange}
	        style={sInput} required/>$<br/>
	 
	 <label>Category:</label>
	 <select name='category'
	         value={source.category}
	         onChange={handChange}
	         style={{...sInput, cursor: 'pointer'}}>
	 <option value='seed'>seed</option>
	 <option value='soil'>soil</option>
	 <option value='pesticide'>pesticide</option>
	 </select><br/>
	 
	 <label>Photo: </label>
      <FileBase          
                         type="file"
                         multiple={false}
                         onDone={({base64})=>setSource({
                            ...source, photo: base64})}/><br/>
                            
	 <button style={sButton} onMouseOver={changeBorder} type='submit'>Save</button>
	 <button style={sButton} onMouseOver={changeBorder} onClick={closeItemForm}>CloseForm</button>
	</form>
	 </section>
	 )
	}
