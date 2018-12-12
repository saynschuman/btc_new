import React, { Component } from "react"
import PropTypes from "prop-types"
import { renderId } from "../../../../../../helpers/getAdminId"

class AdminHeader extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool
  }

  render() {
    return (
      <div className="admin-header">
        <ul>
          <li>Панель администратора</li>
          <li />
          <li>ID: {renderId()}</li>
        </ul>
      </div>
    )
  }
}

export default AdminHeader
