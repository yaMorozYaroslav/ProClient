import React from 'react'
import {Card, CardBody, CardTitle,
        CardSubtitle, CardText, Button} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {removeItem, formOpen} from '../actions/itemAct'
import finger from '../tools/images/finger.png'

const Item =({item, setSoloId, setCurrentId})=> {

	const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
  const [hovRef, isHover] = useHover()

  function useHover(){
    const [value, setValue] = React.useState(false)
    const ref = React.useRef(null)
    const onMouseOver=()=>setValue(true)
    const onMouseOut=()=>setValue(false)

  React.useEffect(()=> {
    const trigger = ref.current
    if(trigger){
       trigger.addEventListener("mouseover", onMouseOver)
       trigger.addEventListener("mouseout", onMouseOut)
    return()=>{
       trigger.removeEventListener("mouseover", onMouseOver)
       trigger.removeEventListener("mouseout", onMouseOut)
      }
    }
  },[])
  return [ref, value]
}
  const onSingle =()=>setSoloId(item._id)
	const onEdit =()=>{
      dispatch(formOpen())
      setCurrentId(item._id)
    }
return(<div>
	<Card >
       <img 
           alt="unknown" 
           style={{height:"200px", width: "70%", marginLeft:"14%"}}
           onClick={onSingle}
           ref={hovRef} 
           src={!isHover?item.photo:finger} 
           top='true' width="10%" />
      <CardBody>
        <CardTitle  tag="h4">{item.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          price: ${item.price}</CardSubtitle>
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
       	</div>)
}
export default Item