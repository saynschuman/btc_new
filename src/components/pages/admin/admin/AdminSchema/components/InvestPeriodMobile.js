import React from "react";

class InvestPeriodMobile extends React.Component {
  render() {
    return (
      <div className={"settings-table-mobile invest-period-mobile"}>
        <table className={"settings-table reports-table"}>
          <tbody>
            <tr>
              <td>№</td>
              <td>{this.props.ind}</td>
            </tr>
            <tr>
              <td>Кол-во месяцев</td>
              <td>{this.props.monthQuantity}</td>
            </tr>
            <tr>
              <td>Коэфицент начисления</td>
              <td>{this.props.koef}</td>
            </tr>
          </tbody>
        </table>
        <div className="close-button-admin-moblie">Удалить</div>
      </div>
    );
  }
}

export default InvestPeriodMobile;
