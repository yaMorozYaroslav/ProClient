import {configureStore} from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import itemsReducer from './itemsSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'

const persistConfig = {key: 'profile', storage}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		items: itemsReducer,
		auth: persistedReducer,
		cart: cartReducer,
	},
	middleware: [thunk]
   })
export const persistor = persistStore(store)

