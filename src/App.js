import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Root from './Root'
import './App.scss'
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
