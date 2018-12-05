import React from "react"
import CourseChart from "../../../../common/general/CourseChart"
import BigBlock from "../../../../common/general/BigBlock"
import Block from "../../../../common/investor/blocks/Block"
import IncomeChart from '../../../../common/general/IncomeChart'

const Index = () => {
  return (
    <div>
      <BigBlock
        title={"График курса BTC"}
        courseBtcUSD={"6 952,04"}
        courseBtcRUB={"399 574"}
      >
        <CourseChart />
      </BigBlock>
      <Block
        title={"График доходности проекта, %"}
        courseBtcUSD={"6 952,04"}
        courseBtcRUB={"399 574"}
      >
        <IncomeChart />
      </Block>
    </div>
  )
}

export default Index
