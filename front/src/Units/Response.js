
	
export const Response = ({response, setResponse}) => {

 const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
			
  return <div style={{
	   textAlign: 'center', border: '1px solid green', padding: '4px'}}>
       <h4>You sent a message with the following data :)</h4>
       <div style={{display:'flex'}}><label>Name:</label> <p>{response.user_name}</p></div>
       <h5>Email: {response.user_email}</h5>
       <h5>Number: {response.user_phone}</h5>
       <h5>Order: <br/>{JSON.stringify(response.items)}</h5>
       <button onMouseOver={changeBorder} 
               onClick={()=>setResponse()}
			   style={{cursor:'pointer'}}>CloseResponse</button>
   </div>
}
