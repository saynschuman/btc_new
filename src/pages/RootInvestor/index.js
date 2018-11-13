import React from 'react'
import { connect } from 'react-redux'
import { investorHomePageData } from '../../modules/investorHomePageData'
import PagePreloader from '../../components/common/PagePreloader'

class Investor extends React.Component {
  componentDidMount() {
    this.props.investorHomePageData(localStorage.getItem('token'))
  }
  render() {
    return (
      <div>
        {this.props.isLoading && <PagePreloader />}
        {this.props.isLoaded && 'loaded'}
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.investorHomePageData.dataIsLoading,
      isLoaded: state.investorHomePageData.dataIsLoaded,
    }
  },
  { investorHomePageData }
)(Investor)
