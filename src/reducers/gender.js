import { FEMALE, MALE } from '../actions/names'

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

export default gender
