import React from 'react'
import {createRoot} from 'react-dom/client'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
//import reducers from './reducers'
import {fetchItems} from './reducers/itemSlice'
import store from './store'
import {App} from './App'

//const store = createStore(reducers, compose(applyMiddleware(thunk)))
//store.dispatch(fetchItems)
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<Provider store={store}><App/></Provider>)