import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllItems, fetchItems} from '../Redux/itemsSlice'
import {ItemExcerpt} from './ItemExcerpt'

   
export const ItemsList = ({setCurrentId, opened, setOpened, itemCategory, itemSearch, itemPrice}) => {
	const dispatch = useDispatch()
	const items = useSelector(selectAllItems)
	const itemStatus = useSelector(state => state.items.status)
	const error = useSelector(state => state.items.error)
	
	const sortedByDate = items.slice().sort((a, b) =>
		                                   b.createdAt.localeCompare(a.createdAt))
	
	const categorized = sortedByDate.filter((item)=>{
		if(itemCategory === 'all'){ return item }
		if(itemCategory === 'soils'){return item.category === 'soil'}
		if(itemCategory === 'pesticides'){return item.category === 'pesticide'}
		if(itemCategory === 'seeds'){return item.category === 'seed'}
		return item
		//if(itemSearch){return item.title.toUpperCase().includes(itemSearch.toUpperCase())}
		//if(itemPrice.min > 0) return item.price > itemPrice.min
		})
	
	const sortedByPrice = categorized.sort((a,b) => a.price - b.price)
	console.log(sortedByPrice)
	const filteredByPrice = sortedByPrice.filter(item => {
		if(!itemSearch && itemPrice.min > 0 && itemPrice.max === 0){
			 return item.price > parseInt(itemPrice.min)}
		if(!itemSearch && itemPrice.max > 0 && itemPrice.min === 0){
			return item.price < parseInt(itemPrice.max)}
		if(!itemSearch && itemPrice.max > 0 && itemPrice.min > 0){
			return item.price > parseInt(itemPrice.min) && item.price < parseInt(itemPrice.max)}
		if(itemSearch){return item.title.toUpperCase().includes(itemSearch.toUpperCase())}
		return item
		})
    
	React.useEffect(()=> {
		if(itemStatus === 'idle'){
			dispatch(fetchItems())
			}
		},[items, itemStatus, dispatch])
	
	let content
	
	if(itemStatus === 'loading'){
		
		content = <p>loading</p>
		}else if (itemStatus === 'succeeded'&&items){

		 content = filteredByPrice.map(item => (
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
