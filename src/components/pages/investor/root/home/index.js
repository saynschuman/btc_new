import React from "react"
import CourseChart from "../../../../common/general/CourseChart"
import BigBlock from "../../../../common/general/BigBlock"

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
    </div>
  )
}

export default Index
