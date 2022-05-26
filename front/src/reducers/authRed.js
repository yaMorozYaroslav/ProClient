import {AUTH, LOGOUT} from '../tools/consts'

const init = {authData:null}
const authRed =(state = init, action)=> {
	switch(action.type){
		case AUTH:
	       localStorage.setItem('profile', JSON.stringify({...action.data}))
	       return {...state, authData: action.data, loading: false}
	    case LOGOUT:
	       localStorage.clear()
	       return {...state, authData: null, loading: false }
	    default:
	             return state
	}
}
export default authRed