import React from 'react'

//import {Container} from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'

//import AppBar from './comps/AppBar'
//import List from './comps/List'
//import Form from './comps/Form'
import {ItemsList} from './Units/ItemsList'
import {AuthForm} from './Units/AuthForm'
import {ItemForm} from './Units/ItemForm'
/*export const App =()=> {
	return(<div className="App">
		<AppBar/>
       <Container>
       </Container>
		</div>)
}*/

export const App =()=> {
	const [currentId, setCurrentId] = React.useState(null)
	if(currentId)console.log(currentId)
	return <><ItemForm currentId={currentId} setCurrentId={setCurrentId}/>
	         <AuthForm/>
	         <ItemsList setCurrentId={setCurrentId}/>
	       </>
	}
