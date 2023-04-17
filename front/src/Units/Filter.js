export const Filter =(props)=> {
	
	function onFilter(event){
		props.filterSelected(event.target.value)	
		}
		
	return <>
	     <select name='howFilter' onChange={onFilter}>
	       <option value='all'>All</option>
	       <option value='cheap'>Cheap</option>
	       <option value='expansive'>Expansive</option>
	     
	     </select>
	</>
	}
