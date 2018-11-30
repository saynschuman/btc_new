import React from "react";

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
      <input
        className={this.props.className}
        type={this.props.type}
        onChange={e => this.handleChange(e)}
        value={this.state.value}
        disabled={this.props.disabled}
      />
    );
  }
}

export default CustomInput;
