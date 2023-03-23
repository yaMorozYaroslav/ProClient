import {configureStore} from '@reduxjs/toolkit'

import itemsReducer from './itemsSlice'
import authReducer from './authSlice'

export default configureStore({
	reducer: {
		items: itemsReducer,
		auth: authReducer
	},
   })
