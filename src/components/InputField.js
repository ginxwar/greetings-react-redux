import React, { PropTypes } from 'react'

const InputField = ({ name, placeholder, value, onChange }) => (
  <div>
    {name}
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
)

export default InputField
