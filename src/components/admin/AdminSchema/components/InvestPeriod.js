import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";

class InvestPeriod extends React.Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td className={"input-58"}>
          <CustomInput
            className={"bordered-input"}
            value={this.props.quantity}
          />
        </td>
        <td className={"input-84"}>
          <CustomInput className={"bordered-input"} value={this.props.koef} />
        </td>
        <td>
          <div className="close-button-admin" />
        </td>
      </tr>
    );
  }
}

export default InvestPeriod;
