import React, { Component } from "react"
import checkToken from "../../../../helpers/checkToken"

class Index extends Component {
  componentDidMount() {
    checkToken()
  }

  render() {
    return (
      <div>
        Investor pages:
        {this.props.children}
      </div>
    )
  }
}

export default Index
