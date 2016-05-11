import { combineReducers } from 'redux'
import lastname from './lastname'
import firstname from './firstname'
import gender from './gender'

const rootReducer = combineReducers({
  firstname,
  lastname,
  gender
})

export default rootReducer
