import React, { Component } from "react"
import css from "./index.module.scss"
import { Link } from "@reach/router"
import Cookies from "universal-cookie"
import classNames from "classnames"

const languages = [
  {
    label: "RU",
    value: "RU"
  },
  {
    label: "EN",
    value: "EN"
  }
]

class Header extends Component {
  state = {
    language: "RU",
    langIsOpen: false
  }
  exit = () => {
    const cookies = new Cookies()
    cookies.remove("token")
    window.location.replace("/")
  }
  chooseLang = () => {
    this.setState({
      langIsOpen: !this.state.langIsOpen
    })
  }
  chooseThisLang = lang => {
    this.setState({
        language: lang
    })
    this.chooseLang()
  }
  render() {
    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: "active-link" } : null
    }
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
                  <Link getProps={isActive} {...this.props} to="">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link getProps={isActive} {...this.props} to="buy">
                    Покупка-продажа
                  </Link>
                </li>
                <li>
                  <Link getProps={isActive} {...this.props} to="settings">
                    Настройки
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={css.right}>
            <ul>
              <li
                className={classNames({
                  [css.lang]: true,
                  [css.active]: this.state.langIsOpen
                })}
              >
                <span onClick={this.chooseLang}>{this.state.language}</span>
                {this.state.langIsOpen && (
                  <div className={css.toggleLang}>
                    {languages.map((lang, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => this.chooseThisLang(lang.value)}
                          className={classNames({
                            [css.chooseLang]: true
                          })}
                        >
                          {lang.value}
                        </div>
                      )
                    })}
                  </div>
                )}
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
