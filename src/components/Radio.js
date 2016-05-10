import React, { PropTypes } from 'react'

const Radio = ({ gender, onChange }) => (
  <div>
    <input type='radio' name='gender' value='M' onChange={e => onChange('M')} />Male
    <br />
    <input type='radio' name='gender' value='F' onChange={e => onChange('F')} />Female
  </div>
)

export default Radio
