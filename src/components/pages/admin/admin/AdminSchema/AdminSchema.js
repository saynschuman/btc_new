import React from 'react'
import './AdminSchema.scss'
import InvestPeriod from './components/InvestPeriod'
import InvestPeriodMobile from './components/InvestPeriodMobile'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import { getInvestPeriod, getSchemaSettings } from '../../../actions'
import ReportsLoader from '../AdminReports/ReportsLoader/ReportsLoader'
import AdminsLoader from '../AdminSettings/AdminsLoader/AdminsLoader'
import SchemaSettings from './components/SchemaSettings'
import SchemaSettingsMobile from './components/SchemaSettingsMobile'

class AdminSchema extends React.Component {
  componentDidMount() {
    !this.props.isLoaded && this.props.getInvestPeriod()
    !this.props.schemaSettingsIsLoaded && this.props.getSchemaSettings()
  }
  render() {
    return (
      <div className={'schema-page'}>
        <div className="clearfix">
          <div className="col col-50 left">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title title-report title-edit">
                  Настройка для расчета покупки/продажи
                </div>
              </div>
              <div className="settings-body">
                <div className="body-title">Стоимость единицы мощности:</div>
                <ul className={'edit-power-q'}>
                  <li>1 TH/s =</li>
                  <li>
                    <input className="bordered-input" />
                  </li>
                  <li>BTC</li>
                </ul>
              </div>
              <div className="settings-footer">
                <div className="buttons-block">
                  <button className={'violet-button'}>Сохранить</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-50 right">
            <div className={'admin-block'}>
              <div className="block-header">
                <div className="header-title title-report title-money">
                  Периоды инвестиций и коэфиценты начислений
                </div>
              </div>
              <div className="settings-body settings-body-desktop">
                <PerfectScrollbar className={'no-ver-scrl'}>
                  <table className="settings-table">
                    <tbody>
                      <tr>
                        <th>№</th>
                        <th>Кол-во месяцев</th>
                        <th>Коэфицент начисления</th>
                        <th />
                      </tr>
                      {this.props.isLoading && <ReportsLoader />}
                      {this.props.isLoaded &&
                        this.props.investPeriod.map((period, index) => (
                          <InvestPeriod
                            key={index}
                            quantity={period.monthQuantity}
                            koef={period.koef}
                          />
                        ))}
                    </tbody>
                  </table>
                </PerfectScrollbar>
              </div>
              <div className="settings-body settings-body-mobile">
                <PerfectScrollbar className={'edit-admins-mobile'}>
                  {this.props.isLoading && <AdminsLoader />}
                  {this.props.isLoaded &&
                    this.props.investPeriod.map((period, index) => {
                      return (
                        <InvestPeriodMobile
                          key={index}
                          ind={index}
                          quantity={period.monthQuantity}
                          koef={period.koef}
                        />
                      )
                    })}
                </PerfectScrollbar>
              </div>
              <div className="settings-footer">
                <div className="buttons-block">
                  <button className={'blue-button'}>Добавить вклад</button>
                  <button className={'violet-button'}>Сохранить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'admin-block'}>
          <div className="table-reports report-investors">
            <div className="settings-header">
              Настройки схемы расчеты для выплаты инвесторам{' '}
            </div>
            <div className="settings-body settings-body-desktop no-pad">
              <PerfectScrollbar className={'edit-admins-desktop'}>
                <table
                  className={'settings-table settings-schema-bottom-table'}
                >
                  <tbody>
                    <tr>
                      <th>Добыто системой фактически, BTC</th>
                      <th>Добыто системой для цели расчета, BTC</th>
                      <th>Данные шахты от</th>
                      <th>Обновлено администратором</th>
                    </tr>
                    {this.props.schemaSettingsIsLoading && <ReportsLoader />}
                    {this.props.schemaSettingsIsLoaded &&
                      this.props.schemaSettings.map((report, index) => {
                        return (
                          <SchemaSettings
                            key={index}
                            minedActually={report.minedActually}
                            minedForCalculation={report.minedForCalculation}
                            mineData={report.mineData}
                            updatedByAdmin={report.updatedByAdmin}
                          />
                        )
                      })}
                  </tbody>
                </table>
              </PerfectScrollbar>
            </div>
            <div className="settings-body settings-body-mobile">
              <PerfectScrollbar className={'edit-admins-mobile'}>
                {this.props.schemaSettingsIsLoading && <AdminsLoader />}
                {this.props.schemaSettingsIsLoaded &&
                  this.props.schemaSettings.map((report, index) => {
                    return (
                      <SchemaSettingsMobile
                        key={index}
                        minedActually={report.minedActually}
                        minedForCalculation={report.minedForCalculation}
                        mineData={report.mineData}
                        updatedByAdmin={report.updatedByAdmin}
                      />
                    )
                  })}
              </PerfectScrollbar>
            </div>
            <div className="setting-footer">
              <div className="settings-save schema-save">Сохранить</div>
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
      investPeriod: state.reports.investPeriod,
      isLoading: state.reports.investPeriodIsLoading,
      isLoaded: state.reports.investPeriodIsLoaded,
      schemaSettings: state.reports.schemaSettings,
      schemaSettingsIsLoading: state.reports.schemaSettingsIsLoading,
      schemaSettingsIsLoaded: state.reports.schemaSettingsIsLoaded,
    }
  },
  { getInvestPeriod, getSchemaSettings }
)(AdminSchema)
