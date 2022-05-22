import React from 'react'
import {Card, CardImg, CardBody, CardTitle,
        CardSubtitle, CardText, Button} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {removeItem, formOpen} from '../actions/itemAct'

const Item =({item, setSoloId, setCurrentId})=> {
	const dispatch = useDispatch()
  const onSingle =()=>setSoloId(item._id)
	const onEdit =()=>{
      dispatch(formOpen())
      setCurrentId(item._id)
    }
return(<>
	<Card>
       <CardImg alt="unknown" onClick={onSingle} src={item.photo} top width="100%" />
      <CardBody>
        <CardTitle tag="h4">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.price}and{item.condition}</CardSubtitle>
        <CardText>{item.description.length>10?item.description.slice(0,10):item.description}</CardText>
      
        <Button onClick={()=>dispatch(removeItem(item._id))}>Delete</Button>
        <Button onClick={onEdit}>Edit</Button>
      </CardBody>
       	</Card>
       	</>)
}
export default Item