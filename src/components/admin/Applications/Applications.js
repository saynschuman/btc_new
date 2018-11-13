import React from 'react'
import './Applications.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ReportsLoader from '../AdminReports/ReportsLoader/ReportsLoader'
import ApplicationsTable from './components/ApplicationsTable'
import AdminsLoader from '../AdminSettings/AdminsLoader/AdminsLoader'
import ApplicationsTableMobile from './components/ApplicationsTableMobile'
import connect from 'react-redux/es/connect/connect'
import {
  getRequestApplications,
  getHistoryApplications,
} from '../../../actions'
import ApplicationsHistory from './components/ApplicationsHistory'
import ApplicationsHistoryMobile from './components/ApplicationsHistoryMobile'
import moment from 'moment'

class Applications extends React.Component {
  componentDidMount() {
    !this.props.isLoaded && this.props.getRequestApplications()
    !this.props.isLoaded && this.props.getHistoryApplications()
  }
  render() {
    return (
      <div>
        <div className={'admin-block'}>
          <div className="table-reports report-investors">
            <div className="settings-header">
              Таблица начислений инвестора за {moment(new Date()).format('l')}
            </div>
            <div className="settings-body settings-body-desktop">
              <PerfectScrollbar className={'edit-admins-desktop'}>
                <table
                  className={'settings-table reports-table applications-table'}
                >
                  <tbody>
                    <tr>
                      <th>Дата и время заявки</th>
                      <th>ID инвестора</th>
                      <th>ID инвестиции</th>
                      <th>Имя</th>
                      <th>Фамилия</th>
                      <th>Остаток инвестиций, BTC</th>
                      <th>Запрашиваемый объем мощности на продажу, TH/s</th>
                      <th>Цена единицы мощности в момент заявки, BTC</th>
                      <th>Сумма к выплате, BTC</th>
                      <th>ID админ., одобривших заявку</th>
                      <th>Акцептировать</th>
                      <th />
                    </tr>
                    {this.props.isLoading && <ReportsLoader />}
                    {this.props.isLoaded &&
                      this.props.requestApplications.map(report => {
                        return (
                          <ApplicationsTable
                            key={report.investitionId}
                            timeDate={report.timeDate}
                            investorId={report.investorId}
                            investitionId={report.investitionId}
                            name={report.name}
                            surName={report.surName}
                            leftInvest={report.leftInvest}
                            reqValue={report.reqValue}
                            cost={report.cost}
                            summ={report.summ}
                            idAdmAplied={report.idAdmAplied}
                            accept={report.accept}
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
                  this.props.requestApplications.map(report => {
                    return (
                      <ApplicationsTableMobile
                        key={report.investitionId}
                        timeDate={report.timeDate}
                        investorId={report.investorId}
                        investitionId={report.investitionId}
                        name={report.name}
                        surName={report.surName}
                        leftInvest={report.leftInvest}
                        reqValue={report.reqValue}
                        cost={report.cost}
                        summ={report.summ}
                        idAdmAplied={report.idAdmAplied}
                        accept={report.accept}
                      />
                    )
                  })}
              </PerfectScrollbar>
            </div>
            <div className="setting-footer">
              <button className={'save-applies settings-save'}>
                Сохранить одобрения
              </button>
            </div>
          </div>
        </div>
        <div className={'admin-block'}>
          <div className="table-reports report-investors">
            <div className="settings-header">История одобренных заявок</div>
            <div className="settings-body settings-body-desktop">
              <PerfectScrollbar className={'edit-admins-desktop'}>
                <table
                  className={'settings-table reports-table applications-table'}
                >
                  <tbody>
                    <tr>
                      <th>Дата и время заявки</th>
                      <th>Дата выплаты</th>
                      <th>ID инвестора</th>
                      <th>ID инвестиции</th>
                      <th>Имя</th>
                      <th>Фамилия</th>
                      <th>Объем мощности на продажу, TH/s</th>
                      <th>Цена единицы мощности в момент заявки, BTC</th>
                      <th>ID админ., одобривших заявку</th>
                      <th>Сумма к выплате, BTC</th>
                    </tr>
                    {this.props.historyApplicationsIsLoading && (
                      <ReportsLoader />
                    )}
                    {this.props.historyApplicationsIsLoaded &&
                      this.props.historyApplications.map(report => {
                        return (
                          <ApplicationsHistory
                            key={report.investitionId}
                            timeDate={report.timeDate}
                            timePay={report.timePay}
                            investorId={report.investorId}
                            investitionId={report.investitionId}
                            name={report.name}
                            surName={report.surName}
                            powerValue={report.powerValue}
                            cost={report.cost}
                            idAdmAplied={report.idAdmAplied}
                            summ={report.summ}
                          />
                        )
                      })}
                  </tbody>
                </table>
              </PerfectScrollbar>
            </div>
            <div className="settings-body settings-body-mobile">
              <PerfectScrollbar className={'edit-admins-mobile'}>
                {this.props.historyApplicationsIsLoading && <AdminsLoader />}
                {this.props.historyApplicationsIsLoaded &&
                  this.props.historyApplications.map(report => {
                    return (
                      <ApplicationsHistoryMobile
                        key={report.investitionId}
                        timeDate={report.timeDate}
                        timePay={report.timePay}
                        investorId={report.investorId}
                        investitionId={report.investitionId}
                        name={report.name}
                        surName={report.surName}
                        powerValue={report.powerValue}
                        cost={report.cost}
                        idAdmAplied={report.idAdmAplied}
                        summ={report.summ}
                      />
                    )
                  })}
              </PerfectScrollbar>
            </div>
            <div className="setting-footer" />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isLoading: state.reports.requestApplicationsIsLoading,
      isLoaded: state.reports.requestApplicationsIsLoaded,
      requestApplications: state.reports.requestApplications,
      historyApplicationsIsLoading: state.reports.historyApplicationsIsLoading,
      historyApplicationsIsLoaded: state.reports.historyApplicationsIsLoaded,
      historyApplications: state.reports.historyApplications,
    }
  },
  { getRequestApplications, getHistoryApplications }
)(Applications)
