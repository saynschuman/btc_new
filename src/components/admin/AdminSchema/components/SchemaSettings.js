import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";

class SchemaSettings extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.minedActually}</td>
        <td>
          <CustomInput
            className={"bordered-input"}
            value={this.props.minedForCalculation}
          />
        </td>
        <td>{this.props.mineData}</td>
        <td>{this.props.updatedByAdmin}</td>
      </tr>
    );
  }
}

export default SchemaSettings;
