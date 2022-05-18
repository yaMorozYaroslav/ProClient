import {AUTH, LOGOUT} from '../tools/consts'

const init = {auhtData:null}
const authRed =(state = init, action)=> {
	switch(action.type){
		case AUTH:
	       localStorage.setItem('profile', JSON.stringify({...action?.data}))
	       return {...state, authData: action.data}
	    case LOGOUT:
	       localStorage.clear()
	       return {...state, authData: null}
	    default:
	             return state
	}
}
export default authRed