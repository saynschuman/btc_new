import React, { Component } from "react"
import css from "./index.module.scss"
import { connect } from "react-redux"
import { hidePopup } from "../../../../store/modules/loginInvestor"

class Index extends Component {
  render() {
    return (
      <div className={css.wrongData}>
        <div style={{color: this.props.color}}>{this.props.text}</div>
        <span onClick={() => this.props.hidePopup()} className={css.closeWrong} />
      </div>
    )
  }
}

export default connect(
  null,
  { hidePopup }
)(Index)
