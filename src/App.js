import React, { Component } from "react"
import { Router } from "@reach/router"
import Login from "./components/pages/investor/login"
import Home from "./components/pages/investor/root/home"
import Buy from "./components/pages/investor/root/buy"
import Setting from "./components/pages/investor/root/settings"
import Investor from "./components/pages/investor/root"
import LoginAdmin from "./components/pages/admin/AuthForm/AuthForm"
import "./App.scss"
import RootAdmin from "./components/pages/admin/admin/RootAdmin"
import AdminHomepage from "./components/pages/admin/admin/AdminHomepage/AdminHomepage"

class App extends Component {
  render() {
    return (
      <Router primary={false}>
        <Login default />
        <Investor path={"/investor"}>
          <Home default />
          <Buy path={"buy"} />
          <Setting path={"settings"} />
        </Investor>
        <LoginAdmin path="/login-admin" />
        <LoginAdmin path="/auth/:token" />
        <RootAdmin path="/admin">
          <AdminHomepage path="homepage" />
          {/*<AdminSettings path="settings" />*/}
          {/*<AdminReports path="reports" />*/}
          {/*<AdminPays path="pays" />*/}
          {/*<Applications path="applications" />*/}
          {/*<AdminSchema path="schema" />*/}
          {/*<AdminOther path="other" />*/}
          {/*<News path="news" />*/}
        </RootAdmin>
      </Router>
    )
  }
}

export default App
