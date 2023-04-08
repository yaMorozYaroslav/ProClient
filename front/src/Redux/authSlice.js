import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {auth, register} from '../tools/api'

const initialState = {
	authData: [],
	status: 'idle',
	error: null
	}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setData(state, action){
			state.authData.push(action.payload)
		}},
	extraReducers(builder){
	  builder
		.addCase(signUp.fulfilled, (state, action) => {
			state.status = 'succeeded'
		    state.authData = state.authData.concat(action.payload)
		    })
		.addCase(signUp.pending, (state, action) => {
			state.status = 'loading'
			state.authData = []
			})
		}
	})
	
export const signUp = createAsyncThunk('user/signup', async (source) => {
	const response = await register(source)
	console.log(response.data)
	return response.data
	})
export const signIn = createAsyncThunk('user/signin', async (source) => {
	const response = await auth(source)
	localStorage.setItem('profile', JSON.stringify({...response.data}))
	console.log(response.data)
	return response.data
	})

export const {setData} = authSlice.actions


export default authSlice.reducer
