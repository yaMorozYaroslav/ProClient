import React from 'react'
import {connect} from 'react-redux'
import {Button, Modal, ModalHeader, ModalBody, Form, Label, Input} 
                                                      from 'reactstrap'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, updateItem} from '../actions/itemAct'

const Filler =({currentId, setCurrentId})=>{
	       const [itemData, setItemData] = React.useState({
	       	title:'', description:'', price:'', photo:''
	       })
	       const [modal, setModal] = React.useState(false)
	       const item = useSelector((state)=>
	       	          currentId?state.items.find((i)=>i._id === currentId):null)
	       const dispatch = useDispatch()
	       const user = JSON.parse(localStorage.getItem('profile')) 	

	       React.useEffect(()=>{
	       	if(item) setItemData(item)
	       },[item])
           
           const handChange =(e)=> {
    	     setItemData({...itemData, [e.target.name]: e.target.value})
            }
	       const clear =()=> {
	       	 setCurrentId(null)
	       	 setItemData({title:'', description:'', price:'', photo:''})
	       }
	       const handToggle =()=>setModal(isModal=>!isModal)
	       const handleSubmit =(e)=> {
	       	e.preventDefault()

	       	if(currentId === null){
	       		dispatch(addItem({...itemData, name: user?.result?.name}))
	       		clear()
	       	}else{
	       		dispatch(updateItem(
	       			  currentId, {...itemData, name: user?.result?.name}))
	       		clear()
	       	}
	       }
	   return(<>
            {user
              ?<Button color="dark" onClick={handToggle}>Add Item</Button>:null}
            <Modal isOpen={modal} toggle={handToggle}>
             <ModalHeader>Add Your Item</ModalHeader>
             <ModalBody>
                 <Form onSubmit={handleSubmit}>
                   <Label for="title">Title</Label>
                   <Input
                        type="text"
                        name="title"
                        id="item"
                        onChange={handChange} />
                    <Label for="description">Description</Label>
                    <Input
                         type="text"
                         name="description"
                         id="description"
                         onChange={handChange} />
                    <Label for="price">Price</Label>
                    <Input 
                         type="text"
                         name="price"
                         id="price"
                         style={{marginBottom:'15px'}}
                         onChange={handChange} />
                        </Form>
                    <div>
                      <FileBase 
                         type="file"
                         multiple={false}
                         onDone={({base64})=>setItemData({
                         	...itemData, photo: base64})}/>
                    </div>
                    <Button 
                        color='warning'
                        type="submit"
                        size="lg"
                        block={true}
                        style={{marginTop: '5px'}}>Submit</Button>
                       </ModalBody>
                      </Modal>

	   	      </>)
            }
            

export default Filler        
