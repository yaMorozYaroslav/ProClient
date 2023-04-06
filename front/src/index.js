import React from 'react'
import {createRoot} from 'react-dom/client'

import {Provider} from 'react-redux'
import store from './Redux/store'
import {loadState, saveState} from './localStorage'

import {App} from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

store.subscribe(() => {
	saveState({ authData: store.getState().auth.authData})
	})
	
console.log(store.getState())
root.render(<Provider store={store}><App/></Provider>)
