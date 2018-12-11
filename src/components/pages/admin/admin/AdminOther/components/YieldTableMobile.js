import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";

class YieldTableMobile extends React.Component {
  render() {
    return (
      <div className={"settings-table-mobile invest-period-mobile"}>
        <table className={"settings-table reports-table other-table"}>
          <tbody>
            <tr>
              <td className={"month-col"}>{this.props.month}</td>
              <td>
                <CustomInput
                  className={"bordered-input"}
                  value={this.props.yield}
                />
                <div className={"green-field"}>{this.props.yield}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default YieldTableMobile;
