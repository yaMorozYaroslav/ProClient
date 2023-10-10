import React from 'react'
//import {useDispatch, useSelector} from 'react-redux'
//import { addItem, changeItem} from '../Redux/itemsSlice'
import FileBase from 'react-file-base64'
import {ItemContext} from '../Context/Contexts'
import {OpenContext} from '../Context/Contexts'

const initialState = {title: '', description: '', price: '', 
	                  category: '', type: '', photo: ''}
const subSeed = ['', 'flowers', 'veggies', 'herbs', 'seedlings']
const subSoil = ['', 'for flowers','for veggies', 'for fruit']
const subSupplements = ['', 'fertilizers', 'pesticides', 'other']
const subEquipment = ['', 'gloves','tools','gear']

export const ItemForm = () => {
	
	const {items, addItem, updateItem,
		          currentId, setCurrentId} = React.useContext(ItemContext)
	
	const {itemForm, closeItemForm} = React.useContext(OpenContext)
	
	const ref = React.useRef()
	const [source, setSource] = React.useState(initialState)
   
    const currItem = items.data && items.data.find((item) => item._id === currentId)
    
    React.useEffect(()=>{
		
	       	   if(currItem)setSource(currItem)
	       	   //console.log(currItem)
								 
	       },[currItem])
	       
    const reset =()=> {	
		setCurrentId(null)
		setSource(initialState)
		ref.current.reset()
		}
		
	const handSubmit =(e)=> {
		e.preventDefault()
	   if(!currentId){addItem(source)			           
	   }else{updateItem(currentId, source)}
			 reset()
		     closeItemForm()

		     setTimeout(() => {
					alert('Element has been '+
	                      (!currentId?'added.':'updated.'))},1000)
		        }
		
	
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	let currType
    if(source.category==='seeds'){currType = subSeed}
	if(source.category==='soils'){currType = subSoil}
	if(source.category==='supplements'){currType = subSupplements}
	if(source.category==='equipment'){currType = subEquipment}
	
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
	 value={source.title}    
	 onChange={handChange}
	 style={sInput} required/><br/>
	 
	 <label style={{marginRight: '245px'}}>Description:</label><br/>
	 <textarea name='description'
	 value={source.description} 
	 onChange={handChange}
	 style={{...sInput, height: '50px', marginLeft: '45px'} } required/><br/>
	 
	 <label>Price:</label>
	 <input name='price'
	        value={source.price}
	        onChange={e=>setSource(
				          {...source, price: Number(e.target.value)||0})}
	        style={sInput} required/>$<br/>
	 
	 <label>Category:</label>
	 <select name='category'
	         value={source.category}
	         onChange={handChange}
	         style={{...sInput, cursor: 'pointer'}}
	         >
	 <option value=''/>
	 <option value='seeds'>seeds</option>
	 <option value='soils'>soils</option>
	 <option value='supplements'>supplements</option>
	 <option value='equipment'>equipment</option>
	 </select><br/>
	 <label>Type:</label>
	 <select name='type'
	         value={source.type}
	         onChange={handChange}
	         style={{...sInput, cursor: 'pointer'}}
	          >
	     {currType && currType.map((item,i) => 
			   <option key={i} value={item}>{item}</option>)}
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
