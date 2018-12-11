import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getCourse, getCourseHistory } from "../../../../actions";
import moment from "moment";

class Chart extends React.Component {
  componentDidMount() {
    this.props.getCourse();
    this.props.getCourseHistory();
  }
  render() {
    const options = {
      responsive: true,
      tooltips: {
        mode: "label",
        bodyFontColor: "white"
      },
      layout: {
        padding: {
          left: 70,
          right: 70,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        labels: {
          fontColor: "rgba(255,255,255,1)"
        }
      },
      hover: {
        mode: "dataset"
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              show: true,
              labelString: "Month"
            },
            ticks: {
              fontColor: "#fff"
            }
          }
        ],
        yAxes: [
          {
            display: false,
            scaleLabel: {
              show: false,
              labelString: "Value"
            },
            ticks: {
              suggestedMin: this.props.courseHistory.map(
                course => course.RUB
              )[0],
              suggestedMax: this.props.courseHistory.map(course => course.USD)[
                this.props.courseHistory.map(course => course.USD).length - 1
              ]
            }
          }
        ]
      }
    };
    const data = canvas => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 40, 200, 0);
      gradient.addColorStop(0, "rgba(208, 16, 255, 0.2)");
      gradient.addColorStop(1, "rgba(36, 156, 255, 0.2)");
      const borderGradient = ctx.createLinearGradient(0, 40, 200, 0);
      borderGradient.addColorStop(0, "rgba(208, 16, 255, 0.9)");
      borderGradient.addColorStop(1, "rgba(36, 156, 255, 0.9)");
      return {
        labels: this.props.courseHistory
          .slice(0, 5)
          .map(course => moment(Date.parse(course.date)).format("MMM Do YY")),
        datasets: [
          {
            label: "1BTC (USD)",
            hidden: false,
            fill: true,
            lineTension: 0,
            backgroundColor: gradient,
            borderColor: borderGradient,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: this.props.courseHistory.slice(0, 5).map(course => course.USD)
          }
        ]
      };
    };
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      course: state.course,
      courseIsLoading: state.course.isLoading,
      courseIsLoaded: state.course.isLoaded,
      courseHistory: state.courseHistory.courseHistory,
      courseHistoryIsLoading: state.courseHistory.isLoading,
      courseHistoryIsLoaded: state.courseHistory.isLoaded
    };
  },
  { getCourse, getCourseHistory }
)(Chart);
