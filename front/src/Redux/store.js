import {configureStore} from '@reduxjs/toolkit'

import itemsReducer from './itemsSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'

export default configureStore({
	reducer: {
		items: itemsReducer,
		auth: authReducer,
		cart: cartReducer
	}
   })


