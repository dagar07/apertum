import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UserCardStyle } from './index.style'
import { DisplayRow } from '../../../../styles/commonStyle'

class UserCard extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.mapKeys = {
      firstName: 'First Name',
      lastName: 'Last Name',
      age: 'Age'
    }
  }

  getTitleAndValueContainer = () => {
    const mapUser = []
    const { user } = this.props
    for (let key in this.mapKeys) {
      const element = (
        <DisplayRow align='center' className='user-detail'>
          <div className='user-title'>
            {
              this.mapKeys[key]
            }:
          </div>
          <div>
            {
              user[key]
            }
          </div>
        </DisplayRow>
      )
      mapUser.push(element)
    }
    return mapUser
  }

  render() {
    return (
      <UserCardStyle>
        {
          this.getTitleAndValueContainer()
        }
      </UserCardStyle>
    )
  }
}

export default UserCard
