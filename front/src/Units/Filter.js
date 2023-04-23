export const Filter =(props)=> {
	
	function onCategory(event){
		props.onCategory(event.target.value)	
		}
	function onSearch(event){
		props.searchSelected(event.target.value)
		}
	function onMinPrice(event){
		props.minPriceSelected(event.target.value)
		}
	function onMaxPrice(event){
		props.maxPriceSelected(event.target.value)
		}
	return <>
	     <input onChange={onMinPrice} placeholder='MinPrice'/>
	     <input onChange={onMaxPrice} placeholder='MaxPrice'/>
	     <input onChange={onSearch} placeholder='Search'/>
	     <select name='howFilter' onChange={onCategory}>
	       <option value='all'>All</option>
	       <option value='soils'>Soils</option>
	       <option value='pesticides'>Pesticides</option>
	       <option value='seeds'>Seeds</option>
	     
	     </select>
	</>
	}
