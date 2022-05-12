import {combineReducers} from 'redux'

import items from './itemSlice'
import auth from './authSlice'

export default combineReducers({items, auth})