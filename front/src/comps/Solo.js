import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Label} from 'reactstrap'
import {useSelector} from 'react-redux'

const Solo =(soloId, setSoloId)=> {
const item = useSelector(state => (soloId 
                                 ? state.items.items.find((message) => 
                                  message._id === soloId) : null));
 if(item)console.log(item)
}
export default Solo