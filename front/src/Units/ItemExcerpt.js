import {useSelector, useDispatch} from 'react-redux'
import {removeItem} from '../Redux/itemsSlice'

export const ItemExcerpt = ({item, setCurrentId}) => {
	
    const dispatch = useDispatch()
   
	return (
	<article key={item._id}>
	  <h3>{item.title}</h3>
	  <p>{item.photo}</p>
	  <p>{item.description}</p>
	  <button onClick={() => dispatch(removeItem(item._id))}>Remove</button>
	  <button onClick={() => setCurrentId(item._id)}>Edit</button>
	</article>
	  )
	}
