import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
        Label, Input, NavLink, Alert} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {auth, register} from '../actions/authAct'

const initial = {name: '', email: '', password: '', confirmPassword: ''}

const Auth =()=> {
	const dispatch = useDispatch()

	const [show, setShow] = React.useState(false)
	const [login, setLogin] = React.useState(false)
	const [data, setData] = React.useState(initial)
    
    const handleShow
}