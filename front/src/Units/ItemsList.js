import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {selectAllItems, fetchItems} from '../Redux/itemsSlice'

const ItemExcerpt = ({ item }) => {
	return (
	<article key={item._id}>
	  <h3>{item.title}</h3>
	  <p>{item.photo}</p>
	  <p>{item.description}</p>
	</article>
	  )
	}
   
export const ItemsList = () => {
	const dispatch = useDispatch()
	const items = useSelector(selectAllItems)
	
	const itemStatus = useSelector(state => state.items.status)
	const error = useSelector(state => state.items.error)
	
	React.useEffect(()=> {
		if(itemStatus === 'idle'){
			dispatch(fetchItems())
			}
		},[itemStatus, dispatch])
	
	let content
	
	if(itemStatus === 'loading'){
		content = <p>loading</p>
		}else if (itemStatus === 'succeeded'){
			const orderedItems = items.slice()
			
			content = orderedItems.map(item => (
			   <ItemExcerpt key={item._id} item={item} />
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
