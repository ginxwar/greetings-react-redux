import { combineReducers } from 'redux'
import { CHANGE_LAST, CHANGE_FIRST, FEMALE, MALE } from '../actions/names'

// default states
const initialLastname = 'Stark'
const initialFirstname = 'Ned'

// lastname reducer
const lastname = (state = initialLastname, action) => {
  switch (action.type) {
    case CHANGE_LAST:
      return action.lastname
    default:
      return state
  }
}

// firstname reducer
const firstname = (state = initialFirstname, action) => {
  switch (action.type) {
    case CHANGE_FIRST:
      return action.firstname
    default:
      return state
  }
}

const gender = (state = null, action) => {
  switch (action.type) {
    case FEMALE:
      return 'F'
    case MALE:
      return 'M'
    default:
      return state
  }
}

const rootReducer = combineReducers({
  firstname,
  lastname,
  gender
})

export default rootReducer
