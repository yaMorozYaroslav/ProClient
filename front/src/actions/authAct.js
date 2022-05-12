import {AUTH} from '../actionTypes'
import * as api from '../api'

export const signin = ({formData})=>
             dispatch=>{
             	const config = {
             		headers: {
             			'Content-Type': 'application/json'
             		}
             	}
             	const body = JSON.stringify({formData})
             	api.register(body, config).then(res=>dispatch({
             		type: AUTH,
             		payload: res.data
             	}))
             	  .catch(err => err.response.data)
             }
export const signup = (formData)=> 
             dispatch=>{
             	const config={
             		headers: {
             			'Content-Type': 'application/json'
             		}
             	}
             	const body = JSON.stringify({formData})
             	api.login(body, config).then(res=>dispatch({
             		type: AUTH,
             		payload: res.data
             	}))
             	.catch(err=>err.response.data)

             }