import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";

class PaysTable extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.investorId}</td>
        <td>{this.props.investitionId}</td>
        <td>{this.props.name}</td>
        <td>{this.props.surName}</td>
        <td className={"green"}>{this.props.paySize}</td>
        <td className={"blue"}>{this.props.koef}</td>
        <td>
          <CustomInput value={this.props.koef} className={"bordered-input"} />
        </td>
      </tr>
    );
  }
}

export default PaysTable;
