import React from 'react'

import {ItemsList} from './Units/ItemsList'
import {TheBar} from './Units/TheBar'


export const App =()=> {
	const [currentId, setCurrentId] = React.useState(null)
	if(currentId)console.log(currentId)
	const [opened, setOpened] = React.useState({item: false, auth: false})
	
	return <>
	         <TheBar currentId={currentId} setCurrentId={setCurrentId}
	                 opened={opened} setOpened={setOpened}/>
	         <ItemsList setCurrentId={setCurrentId} 
	                    opened={opened} setOpened={setOpened}/>
	       </>
	}
