import React from 'react'
import { Link } from '@reach/router'

const Nav = props => {
  // render() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">Главная</Link>
        </li>
        <li>
          <Link to="buy">Покупка-продажа</Link>
        </li>
        <li>
          <Link to="settings">Настройки</Link>
        </li>
      </ul>
    </nav>
  )
  // }
}

export default Nav
