import React from 'react'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import AppRoutes from './router'
import AppContainer from './index.style'
import Boot from './redux/boot'

const App = () => (
  <AppContainer>
    <Provider store={store}>
      <AppRoutes history={history} />
    </Provider>
  </AppContainer>
)

Boot()
  .then(() => App())
  .catch(error => console.error(error))

export default App
