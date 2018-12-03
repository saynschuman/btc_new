import React, { Component } from "react"
import { Router } from "@reach/router"
import Login from "./components/pages/investor/login"
import Home from "./components/pages/investor/root/home"
import Buy from "./components/pages/investor/root/buy"
import Setting from "./components/pages/investor/root/settings"
import Investor from "./components/pages/investor/root"

class App extends Component {
  render() {
    return (
      <Router primary={false}>
        <Login default />
        <Investor path={"/investor"}>
          <Home path={"home"} />
          <Buy path={"buy"} />
          <Setting path={"settings"} />
        </Investor>
      </Router>
    )
  }
}

export default App
