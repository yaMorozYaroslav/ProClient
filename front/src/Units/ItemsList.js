import React,{useContext} from 'react'
import {ItemExcerpt} from './ItemExcerpt'

import {ItemContext} from '../Context/Contexts'
import {FiltContext} from '../Context/Contexts'
import {OpenContext,
	    UserContext,
	    CartContext} from '../Context/Contexts'

import InfiniteScroll from 'react-infinite-scroll-component'
import {Row, Col} from 'antd'   
   
export const ItemsList = () => {
	
	const {items, loading, error, fetchItems,
		   removeItem, currentId, setCurrentId} = useContext(ItemContext)
		   
    const {addToCart} = useContext(CartContext)
    
    const {state} = useContext(FiltContext)

    const {userData} = useContext(UserContext)
    
    const {itemForm, authForm, openItemForm, closeAuthForm} = useContext(OpenContext)
    
    const category = state.itemCategory
	const search = state.itemSearch
	const minPrice = state.itemPrice.min
	const maxPrice = state.itemPrice.max
	
	const sortedByDate = items.slice().sort((a, b) =>
		                                   b.createdAt.localeCompare(a.createdAt))
	
	/* const categorized = sortedByDate.filter((item)=>{
		if(category === 'soil'){return item.category === 'soil'}
		if(category === 'pesticide'){return item.category === 'pesticide'}
		if(category === 'seed'){return item.category === 'seed'}
		return item
		}) */
	
	const sortedByPrice = sortedByDate.sort((a,b) => a.price - b.price)

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
		
   const totalPages = Math.ceil(filteredByPrice.length/5)
   const Buttons = () => <div style={{'display':'flex', 'fontSize':'20px'}}>Pages:{[...Array(totalPages)].map((e, i) => 
	   <button style={{'margin':'5px', 'fontSize':'20px', 'cursor':'pointer'}} onClick={()=>setPage(i)} key={i}>{i+1}</button>)}</div>

   function sliceIntoChunks() {
    const res = [];
    for (let i = 0; i < filteredByPrice.length; i += 4) {
        const chunk = filteredByPrice.slice(i, i + 4);
        res.push(chunk);
    }
    return res;
}
   const [page, setPage] = React.useState(0)

   const slicer = sliceIntoChunks()
   const slicedItems = slicer[page]
   
	 React.useEffect(()=> {
		    
			if(!loading&&!items.length &&!error.length&&category)fetchItems(category)
		},[loading,fetchItems,items.length, error, category]) 
	
	if(items.length)console.log(items)
	let content
	
	if(loading){
		
		content = <p>loading</p>
		
	}
	if (!loading&&items&&slicedItems){

		content = 
  
      <>
       <h3></h3><Buttons/>
      <Row gutter={[24, 24]}>
       {slicedItems.map(item => (
			  <Col key={item._id}  span={12}> 
			   <ItemExcerpt  
			           item={item}
			           setCurrentId={setCurrentId}
			           openItemForm={openItemForm}
			           removeItem={removeItem}
			           userData={userData}
			           addToCart={addToCart}
			            />
			  </Col>
		       ))}
			  </Row>
	  </>
		}
	if (error.length && !loading) {content = <section>{error}</section>}
		 return(
		    <section>
		       {content}
		    </section>
		 )
	}
