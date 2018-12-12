import React, { Component } from "react"
import PropTypes from "prop-types"
import { parseJwt } from "../../../../../../helpers/parseJwt"

class AdminHeader extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool
  }
  renderId = () => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token").length > 0
    ) {
      parseJwt(localStorage.getItem("token")).id.slice(0, 7)
    } else {
      return
    }
  }
  render() {
    return (
      <div className="admin-header">
        <ul>
          <li>Панель администратора</li>
          <li />
          <li>ID: {this.renderId()}</li>
        </ul>
      </div>
    )
  }
}

export default AdminHeader
