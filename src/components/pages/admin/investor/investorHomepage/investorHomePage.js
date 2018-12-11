import React from "react";
import Block from "../common/block";
import BigBlock from "../common/bigBlock";
import ChartCourse from "../common/ChartCourse/ChartCourse";
import ChartIncome from "../common/ChartIncome/ChartIncome";
import { connect } from "react-redux";
import { getCourse } from "../../../actions";

class InvestorHomepage extends React.Component {
  componentDidMount() {
    this.props.getCourse();
  }
  render() {
    return (
      <div>
        <BigBlock
          title={"График курса BTC"}
          courseBtcUSD={this.props.course.USD}
          courseBtcRUB={this.props.course.RUB}
        >
          <ChartCourse />
        </BigBlock>
        <Block title={"График доходности проекта, % "}>
          <ChartIncome />
        </Block>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      course: state.course.course,
      courseIsLoading: state.course.isLoading,
      courseIsLoaded: state.course.isLoaded
    };
  },
  { getCourse }
)(InvestorHomepage);
