import React from 'react'
import {connect} from 'react-redux'
import {Button, Modal, ModalHeader, ModalBody, Form, Label, Input} 
                                                      from 'reactstrap'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, updateItem} from '../../actions/itemAct'

const Form =({currentId, setCurrentId})=>{
	       const [itemData, setItemData] = React.use({
	       	title:'', description:'', price:'', photo:''
	       })
	       const item = useSelector((state)=>
	       	          currentId?state.items.find((i)=>i._id === currentId):null)
	       const dispatch = useDispatch()
	       const user = JSON.parse(localStorage.getItem('profile'))

	       React.useEffect(()=>{
	       	if(item) setItemData(item)
	       },[item])

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
	       }
	   return(<>
         
	   	      </>)
}          
