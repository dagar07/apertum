import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputStyleWrapper } from './index.style'

class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  }

  render() {
    const { placeholder, type, onChange, value, defaultValue } = this.props
    return (
      <InputStyleWrapper
        placeholder={placeholder}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    )
  }
}

export default Input
