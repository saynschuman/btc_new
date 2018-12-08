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
import { investorHomePageGetData } from "../../../../store/modules/investorHomePageGetData"
import { getCourse } from "../../../../store/modules/getCourse"
import { connect } from "react-redux"
import Loader from "../../../common/general/Loader"
import { getHashRatePrice } from "../../../../store/modules/hashRatePrice"

class Index extends Component {
  componentDidMount() {
    checkToken()
    !this.props.isLoaded &&
      !this.props.isLoading &&
      this.props.investorHomePageGetData()
    !this.props.isLoaded && !this.props.isLoading && this.props.getCourse()
    !this.props.isLoaded &&
      !this.props.isLoading &&
      this.props.getHashRatePrice()
  }

  render() {
    return (
      <div>
        {this.props.isLoading && <Loader />}
        {this.props.isLoaded && (
          <div>
            <InvestorHeader />
            <MainContainer>
              <Aside>
                <Block title={"Ваша мощность (?)"} icon={flash}>
                  <Numbers data={`${this.props.nHashRate} TH/s`} />
                </Block>
                <BlockNom title={"Полученный доход (?)"} icon={btc}>
                  <Numbers data={`${this.props.nEarnings} BTC`} />
                  <ButtonViolet info text={"Инвестировать"} />
                </BlockNom>
                <Block title={"Баланс кошелька"} icon={wallet}>
                  <Numbers data={`${this.props.confirmedBalance} BTC`} />
                  <CommonLink>{this.props.address.substr(0, 12)}</CommonLink>
                  <ButtonBlue info text={"Вывод"} />
                </Block>
                <Block title={"Курс"} icon={course}>
                  <ul className={css.courses}>
                    <li>1 TH/s = {this.props.hashRatePrice} BTC</li>
                    <li>1 BTC = {this.props.course.USD}$</li>
                    <li>1 BTC = {this.props.course.RUB}P</li>
                  </ul>
                </Block>
              </Aside>
              <Container>{this.props.children}</Container>
              {this.props.menuIsOpen && <MobileMenu />}
            </MainContainer>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuIsOpen: state.toggleMenu.mobileMenuIsOpen,
    isLoading: state.investorHomePageGetData.isLoading,
    isLoaded: state.investorHomePageGetData.isLoaded,
    nHashRate: state.investorHomePageGetData.nHashRate,
    nEarnings: state.investorHomePageGetData.nEarnings,
    address: state.investorHomePageGetData.address,
    confirmedBalance: state.investorHomePageGetData.confirmedBalance,
    pendingBalance: state.investorHomePageGetData.pendingBalance,
    hashRatePrice: state.hashRatePrice.hashRatePrice.price,
    course: state.getCourse.course
  }
}

export default connect(
  mapStateToProps,
  { investorHomePageGetData, getCourse, getHashRatePrice }
)(Index)
