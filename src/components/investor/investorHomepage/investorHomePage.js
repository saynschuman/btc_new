import React from 'react'
import Block from '../common/block'
import BigBlock from '../common/bigBlock'
import ChartCourse from '../common/ChartCourse/ChartCourse'
import ChartIncome from '../common/ChartIncome/ChartIncome'

const InvestorHomepage = props => {
  return (
    <div>
      <BigBlock title={'График курса BTC'} courseBtcUSD={'6 952,04'} courseBtcRUB={'399 574'}>
        <ChartCourse />
      </BigBlock>
      <Block title={'График доходности проекта, % '}>
        <ChartIncome />
      </Block>
    </div>
  )
}

export default InvestorHomepage
