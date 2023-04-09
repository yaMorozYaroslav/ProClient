import {useSelector, useDispatch} from 'react-redux'
import {removeItem} from '../Redux/itemsSlice'

export const ItemExcerpt = ({item, setCurrentId, opened, setOpened}) => {
	
    const dispatch = useDispatch()
   
    const handEdit =(e)=> {
		e.preventDefault()
		setOpened({...opened, item:true})
		setCurrentId(item._id)
		}
   const randomColor = Math.floor(Math.random()*16777215).toString(16)
   
	return (
	<article style={{'background':`#${randomColor}`}}>
	  <h3>{item.title}</h3>
	  <p>{item.photo}</p>
	  <p>{item.description}</p>
	  <button onClick={() => dispatch(removeItem(item._id))}>Remove</button>
	  <button onClick={handEdit}>Edit</button>
	</article>
	  )
	}
