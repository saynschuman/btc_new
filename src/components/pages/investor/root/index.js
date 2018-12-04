import React, { Component } from "react"
import checkToken from "../../../../helpers/checkToken"
import InvestorHeader from "../../../common/InvestorHeader"
import MainContainer from '../../../layouts/investor/MainContainer'
import Aside from '../../../layouts/investor/Aside'
import Container from '../../../layouts/investor/Container'

class Index extends Component {
  componentDidMount() {
    checkToken()
  }

  render() {
    return (
      <div>
        <InvestorHeader />
        <MainContainer>
          <Aside />
          <Container>{this.props.children}</Container>
        </MainContainer>
      </div>
    )
  }
}

export default Index
