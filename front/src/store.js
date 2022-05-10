import {configureStore} from '@reduxjs/toolkit'

import itemReducer from './reducers/itemSlice'

export default configureStore({
	reducer: {
		items: itemReducer
	}
})