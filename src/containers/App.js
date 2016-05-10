import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import InputField from '../components/InputField'
import Radio from '../components/Radio'
import Greeting from '../components/Greeting'

import { changeLast, changeFirst, genderMale, genderFemale } from '../actions/names'


class App extends Component {
  constructor(props) {
    super(props)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
  }

  handleFirstNameChange(firstname) {
    const { dispatch } = this.props
    dispatch(changeFirst(firstname))
  }

  handleLastNameChange(lastname) {
    const { dispatch } = this.props
    dispatch(changeLast(lastname))
  }

  handleGenderChange(gender) {
    const { dispatch } = this.props
    if (gender === 'M') {
      dispatch(genderMale())
    } else {
      dispatch(genderFemale())
    }
  }

  render() {
    const { firstname, lastname, gender } = this.props
    return (
      <div>

        <h2>Greetings using React+Redux</h2>

        <Radio
          gender={gender}
          onChange={this.handleGenderChange}
        />

        <InputField
          name="First Name: "
          placeholder="first name"
          value={firstname}
          onChange={this.handleFirstNameChange}
        />

        <InputField
          name="Last Name: "
          placeholder="last name"
          value={lastname}
          onChange={this.handleLastNameChange}
        />

        <hr />

        <Greeting
          gender={gender}
          firstname={firstname}
          lastname={lastname}
        />

      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const { lastname, firstname, gender } = state
  return {
    lastname,
    firstname,
    gender
  }
}

export default connect(mapStateToProps)(App)
