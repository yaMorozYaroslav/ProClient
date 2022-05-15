import {combineReducers} from 'redux'

import items from './itemRed'
import auth from './authRed'

export default combineReducers({items, auth})