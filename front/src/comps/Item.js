import React from 'react'
import {Card, CardImg, CardBody, CardTitle,
        CardSubtitle, CardText, Button} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {removeItem, setOpen} from '../actions/itemAct'

const Item =({item, setCurrentId})=> {
	const dispatch = useDispatch()
 
	const onEdit =()=>{
      dispatch(setOpen())
      setCurrentId(item._id)
    }
return(<div style={{height: '200px',width:'150px'}}>
	<Card >
       <CardImg alt="unknown" src={item.photo} top width="100%" />
      <CardBody>
        <CardTitle tag="h4">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.price}</CardSubtitle>
        <CardText>{item.description}</CardText>
        <Button onClick={()=>dispatch(removeItem(item._id))}>Delete</Button>
        <Button onClick={onEdit}>Edit</Button>
      </CardBody>
       	</Card>
       	</div>)
}
export default Item