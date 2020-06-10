import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { LoginStyle, LoginFormStyle } from './index.style'
import authActions from '../../redux/auth/actions'
import Loader from '../../components/Loader'
import { saveTokenInCookies } from '../../utility'

const { login } = authActions

class Login extends Component {
  state = {
    accountId: '',
    pswd: '',
    loader: false
  }

  componentWillReceiveProps (nextProps) {
    const { loginStatus, userToken } = nextProps
    if (loginStatus === 'success' && userToken) {
      // this is used to move the user list
      saveTokenInCookies(userToken)
      this.props.history.push('/user/list')
    }
  }

  componentWillUnmount () {
    this.setState({
      loader: false
    })
  }

  handleInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    })
  }

  handleOnLogin = () => {
    // here check the form values
    this.setState({
      loader: true
    })
    this.props.login(this.state)
  }

  render () {
    return (
      <Layout>
        <LoginStyle>
          <Loader isLoader={this.state.loader} size='small' className='loader'>
            <LoginFormStyle>
              <Input
                type='text'
                onChange={(e) => this.handleInputChange(e, 'accountId')}
                placeholder='User Id'
                className='login-input'
                value={this.state.accountId}
              />
              <Input
                type='password'
                onChange={(e) => this.handleInputChange(e, 'pswd')}
                placeholder='Enter Password'
                className='login-input'
                value={this.state.pswd}
              />
              <Button onClick={this.handleOnLogin}>
                Login
              </Button>
            </LoginFormStyle>
          </Loader>
        </LoginStyle>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    userToken: state.Auth.userToken,
    loginStatus: state.Auth.loginStatus
  }),
  {
    login
  }
)(Login)
