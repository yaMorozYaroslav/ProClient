import React from 'react'
import {Card, CardImg, CardBody, CardTitle,
        CardSubtitle, CardText, Button} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {removeItem, setOpen, setClose} from '../actions/itemAct'

export const Item =({item, setCurrentId})=> {
	const dispatch = useDispatch()
 
	const onEdit =()=>{
      dispatch(setOpen())
      //setCurrentId(item._id)
    }
return(<>
	<Card>
       <CardImg alt="unknown" src={item.photo} top width="100%" />
      <CardBody>
        <CardTitle tag="h4">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.price}</CardSubtitle>
        <CardText>{item.description}</CardText>
        <Button onClick={()=>dispatch(removeItem(item._id))}>Delete</Button>
        <Button onClick={()=>setCurrentId(item._id)}>Edit</Button>
      </CardBody>
       	</Card>
       	</>)
}