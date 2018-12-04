import React, { Component } from "react"
import checkToken from "../../../../helpers/checkToken"
import InvestorHeader from "../../../common/investor/InvestorHeader"
import MainContainer from "../../../layouts/investor/MainContainer"
import Aside from "../../../layouts/investor/Aside"
import Container from "../../../layouts/investor/Container"
import Block from "../../../common/investor/blocks/Block"
import Numbers from "../../../common/investor/blocks/Numbers"
import { flash, btc, wallet, course } from "./img/export"
import ButtonViolet from "../../../common/investor/blocks/ButtonViolet"
import BlockNom from "../../../common/investor/blocks/BlockNom"
import CommonLink from "../../../common/investor/blocks/CommonLink"
import ButtonBlue from "../../../common/investor/blocks/ButtonBlue"
import css from "./index.module.scss"
import MobileMenu from "../../../common/investor/MobileMenu"
import { connect } from "react-redux"

class Index extends Component {
  componentDidMount() {
    checkToken()
  }

  render() {
    return (
      <div>
        <InvestorHeader />
        <MainContainer>
          <Aside>
            <Block title={"Ваша мощность (?)"} icon={flash}>
              <Numbers data={"1.201 TH/s"} />
            </Block>
            <BlockNom title={"Полученный доход (?)"} icon={btc}>
              <Numbers data={"1.201 BTC"} />
              <ButtonViolet info text={"Инвестировать"} />
            </BlockNom>
            <Block title={"Баланс кошелька"} icon={wallet}>
              <Numbers data={"0.221 BTC"} />
              <CommonLink>Gdf...fdsw</CommonLink>
              <ButtonBlue info text={"Вывод"} />
            </Block>
            <Block title={"Курс"} icon={course}>
              <ul className={css.courses}>
                <li>1 TH/s = 0.15 BTC</li>
                <li>1 BTC = 6 952,04$</li>
                <li>1 BTC = 399 574P</li>
              </ul>
            </Block>
          </Aside>
          <Container>{this.props.children}</Container>
          {this.props.menuIsOpen && <MobileMenu />}
        </MainContainer>
      </div>
    )
  }
}

const MSTP = state => {
  return {
    menuIsOpen: state.toggleMenu.mobileMenuIsOpen
  }
}

export default connect(MSTP)(Index)
