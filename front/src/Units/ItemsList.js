import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addID, selectAllItems, fetchItems, removeItem} from '../Redux/itemsSlice'

const ItemExcerpt = ({item, setCurrentId}) => {
    const dispatch = useDispatch()
    //const currId = useSelector(state => state.items.currID)
   // if(currId)console.log(currId)
	return (
	<article>
	  <h3>{item.title}</h3>
	  <p>{item.photo}</p>
	  <p>{item.description}</p>
	  <button onClick={() => dispatch(removeItem(item._id))}>Remove</button>
	  <button onClick={() => setCurrentId(item._id)}>Edit</button>
	</article>
	  )
	}
   
export const ItemsList = ({setCurrentId}) => {
	const dispatch = useDispatch()
	const items = useSelector(selectAllItems)
	const itemStatus = useSelector(state => state.items.status)
	const error = useSelector(state => state.items.error)
	
	React.useEffect(()=> {
		if(itemStatus === 'idle'){
			dispatch(fetchItems())
			if(items)console.log(items)
			}
		},[items, itemStatus, dispatch])
	
	let content
	
	if(itemStatus === 'loading'){
		content = <p>loading</p>
		}else if (itemStatus === 'succeeded'&&items){
			console.log(items)
			content = items.map(item => (
			   <ItemExcerpt 
			           key={item._id} 
			           item={item}
			           setCurrentId={setCurrentId} />
			))
			} else if (itemStatus === 'failed') {
				content = <div>{error}</div>
				}
		 return(
		    <section>
		       {content}
		    </section>
		 )
	}
