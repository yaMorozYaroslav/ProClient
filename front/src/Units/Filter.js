export const Filter =(props)=> {
	
	function onFilter(event){
		console.log(event.target.value)
		}
	return <>
	     <select name='howFilter' onChange={onFilter}>
	       <option value='cheap'>Cheap</option>
	       <option value='expansive'>Expansive</option>
	     
	     </select>
	</>
	}
