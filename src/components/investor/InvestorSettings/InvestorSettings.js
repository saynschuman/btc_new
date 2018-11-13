import React from 'react'
import './InvestorSettings.module.css'
import classNames from 'classnames'

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
      <div className="reportInvestorPage">
        <div className="admin-body reportInvestorPage">
          <div className={'admin-block'}>
            <div className="nav-tabs">
              <ul>
                <li
                  onClick={this.handleTabs}
                  className={classNames({
                    'not-active': !this.state.investors
                  })}
                >
                  Активные инвестиции
                </li>
                <li
                  onClick={this.handleTabs}
                  className={classNames({
                    'not-active': !this.state.investitions
                  })}
                >
                  История инвестиций
                </li>
              </ul>
            </div>
            {this.state.investors && (
              <div className="table-reports report-investors">
                <div className="settings-body settings-body-desktop">
                  <table className={'settings-table reports-table'}>
                    <tbody>
                      <tr>
                        <th>Дата входа</th>
                        <th>Срок</th>
                        <th>Сумма TH/s</th>
                        <th>Стоимость до конца срока (?)</th>
                        <th>Коэфициент начисления</th>
                        <th>Выплачено</th>
                        <th>Продажа (?)</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="settings-body settings-body-mobile" />
              </div>
            )}
            {this.state.investitions && (
              <div className="table-reports report-investitions">
                <div className="settings-body settings-body-desktop">
                  <table className={'settings-table reports-table'}>
                    <tbody>
                      <tr>
                        <th>Дата</th>
                        <th>Срок</th>
                        <th>Коэфициент начисления</th>
                        <th>Операция</th>
                        <th>Сумма BTC</th>
                        <th>Сумма TH/s</th>
                        <th>Статус (?)</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="settings-body settings-body-mobile" />
              </div>
            )}
          </div>
          <div className="admin-block">
            <div className="table-reports report-investitions">
              <div className="settings-header">История операций личного кошелька</div>
              <div className="settings-body settings-body-desktop">
                <table className={'settings-table reports-table'}>
                  <tbody>
                    <tr>
                      <th>Дата</th>
                      <th>Адрес</th>
                      <th>Сумма</th>
                      <th>Тип операций</th>
                      <th>Статус</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="settings-body settings-body-mobile" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
