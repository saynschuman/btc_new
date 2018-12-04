import React from "react"
import logOut from "../../../../helpers/logOut"
import css from "./index.module.scss"
import { Link } from "@reach/router"
import { connect } from "react-redux"
import { toggleMobileMenu } from "../../../../store/modules/toggleMenu"
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

class Index extends React.Component {
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
      return isCurrent ? { className: [css.isActive] } : null
    }
    return (
      <div className={css.mobileMenu}>
        <ul className={css.menu}>
          <li>
            <Link onClick={this.props.toggleMobileMenu} getProps={isActive} to="">
              Главная
            </Link>
          </li>
          <li>
            <Link onClick={this.props.toggleMobileMenu} getProps={isActive} to="buy">
              Покупка/Продажа
            </Link>
          </li>
          <li>
            <Link onClick={this.props.toggleMobileMenu} getProps={isActive} to="settings">
              Настройки
            </Link>
          </li>
        </ul>
        <hr className={css.hr} />
        <div className={css.lang}>
          Язык: <span onClick={this.chooseLang}>{this.state.language}</span>
          {this.state.langIsOpen && (
            <div className={css.toggleLang}>
              {languages.map((lang, index) => {
                const isActive = lang.value === this.state.language
                return (
                  <div
                    key={index}
                    onClick={() => this.chooseThisLang(lang.value)}
                    className={classNames({
                      [css.chooseLang]: true,
                      [css.active]: isActive
                    })}
                  >
                    {lang.value}
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <hr className={css.hr} />
        <div onClick={this.exit} className={css.exitBtn}>
          Выход
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { toggleMobileMenu }
)(Index)
