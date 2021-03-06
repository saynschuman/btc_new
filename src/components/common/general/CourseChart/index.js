import React from "react"
import { Line } from "react-chartjs-2"
import css from "./index.module.scss"
import moment from "moment"

class Index extends React.Component {
  render() {
    const options = {
      responsive: true,
      tooltips: {
        bodyFontColor: "white",
        backgroundColor: "rgba(137, 0, 255, 0.3)",
        xPadding: 10,
        yPadding: 7
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
        display: false,
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
              suggestedMin: this.props.courses.map(course => course.USD)[0],
              suggestedMax: this.props.courses.map(course => course.USD)[
                this.props.courses.map(course => course.USD).length - 1
              ]
            }
          }
        ]
      }
    }
    const data = canvas => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0, 40, 200, 0)
      gradient.addColorStop(0, "rgba(208, 16, 255, 0.2)")
      gradient.addColorStop(1, "rgba(36, 156, 255, 0.2)")
      const borderGradient = ctx.createLinearGradient(0, 40, 200, 0)
      borderGradient.addColorStop(0, "rgba(208, 16, 255, 0.9)")
      borderGradient.addColorStop(1, "rgba(36, 156, 255, 0.9)")
      return {
        labels: this.props.courses.map(course =>
          moment(Date.parse(course.date)).format("MMM Do YY")
        ),
        datasets: [
          {
            hidden: false,
            fill: true,
            borderWidth: 5,
            lineTension: 0.2,
            backgroundColor: gradient,
            borderColor: borderGradient,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 0,
            pointRadius: 7,
            pointHitRadius: 10,
            data: this.props.courses.map(course => course.USD)
          }
        ]
      }
    }
    return (
      <div className={css.wrapper}>
        <Line data={data} height={120} options={options} />
      </div>
    )
  }
}

export default Index
