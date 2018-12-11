import React from "react";
import CustomInput from "../../../commmon/CustomInput/CustomInput";
import CustomSelect from "../../../commmon/CustomSelect/CustomSelect";
import classNames from "classnames";

const rules = [
  { value: "admin", label: "Админ" },
  { value: "moderator", label: "Модератор" },
  { value: "investor", label: "Инвестор" }
];

class EditAdmins extends React.Component {
  state = {
    cantEdit: true,
    editButton: "Редактировать"
  };
  handleEdit = () => {
    if (this.state.cantEdit) {
      this.setState({
        cantEdit: false,
        editButton: "Сохранить"
      });
    } else {
      this.setState({
        cantEdit: true,
        editButton: "Редактировать"
      });
    }
  };
  render() {
    return (
      <tr>
        <td>
          <CustomInput
            type={"text"}
            className={classNames("id", { cantEdit: this.state.cantEdit })}
            value={this.props.id}
            disabled={this.state.cantEdit}
          />
        </td>
        <td>
          <CustomInput
            type={"password"}
            className={classNames("password", {
              cantEdit: this.state.cantEdit
            })}
            value={this.props.password}
            disabled={this.state.cantEdit}
          />
        </td>
        <td>
          <CustomSelect data={rules} value={this.props.rules} />
        </td>
        <td>
          <CustomInput
            type={"text"}
            className={classNames({ cantEdit: this.state.cantEdit })}
            value={this.props.email}
            disabled={this.state.cantEdit}
          />
        </td>
        <td>
          <button
            onClick={this.handleEdit}
            className={classNames("edit-admin-button", {
              saveButton: !this.state.cantEdit
            })}
          >
            {this.state.editButton}
          </button>
        </td>
        <td>
          <div className="close-button-admin" />
        </td>
      </tr>
    );
  }
}

export default EditAdmins;
