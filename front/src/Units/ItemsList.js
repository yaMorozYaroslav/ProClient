import React,{useContext} from 'react'
import {ItemExcerpt} from './ItemExcerpt'

import {ItemContext} from '../Context/Contexts'
import {UserContext} from '../Context/Contexts'
   
export const ItemsList = ({setCurrentId, opened, setOpened, itemCategory, itemSearch, itemPrice}) => {
	const {items, loading, error, fetchItems} = useContext(ItemContext)

/*	const offItems = [{
		              _id: 0,
		              title: 'SomeTitlte',
		              description: 'Trying do not make a description which is too short.'},
	                  
	                 { _id: 1,
	                  title: 'SomeTitlte',
	                  description: 'Trying do not make a description which is too short.'}] */
	
	//const itemStatus = useSelector(state => state.items.status)
	//const error = useSelector(state => state.items.error)
	
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
	//console.log(sortedByPrice)
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
		    
			if(!loading&&!items.length)fetchItems()
		},[loading,fetchItems,items.length])
	
	if(items.length)console.log(items)
	let content
	
	if(loading){
		
		content = <p>loading</p>
		}else if (!loading&&items){

		 content = filteredByPrice.map(item => (
			   <ItemExcerpt 
			           key={item._id} 
			           item={item}
			           setCurrentId={setCurrentId}
			           opened={opened}
			           setOpened={setOpened} />
			))
			} else if (!loading && !items.length) {
				content = <div>{error}</div>
				}
		 return(
		    <section>
		       {content}
		    </section>
		 )
	}
