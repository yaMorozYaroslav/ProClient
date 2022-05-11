import {AUTH, LOGOUT} from '../actionTypes'

const authReducer = (state ={authData: null}, action) => {
	switch(action.type){
		case AUTH:
		     localStorage.setItem('token', JSON.stringify({...action?.data}))
	}
}