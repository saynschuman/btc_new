import React, { Component } from "react";
import PropTypes from "prop-types";
import { parseJwt } from "../../../../../../helpers/parseJwt"

class AdminHeader extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool
  };
  render() {
    return (
      <div className="admin-header">
        <ul>
          <li>Панель администратора</li>
          <li />
          <li>ID: {parseJwt(localStorage.getItem("token")).id.slice(0, 7)}</li>
        </ul>
      </div>
    );
  }
}

export default AdminHeader;
