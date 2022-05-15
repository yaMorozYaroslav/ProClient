import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form,
        Label, Input, NavLink, Container} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {authorization, registration} from '../actions/authAct'

const initial = {name: '', email: '', password: '', confirmPassword: ''}

const Auth =()=> {
	const dispatch = useDispatch()

	const [show, setShow] = React.useState(false)
	const [modal, setModal] = React.useState(false)
	const [registered, setRegistered] = React.useState(false)
	const [source, setSource] = React.useState(initial)
    
    const handleShow =()=> setShow((showPassword)=> !showPassword)
    const handleSubmit =(e)=>{
    	e.preventDefault()
    	if(registered){
    		dispatch(authorization(source))
    	}else{
    		dispatch(registration(source))
    	}
    }
    const handleChange =(e)=> {
    	setSource({...source, [e.target.name]: e.target.value})
    }
    const handToggle =()=>setModal(isModal=>!isModal)
    const switchMode =()=> {
    	setRegistered((isRegistered)=>!isRegistered)
    	handleShow(false)
    }
    return(<div>
    	      <NavLink onClick={handToggle} href="#">Authorization</NavLink>
    	    <Modal 
    	        isOpen={modal}
    	        toggle={handToggle}>
              <ModalHeader toggle={handToggle}>
              {registered?'Login':'Registration'}
              </ModalHeader>
                <ModalBody>
                <Form>
                   	<Label for="email">Email</Label>
                  	<Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className='mb-3'
                        onChange={handleChange}/>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className='mb-3'
                        onChange={handleChange}/>
                        {registered && (<>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className='mb-3'
                        onChange={handleChange}/>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="confirmPassword"
                        className='mb-3'
                        onChange={handleChange}/>
                  	</>)}
                  	<Button onClick={handleSubmit}>Submit</Button>
                  	<Button onClick={switchMode}>
                  	  {registered?"Switch to Login":"Switch to Registration"}
                  	</Button>
                </Form>
              </ModalBody>
             </Modal>
    	</div>)
}
export default Auth