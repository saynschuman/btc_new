import React from "react"
import css from "./index.module.scss"
import classNames from "classnames"
import {
  TableHeader,
  TableBody,
  default as CustomTable,
  ActiveInvestTableBody
} from "../../../../common/general/CustomTable"
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

const activeHeaders = [
  "Дата входа",
  "Срок",
  "Сумма TH/s",
  `Стоимость до конца <br /> срока (?)`,
  `Коэфициент <br /> начисления`,
  "Выплачено",
  "Продажа (?)"
]

const historyHeaders = [
  "Дата",
  "Срок",
  `Коэфициент <br /> начисления`,
  "Операция",
  "Сумма BTC",
  "Сумма TH/s",
  "Статус (?)"
]

const data = [
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  },
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  },
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  },
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  },
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  },
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  },
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  },
  {
    datePurchased: "01.01.2018",
    durationMonth: "1 месяц",
    hashRatePrice: "0.05453",
    originalHashRate: "01.01.2018 (53 дня)",
    coefficient: 0.5,
    sold: "0.05453"
  }
]

const data1 = [
  "01.01.2018",
  "1 месяц",
  "0.6",
  "Продажа",
  "0.05453",
  "0.05453",
  "Подтверждено"
]

class Settings extends React.Component {
  state = {
    investors: true,
    investitions: false
  }
  handleTabs = () => {
    this.setState({
      investors: !this.state.investors,
      investitions: !this.state.investitions
    })
  }
  render() {
    return (
      <div>
        <div className={css.tabs}>
          <div
            onClick={this.handleTabs}
            className={classNames({
              [css.notActive]: !this.state.investors,
              [css.tab]: true
            })}
          >
            Активные инвестиции
          </div>
          <div
            onClick={this.handleTabs}
            className={classNames({
              [css.notActive]: !this.state.investitions,
              [css.tab]: true
            })}
          >
            История инвестиций
          </div>
        </div>

        <PerfectScrollbar>
          <div className={css.tableWrapper}>
            <table className={css.customTable}>
              <tbody>
                {this.state.investors && (
                  <React.Fragment>
                    <TableHeader items={activeHeaders} />
                    <ActiveInvestTableBody data={data} buttonText={"Продать"} />
                  </React.Fragment>
                )}
                {this.state.investitions && (
                  <React.Fragment>
                    <TableHeader items={historyHeaders} />
                    <TableBody data={data1} />
                  </React.Fragment>
                )}
              </tbody>
            </table>
          </div>
        </PerfectScrollbar>
      </div>
    )
  }
}

export default Settings
