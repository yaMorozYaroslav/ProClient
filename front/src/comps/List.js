import React from 'react'
import {CardGroup, Card, CardImg, CardBody, CardTitle,
        CardSubtitle, CardText, Button} from 'reactstrap'
import {getItems, removeItem} from '../actions/itemAct'
import {useDispatch, useSelector} from 'react-redux'

const List =()=> {
	const [currentId, setCurrentId] = React.useState(null)
	const dispatch = useDispatch()
    const items = useSelector(state=>state.items.items)
    const condition = useSelector(state=>state.items.loading)
	React.useEffect(()=>{
		dispatch(getItems())
	}, [dispatch])
	console.log(items)
	return(
       <CardGroup style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr'}}>
       {!condition?items.map(item=>(<Card key={item._id}>
       <CardImg alt="unknown" src={item.photo} top width="100%" />
      <CardBody>
        <CardTitle tag="h4">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.price}</CardSubtitle>
        <CardText>{item.description}</CardText>
        <Button onClick={()=>dispatch(removeItem(item._id))}>Delete</Button>
      </CardBody>
       	</Card>)):null}
        
       	</CardGroup>
		)
}
export default List