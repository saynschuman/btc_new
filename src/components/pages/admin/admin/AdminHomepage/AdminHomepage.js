import React from "react"
import "./AdminHomepage.scss"
import { Line } from "react-chartjs-2"
import { connect } from "react-redux"
import prettyPrice from "../../../../../helpers/prettyPrice"
import moment from "moment"
import {
  getHomePageAdminData,
  getCourse,
  getCourseHistory
} from "../../../actions"

class AdminHomepage extends React.Component {
  componentDidMount() {
    this.props.getHomePageAdminData()
    this.props.getCourse()
    this.props.getCourseHistory()
  }
  componentDidUpdate() {
    this.props.isError && window.location.replace("/login-admin")
  }
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
          <div className={"admin-block"}>
            <div className="block-header">
              <div className="header-title">Количество инвесторов</div>
            </div>
            <p className="block-body">{totalInvestors}</p>
          </div>
          <div className={"admin-block"}>
            <div className="block-header">
              <div className="header-title users">
                Количество активных инвесторов
              </div>
            </div>
            <p className="block-body">{activeInvestors}</p>
          </div>
          <div className={"admin-block"}>
            <div className="block-header">
              <div className="header-title light">
                Остаток мощности у проекта
              </div>
            </div>
            <p className="block-body">{platformHashRate} TH/s</p>
          </div>
          <div className={"admin-block"}>
            <div className="block-header">
              <div className="header-title graph">
                Текущая стоимость единицы мощности
              </div>
            </div>
            <p className="block-body smaller38">{hashRatePrice} TH/s = 1 BTC</p>
          </div>
        </div>
        <div className="col col-right">
          <div className={"admin-block gr"}>
            <div className="block-header">
              <div className="header-title no-ic">График курса BTC</div>
            </div>
            {this.props.courseHistoryIsLoading && <div style={{paddingLeft: 45, paddingTop: 10}}>Загрузка...</div>}
            {this.props.courseHistoryIsLoaded && (
              <Line data={data} options={options} />
            )}
            <p className="block-body smaller28">
              {this.props.courseIsLoaded &&
                `1BTC = ${prettyPrice(
                  this.props.course.course.USD
                )}$ 1BTC = ${prettyPrice(this.props.course.course.RUB)}P`}
            </p>
          </div>
          <div className="col middle mr">
            <div className={"admin-block"}>
              <div className="block-header">
                <div className="header-title hand">
                  Мощность всех инвесторов
                </div>
              </div>
              <p className="block-body smaller38">{totalHashRateSold} TH/s</p>
            </div>
          </div>
          <div className="col middle ml">
            <div className={"admin-block"}>
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
      courses: state.courseHistory.courseHistory,
      courseHistoryIsLoading: state.courseHistory.isLoading,
      courseHistoryIsLoaded: state.courseHistory.isLoaded,
      isError: state.adminHomePageData.isError
    }
  },
  { getHomePageAdminData, getCourse, getCourseHistory }
)(AdminHomepage)
