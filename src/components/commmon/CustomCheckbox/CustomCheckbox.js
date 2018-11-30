import React from 'react'
import './CustomCheckbox.scss'
import { pin } from '../../../modules/editArticle'
import { connect } from 'react-redux'

class CustomCheckbox extends React.Component {
  state = {
    isChecked: this.props.pinned
  }
  handlePin = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
    this.props.pin(this.props.id, !this.props.pinned)
  }
  render() {
    return (
      <label className="customCheckbox">
        <input type="checkbox" onChange={this.handlePin} checked={this.state.isChecked} />
        <span className="checkmark" />
      </label>
    )
  }
}

export default connect(
  null,
  { pin }
)(CustomCheckbox)
