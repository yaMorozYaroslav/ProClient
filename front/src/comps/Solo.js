import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap'
import {useSelector} from 'react-redux'

const Solo =({currentId, setCurrentId})=>{
	const item = useSelector(state => (currentId 
                                 ? state.items.items.find((prop) => 
                                  prop._id === currentId) : null))
	console.log(item?item.description:null)
	const clear =()=> {
	       	 setCurrentId(null)
	       	     }
	return(<>
          null
		  </>)
}
export default Solo