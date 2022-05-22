import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form, Label, Input} 
                                                      from 'reactstrap'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, updateItem, formClose, formOpen} from '../actions/itemAct'

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
            if(e.target.value.length<10)
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
                clear()
	       	}else{
	       		dispatch(updateItem(
	       			  currentId, {...itemData, name: user?.result?.name}))
                clear()
	       	}
            dispatch(formClose())
    
        }
	   return(<>
            {user
              ?<Button color="dark" onClick={()=>dispatch(formOpen())}>Add Item</Button>:null}
            <Modal isOpen={modal} toggle={()=>dispatch(formClose())}>
             <ModalHeader>Add Your Item</ModalHeader>
             <ModalBody>
                 <Form onSubmit={handleSubmit}>
                   <Label for="title">Title</Label>
                   <Input
                        type="text"
                        name="title"
                        id="title"
                        value={itemData.title}
                        onChange={handChange} />
                    <Label for="description">Description</Label>
                    <Input
                         type="text"
                         name="description"
                         id="description"
                         value={itemData.description}
                         onChange={(e)=>{
                            if(e.target.value.length<45){setItemData({
                                 ...itemData, description: e.target.value})}}} />
                    <Label for="price">Price</Label>
                    <Input 
                         type="text"
                         name="price"
                         id="price"
                         value={itemData.price}
                         style={{marginBottom:'15px'}}
                         onChange={handChange} />
                         <section>
                      <FileBase 
                         type="file"
                         multiple={false}
                         value={itemData.photo}
                         onDone={({base64})=>setItemData({
                            ...itemData, photo: base64})}/>
                    </section>
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
