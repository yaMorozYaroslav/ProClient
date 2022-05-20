import React from 'react'
import {connect} from 'react-redux'
import {Button, Modal, ModalHeader, ModalBody, Form, Label, Input} 
                                                      from 'reactstrap'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, updateItem, setClose, setOpen} from '../actions/itemAct'

const Filler =({currentId, setCurrentId})=>{
	       const [itemData, setItemData] = React.useState({
	       	title:'', description:'', price:'', photo:''
	       })
	       const modal = useSelector(state=>state.items.modal)
	       const item = useSelector(state => (currentId 
                                 ? state.items.items.find((message) => 
                                  message._id === currentId) : null));
           const dispatch = useDispatch()
	       const user = JSON.parse(localStorage.getItem('profile')) 	

	       React.useEffect(()=>{
	       	if(item){setItemData(item)}
	       },[item])
           
           const handChange =(e)=> {
    	     setItemData({...itemData, [e.target.name]: e.target.value})
            }
	       const clear =()=> {
	       	 setCurrentId(null)
	       	 setItemData({title:'', description:'', price:'', photo:''})
	       }
	       const handleSubmit =(e)=> {
	       	e.preventDefault()

	       	if(currentId === null){
	       		dispatch(addItem({...itemData, name: user?.result?.name}))
	       	}else{
	       		dispatch(updateItem(
	       			  currentId, {...itemData, name: user?.result?.name}))
	       	}
            dispatch(setClose())
	       }
	   return(<>
            {user
              ?<Button color="dark" onClick={()=>dispatch(setOpen())}>Add Item</Button>:null}
            <Modal isOpen={modal} toggle={()=>dispatch(setClose())}>
             <ModalHeader>Add Your Item</ModalHeader>
             <ModalBody>
                 <Form onSubmit={handleSubmit}>
                   <Label for="title">Title</Label>
                   <Input
                        type="text"
                        name="title"
                        id="item"
                        value={itemData.title}
                        onChange={handChange} />
                    <Label for="description">Description</Label>
                    <Input
                         type="text"
                         name="description"
                         id="description"
                         value={itemData.description}
                         onChange={handChange} />
                    <Label for="price">Price</Label>
                    <Input 
                         type="text"
                         name="price"
                         id="price"
                         value={itemData.price}
                         style={{marginBottom:'15px'}}
                         onChange={handChange} />
                         <div>
                      <FileBase 
                         type="file"
                         multiple={false}
                         value={itemData.photo}
                         onDone={({base64})=>setItemData({
                            ...itemData, photo: base64})}/>
                    </div>
                    <Button 
                        type="submit"
                        color='warning'
                        size="lg"
                        block={true}
                        style={{marginTop: '5px'}}>Submit</Button>
                        </Form>

                       </ModalBody>
                      </Modal>

	   	      </>)
            }
            

export default Filler        
