 import {returnErrors} from './errorAct';
import {FETCH_ALL, CREATE, DELETE, ITEMS_LOADING} from '../actionTypes.js'
import * as api from '../api'

export const getItems = ()=>dispatch=>{
	dispatch(setItemsLoading())
	api.fetchItems()
	   .then(res=>dispatch({
	   	type: FETCH_ALL,
	   	payload: res.data
	   }))
	   .catch(err=>dispatch(returnErrors(err.response.data, err.response.status))
	   	);
};
export const addItem = item=>(dispatch, getState) => {
	api.createItem()
	     .then(res=>
		dispatch({
			type: CREATE,
			payload: res.data
		}))
	     .catch(err=>dispatch(returnErrors(err.response.data, err.response.status))
	   	);
};
export const deleteItem = id=>(dispatch, getState)=>{
	api.deleteItem( tokenConfig(getState))
  .then(res=>
	dispatch({
     type: DELETE,
     payload: id
	}))
    .catch(err=>dispatch(returnErrors(err.response.data, err.response.status))
	   	);
    };
export const setItemsLoading = ()=>{
	return{
		type: ITEMS_LOADING
	};
};
/*import {FETCH_ALL, CREATE, DELETE} from '../actionTypes.js'
import * as api from '../api'

export const getItems =()=> async(dispatch)=> {
	try{
		const {data} = await api.fetchItems()
		dispatch({type: FETCH_ALL, payload: data})
	}catch(error){
       console.log(error.message)
	}
}

export const createItem =(item)=> async(dispatch)=>{
	try{
      const {data} = await api.createItem(item)
      dispatch({type: CREATE, payload: data})
	}catch(error){
      console.log(error)
	}
}

export const deleteItem =(id)=> async(dispatch)=> {
	try{
		await api.deleteItem(id)

		dispatch({type: DELETE, payload: id})
	}catch(error){
		console.log(error)
	}
}
*/