import {AUTH} from '../tools/consts'
import * as api from '../tools/api'

export const auth =(fromData, navigate)=> async(dispatch)=> {
	try{
		const{data} = await api.auth(formData)
		dispatch({type: AUTH, data})
	 	navigate('/')
	   }
	catch(error){
		console.log(error)
      }
     }

export const register =(formData, navigate)=> async(dispatch)=> {
	try{
		const {data} = await api.register(formData)
		dispatch({type: AUTH, data})
	    navigate('/')
	   }
	catch(error){
		console.log(error)
	}
   }