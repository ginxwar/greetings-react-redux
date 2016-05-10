import React, { PropTypes } from 'react'

const Greeting = ({gender, firstname, lastname}) => {  

  let title = ''

  if (gender === 'M') {
    title = 'Lord'
  } else if (gender === 'F') {
    title = 'Lady'
  } else {
    title = ''
  }

  return (
    <div>
      Hello, {title} {firstname} {lastname}
    </div>
  )
}

export default Greeting
