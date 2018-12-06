import React from "react"
import css from "./index.module.scss"
import classNames from "classnames"
import Desktop from "./components/desktop"
import Mobile from "./components/mobile"

class Settings extends React.Component {
  state = {
    investors: true,
    investitions: false
  }
  handleTabs = () => {
    this.setState({
      investors: !this.state.investors,
      investitions: !this.state.investitions
    })
  }
  render() {
    return (
      <div>
        <div className={css.tabs}>
          <div
            onClick={this.handleTabs}
            className={classNames({
              [css.notActive]: !this.state.investors,
              [css.tab]: true
            })}
          >
            Активные инвестиции
          </div>
          <div
            onClick={this.handleTabs}
            className={classNames({
              [css.notActive]: !this.state.investitions,
              [css.tab]: true
            })}
          >
            История инвестиций
          </div>
        </div>
        <Desktop
          investitions={this.state.investitions}
          investors={this.state.investors}
        />
        <Mobile
          investitions={this.state.investitions}
          investors={this.state.investors}
        />
      </div>
    )
  }
}

export default Settings
