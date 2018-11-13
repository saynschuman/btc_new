import React from 'react'
import './index.scss'
import AdminHomepage from '../AdminHomepage/AdminHomepage'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AsideMenu from '../../commmon/AsideMenu/AsideMenu'
import AdminPageHeader from '../../commmon/Header/AdminPageHeader'

const RootAdmin = props => {
  return (
    <>
      <AdminPageHeader whoAreYou={'admin'} />
      <AsideMenu />
      <div className="admin-body">{props.children}</div>
    </>
  )
}

export default RootAdmin
