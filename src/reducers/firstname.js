import { CHANGE_FIRST } from '../actions/names'

const initialFirstname = 'Ned'

const firstname = (state = initialFirstname, action) => {
  switch (action.type) {
    case CHANGE_FIRST:
      return action.firstname
    default:
      return state
  }
}

export default firstname
