import React from 'react'
import { connect } from 'react-redux'
import { investorHomePageData } from '../../modules/investorHomePageData'
import PagePreloader from '../../components/common/PagePreloader'

class Investor extends React.Component {
  componentDidMount() {
    this.props.investorHomePageData(localStorage.getItem('token'))
  }
  componentDidUpdate() {
    this.props.authorized === 'notAuthorized' && window.location.replace('/')
  }
  render() {
    return (
      <div>
        {this.props.isLoading && <PagePreloader />}
        {this.props.isLoaded && this.props.authorized === true && (
          <div>
            <Header />
            <MainContainer>
              <Aside>
                <Block title={'Ваша мощность (?)'} icon={flash}>
                  <Numbers data={'1.201 TH/s'} />
                </Block>
                <BlockNom title={'Полученный доход (?)'} icon={btc}>
                  <Numbers data={'1.201 BTC'} />
                  <ButtonViolet info text={'Инвестировать'} />
                </BlockNom>
                <Block title={'Баланс кошелька'} icon={wallet}>
                  <Numbers data={'0.221 BTC'} />
                  <CommonLink>Gdf...fdsw</CommonLink>
                  <ButtonBlue info text={'Вывод'} />
                </Block>
                <Block title={'Курс'} icon={course}>
                  <ul className={css.courses}>
                    <li>1 TH/s = 0.15 BTC</li>
                    <li>1 BTC = 6 952,04$</li>
                    <li>1 BTC = 399 574P</li>
                  </ul>
                </Block>
              </Aside>
              <Main>{props.children}</Main>
              {props.menuIsOpen && <MobileMenuInvestor />}
            </MainContainer>
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.investorHomePageData.dataIsLoading,
      isLoaded: state.investorHomePageData.dataIsLoaded,
      authorized: state.investorHomePageData.authorized,
    }
  },
  { investorHomePageData }
)(Investor)
