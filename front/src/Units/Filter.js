export const Filter =(props)=> {
	
	function onFilter(event){
		props.filterSelected(event.target.value)	
		}
	function onSearch(event){
		props.searchSelected(event.target.value)
		}
		
	return <>
	     <input onChange={onSearch}/>
	     <select name='howFilter' onChange={onFilter}>
	       <option value='all'>All</option>
	       <option value='cheap'>Cheap</option>
	       <option value='expansive'>Expansive</option>
	     
	     </select>
	</>
	}
