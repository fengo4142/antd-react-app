import React from "react";
import { Select } from "antd";

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log("blur");
}

class SelectBox extends React.Component {
  handleFocus = (e, data) => {
    console.log(e);
  };
  render() {
    return (
      <Select
        showSearch
        className="select-box"
        placeholder="Select"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={this.handleFocus.bind(this)}
        onBlur={handleBlur}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    );
  }
}

export default SelectBox;
