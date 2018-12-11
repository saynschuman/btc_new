import React from "react";
import CustomCheckbox from "../../../commmon/CustomCheckbox/CustomCheckbox";

class PortalNews extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.ind}</td>
        <td>{this.props.link}</td>
        <td>
          <CustomCheckbox />
        </td>
        <td>
          <div className="close-button-admin" />
        </td>
      </tr>
    );
  }
}

export default PortalNews;
