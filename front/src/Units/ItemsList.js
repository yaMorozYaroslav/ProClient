import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllItems, fetchItems} from '../Redux/itemsSlice'
import {ItemExcerpt} from './ItemExcerpt'

   
export const ItemsList = ({setCurrentId, opened, setOpened}) => {
	const dispatch = useDispatch()
	const items = useSelector(selectAllItems)
	const itemStatus = useSelector(state => state.items.status)
	const error = useSelector(state => state.items.error)
	
	React.useEffect(()=> {
		if(itemStatus === 'idle'){
			dispatch(fetchItems())
			//if(items)console.log(items)
			}
		},[items, itemStatus, dispatch])
	
	let content
	
	if(itemStatus === 'loading'){
		content = <p>loading</p>
		}else if (itemStatus === 'succeeded'&&items){
		const orderedItems = items.slice().sort((a, b) =>
		                                   b.createdAt.localeCompare(a.createdAt))
		 console.log(orderedItems)
		 content = orderedItems.map(item => (
			   <ItemExcerpt 
			           key={item._id} 
			           item={item}
			           setCurrentId={setCurrentId}
			           opened={opened}
			           setOpened={setOpened} />
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
