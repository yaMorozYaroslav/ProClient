import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
        Label, Input, NavLink, Container} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {authorization, registration} from '../actions/authAct'

const initial = {name: '', email: '', password: '', confirmPassword: ''}

const Auth =()=> {
	const dispatch = useDispatch()

	const [show, setShow] = React.useState(false)
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
    const switchMode =()=> {
    	setRegistered((isRegistered)=>!isRegistered)
    	handleShow(false)
    }
    return(<>
              <Label>{registered?'Login':'Registration'}</Label>
              
                <Form>
                  {registered && (<>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className='mb-3'
                        onChange={handleChange}/>
                  	</>)}
                  	<Label for="email">Email</Label>
                  	<Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className='mb-3'
                        onChange={handleChange}/>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className='mb-3'
                        onChange={handleChange}/>
                        {registered && (<>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Password"
                        className='mb-3'
                        onChange={handleChange}/>
                  	</>)}
                </Form>
             
    	</>)
}
export default Auth