import React,{useContext} from 'react'
import {ItemExcerpt} from './ItemExcerpt'

import {ItemContext} from '../Context/Contexts'
import {FiltContext} from '../Context/Contexts'
import {OpenContext} from '../Context/Contexts'
   
export const ItemsList = ({setCurrentId, opened, setOpened}) => {
	
	const {items, loading, error, fetchItems} = useContext(ItemContext)
    const {state} = useContext(FiltContext)
    const {authForm, closeAuthForm} = useContext(OpenContext)
    console.log(authForm)
    const category = state.itemCategory
	const search = state.itemSearch
	const minPrice = state.itemPrice.min
	const maxPrice = state.itemPrice.max
	
	const sortedByDate = items.slice().sort((a, b) =>
		                                   b.createdAt.localeCompare(a.createdAt))
	
	const categorized = sortedByDate.filter((item)=>{
		if(category === 'all'){ return item }
		if(category === 'soils'){return item.category === 'soil'}
		if(category === 'pesticides'){return item.category === 'pesticide'}
		if(category === 'seeds'){return item.category === 'seed'}
		return item
		})
	
	const sortedByPrice = categorized.sort((a,b) => a.price - b.price)
	//console.log(minPrice)
	const filteredByPrice = sortedByPrice.filter(item => {
		if(!search && minPrice > 0 && maxPrice === 0){
			 return item.price > parseInt(minPrice)}
		if(!search && maxPrice > 0 && minPrice === 0){
			return item.price < parseInt(maxPrice)}
		if(!search && maxPrice > 0 && minPrice > 0){
			return item.price > parseInt(minPrice) && item.price < parseInt(maxPrice)}
		if(search){return item.title.toUpperCase().includes(search.toUpperCase())}
		return item
		})
	React.useEffect(()=> {
		    
			if(!loading&&!items.length&&!error.length)fetchItems()
		},[loading,fetchItems,items.length, error])
	
	if(items.length)console.log(items)
	let content
	
	if(loading){
		
		content = <p>loading</p>
		
	}
	if (!loading&&items){

		content = filteredByPrice.map(item => (
			   <ItemExcerpt 
			           key={item._id} 
			           item={item}
			           setCurrentId={setCurrentId}
			           opened={opened}
			           setOpened={setOpened} />
			))
	}
	if (error.length && !loading) {content = <section>{error}</section>}
		 return(
		    <section>
		     {authForm?<><button onClick={closeAuthForm}>close</button><p>dick</p></>:null}
		       {content}
		    </section>
		 )
	}
