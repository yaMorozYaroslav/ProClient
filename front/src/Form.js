import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {createPost} from './actions/itemAct'

export const Form = ()=> {
	const dispatch = useDispatch()
	const [postData, setPostData] = React.useState({name: ''})
	const submit =(e)=>{
		e.preventDefault()
	if(postData.name){
		dispatch(createPost(postData))
		clear()
	}

	}
	const clear =()=> {
		setPostData({name: ''})
	}
	return(
      <section><form>
      <label htmlFor="title">title:</label>
      <textarea id='postName' name='postName' value={postData.name}
                onChange={(e)=>setPostData({...postData, name: e.target.value})} />
      <button onClick={submit}>submit</button>
      </form></section>
		)
}