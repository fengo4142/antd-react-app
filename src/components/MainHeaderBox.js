import React from "react";
import { Menu, Button, Badge } from "antd";
import SearchBox from "../components/SearchBox";
import SelectBox from "../components/SelectBox";
import DropdownBox from "../components/DropdownBox";

const dropdownMenuData = [
  { key: 1, type: "item", value: "Personal Information" },
  { key: 2, type: "item", value: "Password" },
  { key: 3, type: "item", value: "Notification" },
  { key: 4, type: "item", value: "Markup" },
  { key: 5, type: "item", value: "Sales Representatives" },
  { key: 6, type: "item", value: "Saved Searches" },
  { key: 7, type: "item", value: "Vehicle Alerts" },
  {
    key: 8,
    type: "select",
    value: [
      {
        key: 1,
        value: "Car"
      },
      {
        key: 2,
        value: "Truck"
      },
      {
        key: 3,
        value: "Bike"
      }
    ]
  }
];

class MainHeaderBox extends React.Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        className="header-menu-bar"
      >
        <Menu.Item key="0" className="App-logo">
          Logo
        </Menu.Item>
        <Menu.Item key="1" className="menu-item-link">
          Buy
        </Menu.Item>
        <Menu.Item key="2" className="menu-item-link n-space">
          Sell
        </Menu.Item>
        <Menu.Item key="3" className="n-border">
          <SearchBox />
        </Menu.Item>
        <Menu.Item key="4" className="n-border">
          <SelectBox />
        </Menu.Item>
        <Menu.Item key="5" className="n-border">
          <Badge count={17}>
            <Button icon="bell" className="menu-button" />
          </Badge>
        </Menu.Item>
        <Menu.Item key="6" className="n-border">
          <DropdownBox
            className="menu-dropdown"
            iconName="setting"
            data={dropdownMenuData}
          />
        </Menu.Item>
        <Menu.Item key="7" className="n-border">
          <Button icon="logout" className="menu-button" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainHeaderBox;
