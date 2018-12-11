import React from 'react'
import './AdminPays.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import ReportsLoader from '../AdminReports/ReportsLoader/ReportsLoader'
import AdminsLoader from '../AdminSettings/AdminsLoader/AdminsLoader'
import PaysTable from './components/PaysTable'
import PaysTableMobile from './components/PaysTableMobile'
import { getChargeTable } from '../../../actions'
import moment from 'moment'

class AdminPays extends React.Component {
  componentDidMount() {
    !this.props.isLoaded && this.props.getChargeTable()
  }
  render() {
    return (
      <div>
        <div className="clearfix">
          <div className="col col-50 left">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title title-report">
                  Баланс BTC на кошельке платформы
                </div>
              </div>
              <p className="block-body">0</p>
            </div>
          </div>
          <div className="col col-50 right">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title title-report">
                  Добытый BTC системой за прошедший период (7 дней)
                </div>
              </div>
              <p className="block-body">0</p>
            </div>
          </div>
        </div>
        <div className={'admin-block'}>
          <div className="table-reports report-investors">
            <div className="settings-header">
              Таблица начислений инвестора за {moment(new Date()).format('l')}
            </div>
            <div className="settings-body settings-body-desktop">
              <PerfectScrollbar className={'edit-admins-desktop'}>
                <table className={'settings-table reports-table'}>
                  <tbody>
                    <tr>
                      <th>ID инвестора</th>
                      <th>ID инвестиции</th>
                      <th>Имя</th>
                      <th>Фамилия</th>
                      <th>Размер инвестиций (TH/s)</th>
                      <th>Коэф. начисления</th>
                      <th>Начислено (ред. адм)</th>
                    </tr>
                    {this.props.isLoading && <ReportsLoader />}
                    {this.props.isLoaded &&
                      this.props.chargeTable.map(report => {
                        return (
                          <PaysTable
                            key={report.investorId}
                            investorId={report.investorId}
                            investitionId={report.investitionId}
                            name={report.name}
                            surName={report.surName}
                            paySize={report.paySize}
                            koef={report.koef}
                            payed={report.payed}
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
                  this.props.chargeTable.map(report => {
                    return (
                      <PaysTableMobile
                        key={report.investorId}
                        investorId={report.investorId}
                        investitionId={report.investitionId}
                        name={report.name}
                        surName={report.surName}
                        paySize={report.paySize}
                        koef={report.koef}
                        payed={report.payed}
                      />
                    )
                  })}
              </PerfectScrollbar>
            </div>
            <div className="setting-footer">
              <div className="bottom-title-right">Начислено всего: 0 BTC</div>
              <div className="buttons-block">
                <button>Обновить с учетом добытого за день</button>
                <button>Сохранить расчет</button>
                <button>Разрешить выплату начислений</button>
              </div>
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
      isLoading: state.reports.chargeTableIsLoading,
      isLoaded: state.reports.chargeTableIsLoaded,
      chargeTable: state.reports.chargeTable,
    }
  },
  { getChargeTable }
)(AdminPays)
