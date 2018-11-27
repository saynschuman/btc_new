import React, { Component } from "react";
import Root from './components/Root'
import {Provider} from 'react-redux'
import {store} from './store'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Root count={1}/>
        </Provider>
    );
  }
}

export default App;
