import React, { Component } from "react";
import PropTypes from "prop-types";

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
          <li>ID: 36143324</li>
        </ul>
      </div>
    );
  }
}

export default AdminHeader;
