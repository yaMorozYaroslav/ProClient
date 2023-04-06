import {configureStore} from '@reduxjs/toolkit'

import itemsReducer from './itemsSlice'
import authReducer from './authSlice'

import {loadState, saveState} from '../localStorage'
const persistedState = loadState()


export default configureStore({
	reducer: {
		items: itemsReducer,
		auth: authReducer
	}, persistedState
   })


