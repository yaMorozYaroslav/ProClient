import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'
import axios from 'axios'
const initialState = {
	items: [],
	status: 'idle',
	error: null
}
const itemSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {}
})
export default itemSlice.reducer

export const fetchItems = createAsyncThunk('items/fetchItems', async()=>{
	const response = await api.fetchItems()
		return response.data
})