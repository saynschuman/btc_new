import React from "react"
import css from "./index.module.scss"
import Select from "react-select"

class CustomSelect extends React.Component {
  state = {
    selectedOption: ""
  }
  handleChangeOption = selectedOption => {
    this.setState({ selectedOption })
  }
  renderCommission = () => {
    switch (this.state.selectedOption.value) {
      case "":
        return this.props.price.high
      case "high":
        return this.props.price.high
      case "middle":
        return this.props.price.middle
      case "low":
        return this.props.price.low
      default:
        return this.props.price.high
    }
  }
  render() {
    return (
      <div className={css.selectWrapper}>
        <Select
          className={"rules"}
          value={this.state.selectedOption}
          placeholder={this.props.selectedValue}
          onChange={this.handleChangeOption}
          options={this.props.data}
        />
        <div className={css.commssionBlock}>
          <div className={css.commission}>
            {this.renderCommission()}
            BTC
          </div>
          <div className={css.commissionTitle}>
            Сбор засамое быстрое подтверждение
          </div>
        </div>
      </div>
    )
  }
}

export default CustomSelect
