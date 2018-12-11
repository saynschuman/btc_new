import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";

class InvestitionsReportMobile extends React.Component {
  render() {
    return (
      <div className={"settings-table-mobile investitions-mobile"}>
        <table className={"settings-table reports-table"}>
          <tbody>
            <tr>
              <td>ID инвестора </td>
              <td>{this.props.investorId}</td>
            </tr>
            <tr>
              <td>ID инвестиции </td>
              <td>{this.props.investitionId}</td>
            </tr>
            <tr>
              <td>Имя </td>
              <td>{this.props.name}</td>
            </tr>
            <tr>
              <td>Фамилия</td>
              <td>{this.props.surName}</td>
            </tr>
            <tr>
              <td>Коэф. начисления</td>
              <td>{this.props.paySize}</td>
            </tr>
            <tr>
              <td>Начислено (ред. адм) </td>
              <td>
                <CustomInput
                  value={this.props.koef}
                  className={"bordered-input"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InvestitionsReportMobile;
