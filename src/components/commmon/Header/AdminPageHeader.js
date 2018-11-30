import React, { Component } from 'react'
import './AdminPageHeader.scss'
import AdminHeader from './components/AdminHeader'
import { connect } from 'react-redux'
import { toggleMobileMenu } from '../../../modules/toggleMobileMenu'
import classNames from 'classnames'

class AdminPageHeader extends Component {
  exit = e => {
    e.preventDefault()
    localStorage.clear()
    window.location.href = '/'
  }
  render() {
    return (
      <div className="header-wrapper admin-page-header">
        <div className="header-inner">
          <div className="left item">
            <a>
              <div className="logo" />
            </a>
          </div>
          <div className="item menu">
            <AdminHeader />
          </div>
          <div className="right item">
            <ul>
              <li className="exit admin">
                <a onClick={this.exit} href="/">
                  Выход
                </a>
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
)(AdminPageHeader)
