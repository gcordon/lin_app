import user from './user/reducer'
import course from './course/reducer'
import { combineReducers, } from 'redux'


export default combineReducers({ user, course })