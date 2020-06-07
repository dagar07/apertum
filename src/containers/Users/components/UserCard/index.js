import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UserCardStyle } from './index.style'

class UserCard extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    return (
      <UserCardStyle>
        User Card
      </UserCardStyle>
    )
  }
}

export default UserCard
