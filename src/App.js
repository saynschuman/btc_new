import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import Investor from './pages/investor'
import Admin from './pages/admin'
import Home from './pages/home'
import css from './App.module.scss'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className={css.menu}>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/investor">Инвестор</Link>
            </li>
            <li>
              <Link to="/admin">Админ</Link>
            </li>
          </ul>
        </nav>
        <Router>
          <Home default />
          <Investor path="/investor" />
          <Admin path="/admin" />
        </Router>
      </div>
    )
  }
}

export default App
