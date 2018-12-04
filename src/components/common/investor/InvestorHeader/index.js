import React, { Component } from "react"
import css from "./index.module.scss"
import { Link } from "@reach/router"
import classNames from "classnames"
import logOut from "../../../../helpers/logOut"
import { connect } from "react-redux"
import { toggleMobileMenu } from "../../../../store/modules/toggleMenu"

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
    logOut()
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
                  <Link getProps={isActive} to="">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link getProps={isActive} to="buy">
                    Покупка/продажа
                  </Link>
                </li>
                <li>
                  <Link getProps={isActive} to="settings">
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
          <div
            onClick={this.props.toggleMobileMenu}
            className={classNames([css.mobileMenuButton], {
              [css.openedMenu]: this.props.menuIsOpen
            })}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      menuIsOpen: state.toggleMenu.mobileMenuIsOpen
    }
  },
  { toggleMobileMenu }
)(Header)
