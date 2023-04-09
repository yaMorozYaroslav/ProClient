import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getItems,createItem,editItem, deleteItem} from '../api'

const initialState = {
	items: [],
	status: 'idle',
	error: null
	}
	

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {},
	extraReducers(builder){
		builder
		   .addCase(fetchItems.pending, (state, action) => {
			   state.status = 'loading'
			   })
		   .addCase(fetchItems.fulfilled, (state, action) => {
			   state.status = 'succeeded'
			   state.items = state.items.concat(action.payload)
			   })
		   .addCase(fetchItems.rejected, (state, action) => {
			   state.status = 'failed'
			   state.error = action.error.message
			   })
		   .addCase(addItem.fulfilled, (state, action) => {
			   state.items.push(action.payload)
			   })
		   .addCase(changeItem.fulfilled, (state, action) => {
			//  state.items = state.items.concat(action.payload)
			  state.items = state.items.map((item) =>
        (item._id === action.payload._id ? action.payload : item)) 
			   })
		   .addCase(removeItem.fulfilled, (state, action) => {
			  state.items = state.items.filter(
			                item => item._id !== action.payload.id)
			   })
		}
	})
	
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
	try{
		const response = await getItems()
		return response.data
		}catch(err){return err.message}
	})
	
export const addItem = createAsyncThunk('items/addItem', async (source) => {
	 try{	
		const response = await createItem(source)
		return response.data
	   }catch(err){return err.message}
	})
	
export const changeItem = createAsyncThunk('items/changeItem', async({id, source}) => {
	 try{
		const response = await editItem(id, source)
		console.log(response.data)
		return response.data
	   }catch(err){return err.message}
	})
	
export const removeItem = createAsyncThunk('items/removeItem', async(id) => {
     try{
		const response = await deleteItem(id)
		console.log(response.data)
		return response.data
	  }catch(err){return err.message}
		
	})

//export const {addID} = itemsSlice.actions	
	
export default itemsSlice.reducer

export const selectAllItems = (state) => state.items.items
