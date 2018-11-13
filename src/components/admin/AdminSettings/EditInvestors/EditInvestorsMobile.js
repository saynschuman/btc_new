import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";
import classNames from "classnames";
import CustomCheckbox from "../../../commmon/CustomCheckbox/CustomCheckbox";

class EditInvestorsMobile extends React.Component {
  render() {
    return (
      <div className={"settings-table-mobile"}>
        <table className={"settings-table"}>
          <tbody>
            <tr>
              <td>ID</td>
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
            </tr>
            <tr>
              <td>Имя</td>
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
            </tr>
            <tr>
              <td>Фамилия</td>
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
            </tr>
            <tr>
              <td>Статус</td>
              <td>
                <CustomCheckbox checked={this.props.status} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="close-button-admin-moblie">Удалить</div>
      </div>
    );
  }
}

export default EditInvestorsMobile;
