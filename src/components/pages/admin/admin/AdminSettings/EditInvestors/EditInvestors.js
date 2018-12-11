import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";
import CustomCheckbox from "../../../commmon/CustomCheckbox/CustomCheckbox";
import classNames from "classnames";

class EditInvestors extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <CustomInput
            type={"text"}
            className={classNames("id", {
              cantEdit: true
            })}
            value={this.props.id}
            disabled={true}
          />
        </td>
        <td>
          <CustomInput
            type={"text"}
            className={classNames({
              cantEdit: true
            })}
            value={this.props.name}
            disabled={true}
          />
        </td>
        <td>
          <CustomInput
            type={"text"}
            className={classNames({
              cantEdit: true
            })}
            value={this.props.surName}
            disabled={true}
          />
        </td>
        <td>
          <CustomCheckbox checked={this.props.status} />
        </td>
        <td>
          <div className="close-button-admin" />
        </td>
      </tr>
    );
  }
}

export default EditInvestors;
