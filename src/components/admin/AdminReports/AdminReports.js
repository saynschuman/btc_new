import React from 'react'
import './AdminReports.scss'
import classNames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import InvestorReport from './InvestorReport/InvestorReport'
import { connect } from 'react-redux'
import { getInvestorsReport, getInvestitionsReport } from '../../../actions'
import ReportsLoader from '../AdminReports/ReportsLoader/ReportsLoader'
import AdminsLoader from '../AdminSettings/AdminsLoader/AdminsLoader'
import InvestorReportMobile from './InvestorReportMobile/InvestorReportMobile'
import InvestitionsReport from './InvestitionsReport/InvestitionsReport'
import InvestitionsReportMobile from './InvestitionsReportMobile/InvestitionsReportMobile'

class AdminReports extends React.Component {
  componentDidMount() {
    this.props.getInvestorsReport()
    this.props.getInvestitionsReport()
  }
  state = {
    investors: true,
    investitions: false,
  }
  handleTabs = () => {
    this.setState({
      investors: !this.state.investors,
      investitions: !this.state.investitions,
    })
  }
  render() {
    return (
      <div>
        <div className="clearfix">
          <div className="col col-50 left">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title title-report">
                  Количество зарегистрированных инвесторов в проекте
                </div>
              </div>
              <p className="block-body">{this.props.investorsCount}</p>
            </div>
          </div>
          <div className="col col-50 right">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title title-report">
                  Сумма инвестиций в проекте
                </div>
              </div>
              <p className="block-body">{this.props.investmentsCount}</p>
            </div>
          </div>
        </div>
        <div className={'admin-block'}>
          <div className="nav-tabs">
            <ul>
              <li
                onClick={this.handleTabs}
                className={classNames({
                  'not-active': !this.state.investors,
                })}
              >
                Отчеты по инвесторам
              </li>
              <li
                onClick={this.handleTabs}
                className={classNames({
                  'not-active': !this.state.investitions,
                })}
              >
                Отчеты по инвестициям
              </li>
            </ul>
          </div>
          <div className="search">
            <input
              className={'search-reports'}
              type="text"
              placeholder={'Введите данные'}
            />
          </div>
          {this.state.investors && (
            <div className="table-reports report-investors">
              <div className="settings-body settings-body-desktop">
                <PerfectScrollbar className={'edit-admins-desktop'}>
                  <table className={'settings-table reports-table'}>
                    <tbody>
                      <tr>
                        <th>ID инвестора</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Общая мощность инвестора в данный момент (TH/s)</th>
                        <th>Выплачено всего</th>
                        <th>Телефон</th>
                        <th>E-mail</th>
                        <th>История мощности</th>
                      </tr>
                      {this.props.isLoading && <ReportsLoader />}
                      {this.props.isLoaded &&
                        this.props.investorsReports.map(report => {
                          return (
                            <InvestorReport
                              key={report.id}
                              id={report.id}
                              name={report.name}
                              surName={report.surName}
                              power={report.power}
                              payed={report.payed}
                              phone={report.phone}
                              email={report.email}
                            />
                          )
                        })}
                    </tbody>
                  </table>
                </PerfectScrollbar>
              </div>
              <div className="settings-body settings-body-mobile">
                <PerfectScrollbar className={'edit-admins-mobile'}>
                  {this.props.isLoading && <AdminsLoader />}
                  {this.props.isLoaded &&
                    this.props.investorsReports.map(report => {
                      return (
                        <InvestorReportMobile
                          key={report.id}
                          id={report.id}
                          name={report.name}
                          surName={report.surName}
                          power={report.power}
                          payed={report.payed}
                          phone={report.phone}
                          email={report.email}
                        />
                      )
                    })}
                </PerfectScrollbar>
              </div>
            </div>
          )}
          {this.state.investitions && (
            <div className="table-reports report-investitions">
              <div className="settings-body settings-body-desktop">
                <PerfectScrollbar className={'edit-admins-desktop'}>
                  <table
                    className={
                      'settings-table reports-table investitions-table-desk'
                    }
                  >
                    <tbody>
                      <tr>
                        <th>ID инвестиции</th>
                        <th>Дата инвестиции</th>
                        <th>ID инвестора</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Начальная сумма инвестиции</th>
                        <th>Остаток инвестиции</th>
                        <th>Коэфф. начисления</th>
                        <th>Дата окончания инвестиции</th>
                        <th>Уже начислено по данной инвестиции</th>
                      </tr>
                      {this.props.investitionsIsLoading && <ReportsLoader />}
                      {this.props.investitionsIsLoaded &&
                        this.props.investitions.map(report => {
                          return (
                            <InvestitionsReport
                              key={report.id}
                              id={report.id}
                              name={report.name}
                              surName={report.surName}
                              date={report.dateInv}
                              investorId={report.investorId}
                              startSumm={report.startSumm}
                              leftInv={report.leftInv}
                              koef={report.koef}
                              dateEnd={report.dateEnd}
                              alreadyPayed={report.alreadyPayed}
                            />
                          )
                        })}
                    </tbody>
                  </table>
                </PerfectScrollbar>
              </div>
              <div className="settings-body settings-body-mobile">
                <PerfectScrollbar className={'edit-admins-mobile'}>
                  {this.props.isLoading && <AdminsLoader />}
                  {this.props.isLoaded &&
                    this.props.investitions.map(report => {
                      return (
                        <InvestitionsReportMobile
                          key={report.id}
                          id={report.id}
                          name={report.name}
                          surName={report.surName}
                          date={report.dateInv}
                          investorId={report.investorId}
                          startSumm={report.startSumm}
                          leftInv={report.leftInv}
                          koef={report.koef}
                          dateEnd={report.dateEnd}
                          alreadyPayed={report.alreadyPayed}
                        />
                      )
                    })}
                </PerfectScrollbar>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      investorsReports: state.reports.investorsReports,
      isLoading: state.reports.isLoading,
      isLoaded: state.reports.isLoaded,
      investitions: state.reports.investitionsReports,
      investitionsIsLoading: state.reports.investitionsIsLoading,
      investitionsIsLoaded: state.reports.investitionsIsLoaded,
      investorsCount: state.adminHomePageData.adminHomePageData.totalInvestors,
      investmentsCount:
        state.adminHomePageData.adminHomePageData.totalActiveInvestments,
    }
  },
  { getInvestorsReport, getInvestitionsReport }
)(AdminReports)
