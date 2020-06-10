import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FilterModalStyle } from './index.style'
import Input from '../../../../components/Input'
import { DisplayFlex } from '../../../../styles/commonStyle'
import Button from '../../../../components/Button'

class FilterModal extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
  }

  state = {
    minAge: '',
    maxAge: '',
    nameChars: ''
  }

  handleInputChange = (e, type) => {
    // the the input changes
    const value = e.target.value
    if (value && Number.isNaN(parseInt(value))) {
      return
    }
    this.setState({
      [type]: value && parseInt(value)
    })
  }

  handleApplyFilter = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state)
    }
  }

  renderContainer = (title, type) => {
    // render the containr for the details
    return (
      <DisplayFlex direction='column' justify='center'>
        <div className='filter-title-input'>{title}</div>
        <Input
          type='text'
          placeholder={title}
          value={this.state[type]}
          onChange={(e) => this.handleInputChange(e, type)}
          className='input-class'
        />
      </DisplayFlex>
    )
  }

  render() {
    const { minAge, maxAge, nameChars } = this.state
    return (
      <FilterModalStyle>
        <div className='modal-container'>
          <div className='filter-header'>
            <div className='modal-heading'>Filter</div>
            <div className='close-modal' onClick={this.props.onClose}>x</div>
          </div>
          <div className='filter-body'>
            {
              this.renderContainer('Minimum Age', 'minAge')
            }
            {
              this.renderContainer('Maximum Age', 'maxAge')
            }
            {
              this.renderContainer('Name\'s Length', 'nameChars')
            }
            <DisplayFlex justify='center'>
              <Button
                onClick={this.handleApplyFilter}
                className='apply-btn'
                disabled={!(minAge && maxAge && nameChars)}
              >
                Apply Filter
              </Button>
            </DisplayFlex>
          </div>
        </div>
      </FilterModalStyle>
    )
  }
}

export default FilterModal
