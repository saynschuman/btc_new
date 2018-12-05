import React from "react"
import css from "./index.module.scss"
import classNames from "classnames"

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
        {this.state.investors && (
          <table className={css.tableHeader}>
            <tbody>
              <th>Дата входа</th>
              <th>Срок</th>
              <th>Сумма TH/s</th>
              <th>Стоимость до конца срока (?)</th>
              <th>Коэфициент начисления</th>
              <th>Выплачено</th>
              <th>Продажа (?)</th>
            </tbody>
          </table>
        )}
        {this.state.investitions && (
          <table className={css.tableHeader}>
            <tbody>
              <th>Дата</th>
              <th>Срок</th>
              <th>Коэфициент начисления</th>
              <th>Операция</th>
              <th>Сумма BTC</th>
              <th>Сумма TH/s</th>
              <th>Статус (?)</th>
            </tbody>
          </table>
        )}
      </div>
    )
  }
}

export default Settings
