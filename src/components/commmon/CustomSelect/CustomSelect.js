import React from "react";
import Select from "react-select";

class CustomSelect extends React.Component {
  state = {
    selectedOption: ""
  };
  handleChangeOption = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    return (
      <Select
        className={"rules"}
        value={this.state.selectedOption}
        onChange={this.handleChangeOption}
        options={this.props.data}
        placeholder={"Выберите права"}
      />
    );
  }
}

export default CustomSelect;
