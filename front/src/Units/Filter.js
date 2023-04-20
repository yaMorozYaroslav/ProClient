export const Filter =(props)=> {
	
	function onFilter(event){
		props.filterSelected(event.target.value)	
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
	     <select name='howFilter' onChange={onFilter}>
	       <option value='all'>All</option>
	       <option value='cheap'>Cheap</option>
	       <option value='expansive'>Expansive</option>
	     
	     </select>
	</>
	}
