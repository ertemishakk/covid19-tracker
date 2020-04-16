import { combineReducers } from 'redux'
import fetchCalls from './fetchCalls'
import errorReducer from './errorReducer'


export default combineReducers({
    data: fetchCalls,
    error: errorReducer

})