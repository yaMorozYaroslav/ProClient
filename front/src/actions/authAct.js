import {AUTH} from '../tools/consts'
import * as api from '../tools/api'

export const authorization =(source, navigate)=> async(dispatch)=> {
	try{
		const{data} = await api.auth(source)
		dispatch({type: AUTH, data})
	   }
	catch(error){
		console.log(error)
      }
     }

export const registration =(source, navigate)=> async(dispatch)=> {
	try{
		const {data} = await api.register(source)
		dispatch({type: AUTH, data})
	   }
	catch(error){
		console.log(error)
	}
   }