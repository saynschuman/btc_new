import React from "react"
import css from "./index.module.scss"
import classNames from "classnames"
import CustomTable from "../../../../common/general/CustomTable"
import { TableHeader, TableBody } from "../../../../common/general/CustomTable"

const activeHeaders = [
  "Дата входа",
  "Срок",
  "Сумма TH/s",
  "Стоимость до конца срока (?)",
  "Коэфициент начисления",
  "Выплачено",
  "Продажа (?)"
]

const historyHeaders = [
  "Дата",
  "Срок",
  "Коэфициент начисления",
  "Операция",
  "Сумма BTC",
  "Сумма TH/s",
  "Статус (?)"
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
              "not-active": !this.state.investors
            })}
          >
            Активные инвестиции
          </div>
          <div
            onClick={this.handleTabs}
            className={classNames({
              "not-active": !this.state.investitions
            })}
          >
            История инвестиций
          </div>
        </div>
        <table className={css.tableHeader}>
          <tbody>
            {this.state.investors && <TableHeader items={activeHeaders} />}
            {this.state.investitions && <TableHeader items={historyHeaders} />}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Settings
