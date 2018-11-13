import React from 'react'
import css from './App.module.scss'
import { Router, Link } from '@reach/router'
import Home from './pages/home'
import Admin from './pages/admin'
import Investor from './pages/investor'

export default () => {
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
