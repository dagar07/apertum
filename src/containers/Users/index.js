import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UsersStyle } from './index.style'
import userActions from '../../redux/users/actions'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'

const { getUsersList } = userActions

class Users extends Component {
  state = {
    usersList: []
  }

  componentDidMount () {
    // call api to get the users list
    console.log('tilak user data')
    this.props.getUsersList()
  }

  render () {
    const { users, userListStatus } = this.props
    console.log(users, userListStatus)
    return (
      <Layout>
        <UsersStyle>
          <Loader isLoader={false && userListStatus !== 'success'} size='small' className='loader'>
            Make user style
          </Loader>
        </UsersStyle>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    users: state.Users.usersList,
    userListStatus: state.Users.userListStatus,
  }),
  {
    getUsersList
  }
)(Users)
