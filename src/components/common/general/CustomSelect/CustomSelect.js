import React from "react"
import css from './index.module.scss'
import Select from "react-select"

class CustomSelect extends React.Component {
  state = {
    selectedOption: ""
  }
  handleChangeOption = selectedOption => {
    this.setState({ selectedOption })
  }
  render() {
    return (
      <div className={css.selectWrapper}>
        <Select
          className={"rules"}
          value={this.state.selectedOption}
          onChange={this.handleChangeOption}
          options={this.props.data}
          placeholder={this.props.value}
        />
        <div className={css.commssionBlock}>
          <div className={css.commission}>0.014BTC</div>
          <div className={css.commissionTitle}>
            Сбор засамое быстрое подтверждение
          </div>
        </div>
      </div>
    )
  }
}

export default CustomSelect
