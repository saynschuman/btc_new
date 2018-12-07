import React from "react";
import css from './index.module.scss'

class CustomInput extends React.Component {
  state = {
    value: this.props.value
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <input style={{width: '100%', maxWidth: `${this.props.width}px`, minWidth: this.props.minWidth}}
        className={css.borderedInput}
        type={this.props.type}
        onChange={e => this.handleChange(e)}
        value={this.state.value}
        disabled={this.props.disabled}
      />
    );
  }
}

export default CustomInput;
