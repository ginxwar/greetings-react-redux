// action type
const CHANGE_LAST = 'CHANGE_LAST'
const CHANGE_FIRST = 'CHANGE_FIRST'
const FEMALE = 'FEMALE'
const MALE = 'MALE'

// action creators, which returns actions
const changeLast = lastname => ({
  type: CHANGE_LAST,
  lastname
})

const changeFirst = firstname => ({
  type: CHANGE_FIRST,
  firstname
})

const genderFemale = () => ({
  type: FEMALE
})

const genderMale = () => ({
  type: MALE
})


export {
  CHANGE_LAST,
  CHANGE_FIRST,
  FEMALE,
  MALE,
  changeFirst,
  changeLast,
  genderFemale,
  genderMale
}
