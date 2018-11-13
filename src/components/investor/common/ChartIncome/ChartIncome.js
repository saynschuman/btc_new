import React from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { getCourse, getCourseHistory } from '../../../../actions'
import moment from 'moment'

class Chart extends React.Component {
  render() {
    const options = {
      responsive: true,
      tooltips: {
        mode: 'label'
      },
      hover: {
        mode: 'dataset'
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              show: true,
              labelString: 'Month'
            }
          }
        ],
        yAxes: [
          {
            display: false,
            scaleLabel: {
              show: false,
              labelString: 'Value'
            },
            ticks: {
              suggestedMin: 2,
              suggestedMax: 1
            }
          }
        ]
      }
    }
    const data = {
      labels: ['Month', 'Month', 'Month', 'Month', 'Month'],
      datasets: [
        {
          label: 'Месяц',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.1)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [1, 2, 3, 2, 4]
        }
      ]
    }
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    )
  }
}

export default connect(null)(Chart)
