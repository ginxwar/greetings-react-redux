import { CHANGE_LAST } from '../actions/names'

const initialLastname = 'Stark'

const lastname = (state = initialLastname, action) => {
  switch (action.type) {
    case CHANGE_LAST:
      return action.lastname
    default:
      return state
  }
}

export default lastname
