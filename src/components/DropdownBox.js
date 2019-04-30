import React from "react";
import { Menu, Dropdown, Button } from "antd";
import SelectBox from "./SelectBox";
import SearchBox from "./SearchBox";
import MenuItem from "antd/lib/menu/MenuItem";

const menu = data => (
  <Menu>
    {data.map(item => {
      if (item.type === "select")
        return (
          <MenuItem key={item.key}>
            <SelectBox data={item.value} />
          </MenuItem>
        );
      else if (item.type === "search")
        return (
          <MenuItem key={item.key}>
            <SearchBox />
          </MenuItem>
        );
      return (
        <MenuItem key={item.key}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            {item.value}
          </a>
        </MenuItem>
      );
    })}
  </Menu>
);

class DropdownBox extends React.Component {
  render() {
    return (
      <div>
        <Dropdown
          overlay={menu(this.props.data)}
          className={this.props.className}
          placement="bottomRight"
        >
          <Button
            icon={this.props.iconName}
            className="menu-button dropdown-menu-button"
          />
        </Dropdown>
      </div>
    );
  }
}

export default DropdownBox;
