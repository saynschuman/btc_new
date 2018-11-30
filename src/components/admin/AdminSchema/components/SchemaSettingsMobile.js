import React from "react";

class InvestPeriodMobile extends React.Component {
  render() {
    return (
      <div className={"settings-table-mobile invest-period-mobile"}>
        <table className={"settings-table reports-table"}>
          <tbody>
            <tr>
              <td>Добыто системой фактически, BTC</td>
              <td>{this.props.minedActually}</td>
            </tr>
            <tr>
              <td>Добыто системой для цели расчета, BTC</td>
              <td>{this.props.minedForCalculation}</td>
            </tr>
            <tr>
              <td>Данные шахты от</td>
              <td>{this.props.mineData}</td>
            </tr>
            <tr>
              <td>Обновлено администра тором</td>
              <td>{this.props.updatedByAdmin}</td>
            </tr>
          </tbody>
        </table>
        <div className="close-button-admin-moblie">Удалить</div>
      </div>
    );
  }
}

export default InvestPeriodMobile;
