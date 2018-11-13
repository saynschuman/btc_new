import React from 'react'
import css from './MobileMenuInvestor.module.css'
import { Link } from '@reach/router'
import { toggleMobileMenu } from '../../../../modules/toggleMobileMenu'
import { connect } from 'react-redux'

const mobileMenu = props => {
  const exit = () => {
    localStorage.clear()
    window.location.href = '/'
  }
  return (
    <div className={css.mobileMenu}>
      <ul className={css.menu}>
        <li>
          <Link onClick={props.toggleMobileMenu} to="investor-home">
            Главная
          </Link>
        </li>
        <li>
          <Link onClick={props.toggleMobileMenu} to="investor-buy">
            Покупка/Продажа
          </Link>
        </li>
        <li>
          <Link onClick={props.toggleMobileMenu} to="investor-settings">
            Настройки
          </Link>
        </li>
      </ul>
      <hr className={css.hr} />
      <div className={css.lang}>
        Язык: <span className={css.langtoggle}>ru</span>
      </div>
      <hr className={css.hr} />
      <div onClick={exit} className={css.exitBtn}>
        Выход
      </div>
    </div>
  )
}

export default connect(
  null,
  {
    toggleMobileMenu,
  }
)(mobileMenu)
