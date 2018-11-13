import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import Investor from './pages/investor'
import Admin from './pages/admin'
import store from './store'
import { Provider } from 'react-redux'
import Root from './Root'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App
