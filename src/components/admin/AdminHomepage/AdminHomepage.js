import React from 'react'
import './AdminHomepage.scss'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import prettyPrice from '../../../helpers/prettyPrice'
import moment from 'moment'
import {
  getHomePageAdminData,
  getCourse,
  getCourseHistory,
} from '../../../actions'

class AdminHomepage extends React.Component {
  componentDidMount() {
    this.props.getHomePageAdminData()
    this.props.getCourse()
    this.props.getCourseHistory()
  }
  componentDidUpdate() {
    this.props.isError && window.location.replace('/login-admin')
  }
  render() {
    const options = {
      responsive: true,
      tooltips: {
        mode: 'label',
      },
      hover: {
        mode: 'dataset',
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              show: true,
              labelString: 'Month',
            },
          },
        ],
        yAxes: [
          {
            display: false,
            scaleLabel: {
              show: false,
              labelString: 'Value',
            },
            ticks: {
              suggestedMin: this.props.courseHistory.map(
                course => course.RUB
              )[0],
              suggestedMax: this.props.courseHistory.map(course => course.RUB)[
                this.props.courseHistory.map(course => course.RUB).length - 1
              ],
            },
          },
        ],
      },
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
          data: this.props.courseHistory.map(course => course.RUB),
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
          data: this.props.courseHistory.map(course => course.USD),
        },
      ],
    }
    const totalInvestors = this.props.adminHomePageData.totalInvestors
    const activeInvestors = this.props.adminHomePageData.activeInvestors
    const totalActiveInvestments = this.props.adminHomePageData
      .totalActiveInvestments
    const totalHashRateSold = this.props.adminHomePageData.totalHashRateSold
    const platformHashRate = this.props.adminHomePageData.platformHashRate
    const hashRatePrice = this.props.adminHomePageData.hashRatePrice
    return (
      <div>
        <div className="col col-left">
          <div className={'admin-block'}>
            <div className="block-header">
              <div className="header-title">Количество инвесторов</div>
            </div>
            <p className="block-body">{totalInvestors}</p>
          </div>
          <div className={'admin-block'}>
            <div className="block-header">
              <div className="header-title users">
                Количество активных инвесторов
              </div>
            </div>
            <p className="block-body">{activeInvestors}</p>
          </div>
          <div className={'admin-block'}>
            <div className="block-header">
              <div className="header-title light">
                Остаток мощности у проекта
              </div>
            </div>
            <p className="block-body">{platformHashRate} TH/s</p>
          </div>
          <div className={'admin-block'}>
            <div className="block-header">
              <div className="header-title graph">
                Текущая стоимость единицы мощности
              </div>
            </div>
            <p className="block-body smaller38">{hashRatePrice} TH/s = 1 BTC</p>
          </div>
        </div>
        <div className="col col-right">
          <div className={'admin-block gr'}>
            <div className="block-header">
              <div className="header-title">График курса BTC</div>
            </div>
            <Line data={data} options={options} />
            <p className="block-body smaller28">
              {this.props.courseIsLoaded &&
                `1BTC = ${prettyPrice(
                  this.props.course.course.USD
                )}$ 1BTC = ${prettyPrice(this.props.course.course.RUB)}P`}
            </p>
          </div>
          <div className="col middle mr">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title hand">
                  Мощность всех инвесторов
                </div>
              </div>
              <p className="block-body smaller38">{totalHashRateSold} TH/s</p>
            </div>
          </div>
          <div className="col middle ml">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title money">
                  Количество активных инвестиций
                </div>
              </div>
              <p className="block-body smaller38">{totalActiveInvestments}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      adminHomePageData: state.adminHomePageData.adminHomePageData,
      course: state.course,
      courseIsLoading: state.course.isLoading,
      courseIsLoaded: state.course.isLoaded,
      courseHistory: state.courseHistory.courseHistory,
      courseHistoryIsLoading: state.courseHistory.isLoading,
      courseHistoryIsLoaded: state.courseHistory.isLoaded,
      isError: state.adminHomePageData.isError,
    }
  },
  { getHomePageAdminData, getCourse, getCourseHistory }
)(AdminHomepage)
