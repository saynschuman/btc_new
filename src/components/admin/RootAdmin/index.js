import React from 'react'
import './index.scss'
import AsideMenu from '../../commmon/AsideMenu/AsideMenu'
import AdminPageHeader from '../../commmon/Header/AdminPageHeader'

const RootAdmin = props => {
  return (
    <>
      <AdminPageHeader />
      <AsideMenu />
      <div className="admin-body">{props.children}</div>
    </>
  )
}

export default RootAdmin
