import React from 'react'
import {Card, CardImg, CardBody, CardTitle,
        CardSubtitle, CardText, Button} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {removeItem, formOpen} from '../actions/itemAct'

const Item =({item, setSoloId, setCurrentId})=> {
	const dispatch = useDispatch()
  const [hover, setHover] = React.useState(null)
  const user = JSON.parse(localStorage.getItem('profile'))
  const onSingle =()=>setSoloId(item._id)
	const onEdit =()=>{
      dispatch(formOpen())
      setCurrentId(item._id)
    }
  const onHover =()=> setHover(hov=>!hov)
return(<>
	<Card onMouseOver={onHover}>
       <CardImg 
           alt="unknown" 
           
           onClick={onSingle} 
           src={item.photo} 
           top width={hover?"100%":"50%"} />
      <CardBody>
        <CardTitle tag="h4">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          price: {item.price}</CardSubtitle>
        <CardText>{item.description.length>10?item.description.slice(0,10):item.description}</CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          state: {item.condition}</CardSubtitle>
        
        {(user?.result?._id===item?.creator)&&(
        <>
          <Button 
              color="warning"
              style={{marginRight:'5px'}}
              onClick={onEdit}>Edit</Button>
          <Button
           color="danger"
           size="sm" 
           onClick={()=>dispatch(removeItem(item._id))}>Delete</Button>
        </>)}
      </CardBody>
       	</Card>
       	</>)
}
export default Item