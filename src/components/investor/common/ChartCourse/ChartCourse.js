import React from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { getCourse, getCourseHistory } from '../../../../actions'
import moment from 'moment'

class Chart extends React.Component {
  componentDidMount() {
    this.props.getCourse()
    this.props.getCourseHistory()
  }
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
              suggestedMin: this.props.courseHistory.map(course => course.RUB)[0],
              suggestedMax: this.props.courseHistory.map(course => course.RUB)[
                this.props.courseHistory.map(course => course.RUB).length - 1
              ]
            }
          }
        ]
      }
    }
    const data = {
      labels: this.props.courseHistory.map(course =>
        moment(Date.parse(course.date)).format('MMM Do YY')
      ),
      datasets: [
        {
          label: '1BTC (RUB)',
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
          data: this.props.courseHistory.map(course => course.RUB)
        },
        {
          label: '1BTC (USD)',
          hidden: true,
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
          data: this.props.courseHistory.map(course => course.USD)
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

export default connect(
  state => {
    return {
      course: state.course,
      courseIsLoading: state.course.isLoading,
      courseIsLoaded: state.course.isLoaded,
      courseHistory: state.courseHistory.courseHistory,
      courseHistoryIsLoading: state.courseHistory.isLoading,
      courseHistoryIsLoaded: state.courseHistory.isLoaded
    }
  },
  { getCourse, getCourseHistory }
)(Chart)
