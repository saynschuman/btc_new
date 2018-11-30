import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";

class YieldTable extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.ind + 1}</td>
        <td>{this.props.month}</td>
        <td>
          <CustomInput className={"bordered-input"} value={this.props.yield} />
        </td>
        <td className={"green"}>{this.props.yield}</td>
      </tr>
    );
  }
}

export default YieldTable;
