import React, { Component } from 'react'
import './Header.scss'
import Nav from './components/Nav'
import { toggleMobileMenu } from '../../../modules/toggleMobileMenu'
import { connect } from 'react-redux'
import classNames from 'classnames'
class Header extends Component {
  exit = e => {
    e.preventDefault()
    localStorage.clear()
    window.location.href = '/'
  }
  render() {
    return (
      <div className="header-wrapper investor-page">
        <div className="header-inner">
          <div className="left item">
            <div className="logo" />
          </div>
          <div className="item menu">
            <Nav />
          </div>
          <div className="right item">
            <ul>
              <li className="lang">
                <a href="/">RU</a>
              </li>
              <li className="exit">
                <a onClick={this.exit}>Выход</a>
              </li>
            </ul>
          </div>
          <div
            onClick={this.props.toggleMobileMenu}
            className={classNames('mobile-menu-button', {
              openedMenu: this.props.menuIsOpen
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
      menuIsOpen: state.toggleMobileMenu.mobileMenuIsOpen
    }
  },
  { toggleMobileMenu }
)(Header)
