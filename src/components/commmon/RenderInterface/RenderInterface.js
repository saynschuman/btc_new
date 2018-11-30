import React from 'react'
import RootAdmin from '../../admin/RootAdmin'
import NotLogged from '../../notLogged/notLogged'
import RootInvestor from '../../investor/RootInvestor/RootInvestor'

export default props => {
  const renderInterface = role => {
    switch (role) {
      case 'admin':
        return <RootAdmin />
      case 'investor':
        return <RootInvestor />
      default:
        return <NotLogged />
    }
  }
  return <div>{renderInterface(props.userinfo.role)}</div>
}
