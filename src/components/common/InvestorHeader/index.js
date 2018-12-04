import React, { Component } from "react"
import css from "./index.module.scss"
import { Link } from "@reach/router"
import Cookies from "universal-cookie"

class Header extends Component {
  exit = () => {
    const cookies = new Cookies()
    cookies.remove("token")
    window.location.replace("/")
  }
  render() {
    return (
      <div className={css.headerWrapper}>
        <div className={css.headerInner}>
          <div className={css.left}>
            <div className={css.logo} />
          </div>
          <div className={css.menu}>
            <nav className={css.nav}>
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
          </div>
          <div className={css.right}>
            <ul>
              <li className={css.lang}>
                <span>RU</span>
              </li>
              <li className={css.exit}>
                <span onClick={this.exit}>Выход</span>
              </li>
            </ul>
          </div>
          <div className={css.mobileMenuButton} />
        </div>
      </div>
    )
  }
}

export default Header
