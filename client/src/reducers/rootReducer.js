import { combineReducers } from 'redux'
import fetchCalls from './fetchCalls'
import symtomReducer from './symtomReducer'


export default combineReducers({
    data: fetchCalls,
    symptomData: symtomReducer

})