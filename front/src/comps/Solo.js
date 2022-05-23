import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, Card,
   CardImg, CardBody, CardTitle,CardSubtitle, CardText} from 'reactstrap'
import {useSelector} from 'react-redux'

const Solo =({soloId, setSoloId})=> {
const item = useSelector(state => (soloId 
                                 ? state.items.items.find((message) => 
                                  message._id === soloId) : null))
const clear =()=> {
             setSoloId(null)
           }
 if(item){
    return(<>
        <Modal isOpen={item!==null} toggle={clear}>
         <CardTitle 
          style={{fontSize:"50px", textAlign:'center'}}
           >{item.title}</CardTitle>
         <Card>
            <CardImg 
                   alt="impossible" 
                   src={item.photo}/>
            <CardText style={{fontSize:"30px"}}>{item.description}</CardText>
            <CardSubtitle>Price: {item.price} && Condition: {item.condition}</CardSubtitle>
         </Card>
        </Modal>
        </>)
}
return null
}

export default Solo