import React from "react"
import CourseChart from "../../../../common/general/CourseChart"
import BigBlock from "../../../../common/general/BigBlock"
import Block from "../../../../common/investor/blocks/Block"
import IncomeChart from "../../../../common/general/IncomeChart"
import { getCourse } from "../../../../../store/modules/getCourse"
import { getCourseHistory } from "../../../../../store/modules/getCourses"
import { connect } from "react-redux"

class Index extends React.Component {
  componentDidMount() {
    !this.props.isLoaded &&
      !this.props.isLoading &&
      this.props.getCourse()
    this.props.getCourseHistory()
  }

  render() {
    return (
      <div>
        <BigBlock
          title={"График курса BTC"}
          courseBtcUSD={this.props.course.USD}
          courseBtcRUB={this.props.course.RUB}
        >
          <CourseChart courses={this.props.courses} />
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
}

const mapStateToProps = state => {
  return {
    isLoading: state.getCourses.isLoading,
    isLoaded: state.getCourses.isLoaded,
    course: state.getCourse.course,
    courses: state.getCourses.courseHistory
  }
}

export default connect(
  mapStateToProps,
  { getCourse, getCourseHistory }
)(Index)
