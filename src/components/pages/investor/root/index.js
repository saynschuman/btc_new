import React, { Component } from "react"
import checkToken from "../../../../helpers/checkToken"
import InvestorHeader from '../../../common/InvestorHeader'

class Index extends Component {
  componentDidMount() {
    checkToken()
  }

  render() {
    return (
      <div>
        <InvestorHeader />
        {this.props.children}
      </div>
    )
  }
}

export default Index
