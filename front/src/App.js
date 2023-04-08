import React from 'react'

import {ItemsList} from './Units/ItemsList'
import {TheBar} from './Units/TheBar'


export const App =()=> {
	const [currentId, setCurrentId] = React.useState(null)
	if(currentId)console.log(currentId)
	return <>
	         <TheBar currentId={currentId} setCurrentId={setCurrentId}/>
	         <ItemsList setCurrentId={setCurrentId}/>
	       </>
	}
