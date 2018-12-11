import React from 'react'
import './AsideMenu.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { connect } from 'react-redux'
import { toggleMobileMenu } from '../../../modules/toggleMobileMenu'
import classNames from 'classnames'
import { Link } from '@reach/router'

const Aside = props => {
  const exit = e => {
    e.preventDefault()
    localStorage.clear()
    window.location.href = '/'
  }
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: ['is-active'] } : null
  }
  return (
    <aside className={classNames({ mobileMenuVisible: props.menuIsOpen })}>
      <div className="mobile-admin-nav">
        <ul className={'nav-top'}>
          <li>Панель администратора</li>
          <li className={'id-admin'}>ID: 36143324</li>
          <li className="exit admin">
            <a onClick={exit} href="/">
              Выход
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to="homepage">Главная</Link>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to={'settings'}>Настройка прав администратора</Link>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to={'reports'}>Отчеты</Link>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to={'pays'}>Выплаты начислений инвесторам</Link>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to={'applications'}>Заявки инвесторов на продажу</Link>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to={'schema'}>Настройка схемы расчета</Link>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to={'other'}>Прочее</Link>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <Link getProps={isActive} to={'news'}>Новости</Link>
        </li>
      </ul>
    </aside>
  )
}

export default connect(
  state => {
    return {
      menuIsOpen: state.toggleMobileMenu.mobileMenuIsOpen,
    }
  },
  { toggleMobileMenu }
)(Aside)
