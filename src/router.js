import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Route, Redirect, Switch, Router } from 'react-router-dom'
import { COLOR } from './styles/color'

const APP_ROUTES = {
  login: lazy(() => import('./containers/Login')),
  userList: lazy(() => import('./containers/Users'))
}

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      exact
      {...rest}
      render={props => {
        return isLoggedIn ? (<Component {...props} />)
          : (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location.pathname
                }
              }}
            />
          )
      }}
    />
  )
}

function AppRoutes ({ history, isLoggedIn }) {
  return (
    <Router history={history}>
      <ThemeProvider theme={COLOR}>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route exact path='/' component={APP_ROUTES.login} />
            <RestrictedRoute path='/user/list' component={APP_ROUTES.userList} isLoggedIn={isLoggedIn} />
            <Redirect to='/' />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

export default connect(state => ({
  isLoggedIn: state.Auth.loggedIn
}))(AppRoutes)
