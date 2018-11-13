import React, { Component } from 'react'
import './App.scss'
import { Router } from '@reach/router'
import Login from './components/AuthFormInvestor/AuthFormInvestor'
import LoginAdmin from './components/AuthForm/AuthForm'
import InvestorHomePage from './components/investor/investorHomepage/investorHomePage'
import InvestorSettings from './components/investor/InvestorSettings/InvestorSettings'
import InvestorPrivateSettings from './components/investor/InvestorPrivateSettings/InvestorPrivateSettings'
import RootInvestor from './components/investor/RootInvestor/RootInvestor'
import RootAdmin from './components/admin/RootAdmin'
import AdminHomepage from './components/admin/AdminHomepage/AdminHomepage'
import AdminSettings from './components/admin/AdminSettings/AdminSettings'
import AdminReports from './components/admin/AdminReports/AdminReports'
import AdminPays from './components/admin/AdminPays/AdminPays'
import Applications from './components/admin/Applications/Applications'
import AdminSchema from './components/admin/AdminSchema/AdminSchema'
import AdminOther from './components/admin/AdminOther/AdminOther'
import News from './components/admin/News/News'

class App extends Component {
  render() {
    return (
      <Router primary={false}>
        <Login default />
        <LoginAdmin path="/login-admin" />
        <LoginAdmin path="/auth/:token" />
        <RootInvestor path="investor">
          <InvestorHomePage default />
          <InvestorSettings path="buy" />
          <InvestorPrivateSettings path="settings" />
        </RootInvestor>
        <RootAdmin path="/admin">
          <AdminHomepage default />
          <AdminSettings path="settings" />
          <AdminReports path="reports" />
          <AdminPays path="pays" />
          <Applications path="applications" />
          <AdminSchema path="schema" />
          <AdminOther path="other" />
          <News path="news" />
        </RootAdmin>
      </Router>
    )
  }
}

export default App
