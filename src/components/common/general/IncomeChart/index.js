import React from "react"
import { Line } from "react-chartjs-2"
import css from './index.module.scss'

class Index extends React.Component {
  render() {
    const options = {
      responsive: true,
      tooltips: {
        bodyFontColor: "white",
        backgroundColor: 'rgba(9, 213, 92, 0.4)',
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
              suggestedMin: 5,
              suggestedMax: 10
            }
          }
        ]
      }
    }
    const data = canvas => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0, 40, 200, 0)
      gradient.addColorStop(0, "rgba(0,255,186, .15)")
      gradient.addColorStop(1, "rgba(1,186,255, .15)")
      const borderGradient = ctx.createLinearGradient(0, 40, 200, 0)
      borderGradient.addColorStop(0, "rgba(0,255,186, .8)")
      borderGradient.addColorStop(1, "rgba(1,186,255, .8)")
      return {
        labels: ["month", "month", "month", "month", "month"],
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
            data: [1, 7, 3, 2, 5, 6]
          }
        ]
      }
    }
    return (
      <div className={css.wrapper}>
        <Line data={data} height={90} options={options} />
      </div>
    )
  }
}

export default Index
