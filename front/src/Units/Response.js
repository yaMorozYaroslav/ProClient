
	
export const Response = ({response, setResponse}) => {

 const changeBorder =(e)=> {
			e.target.style.border = '2px solid red'
			setTimeout(() => e.target.style.border = null, 1000)
			}
const sLabel = {color: 'blue', margin: '10px'}
const sButt = {cursor:'pointer', margin: '8px'}
			
  return <div style={{
	   textAlign: 'center', border: '2px solid green', padding: '4px'}}>
       <h4>You sent a message with the following data :)</h4>
       <div><label style={sLabel}>Name:</label> {response.user_name}</div>
       <div><label style={sLabel}>Email:</label>  {response.user_email}</div>
       <div><label style={sLabel}>Number:</label> {response.user_phone}</div>
       <div><label style={sLabel}>Order:</label> <br/>{JSON.stringify(response.items)}</div>
       <button onMouseOver={changeBorder} 
               onClick={()=>setResponse()}
			   style={sButt}>CloseResponse</button>
   </div>
}
