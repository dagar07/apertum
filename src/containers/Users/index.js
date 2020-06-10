import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UsersStyle } from './index.style'
import userActions from '../../redux/users/actions'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import UserCard from './components/UserCard'
import FilterModal from './components/FilterModal'
import Button from '../../components/Button'
import { DisplayRow } from '../../styles/commonStyle'

const { getUsersList } = userActions

class Users extends Component {
  state = {
    usersList: null,
    isFilterApplied: false,
    showModal: false
  }

  componentDidMount () {
    // call api to get the users list
    this.props.getUsersList()
  }

  handleApplyFilter = ({ minAge, maxAge, nameChars }) => {
    const { users = [] } = this.props
    let filterData = []
    if (users && users.length) {
      this.setState(() => {
        filterData = users.filter(item => {
          const age = item.age
          const fullNameLength = `${item.firstName}${item.lastName}`.length
          if ((minAge <= age) && (age < maxAge) && (fullNameLength >= nameChars)) {
            return true
          }
          return false
        })
        return {
          usersList: filterData,
          isFilterApplied: true,
          showModal: false
        }
      })
    }
  }

  handleClearFilter = () => {
    this.setState({
      usersList: this.props.users,
      isFilterApplied: false
    })
  }

  handleToggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  render () {
    const { users = [], userListStatus } = this.props
    const { usersList, isFilterApplied } = this.state
    const userData = usersList ? usersList : users
    return (
      <Layout>
        <Loader isLoader={false && userListStatus !== 'success'} size='small' className='loader'>
          <UsersStyle>
            <DisplayRow justify='flex-end' className='filter-btn-box'>
              <Button onClick={this.handleToggleModal} className='filter-btn'>
                Filter
              </Button>
              <Button onClick={this.handleClearFilter} disabled={!isFilterApplied} className='filter-btn'>
                Clear Filter
              </Button>
            </DisplayRow>
            <div className='user-data'>
              {
                userData && userData.map((user, index) => (
                  <UserCard key={`user_${index}`} user={user} />
                ))
              }
              {
                !userData.length && (
                  <div className='no-user-found'>
                    No User Found!
                  </div>
                )
              }
            </div>
          </UsersStyle>
        </Loader>
        {
          this.state.showModal && (
            <FilterModal
              onClose={this.handleToggleModal}
              onSubmit={this.handleApplyFilter}
            />
          )
        }
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
