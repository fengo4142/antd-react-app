import React from "react";
import { Menu, Button, Badge } from "antd";
import DropdownBox from "../components/DropdownBox";

const dropdownMenuData = [
  { key: 1, type: "search", value: "Personal Information" },
  {
    key: 2,
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
  },
  {
    key: 3,
    type: "select",
    value: [
      {
        key: 1,
        value: "English"
      },
      {
        key: 2,
        value: "German"
      },
      {
        key: 3,
        value: "Spanish"
      }
    ]
  },

  { key: 4, type: "item", value: "Settings" },
  { key: 5, type: "item", value: "Logout" }
];

class MainHeaderMenu extends React.Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        className="header-menu-bar"
      >
        <Menu.Item key="1" className="App-logo n-space">
          Logo
        </Menu.Item>
        <Menu.Item key="2" className="n-border">
          <Badge count={17}>
            <Button icon="bell" className="menu-button" />
          </Badge>
        </Menu.Item>
        <Menu.Item key="3" className="n-border">
          <DropdownBox
            className="menu-dropdown"
            iconName="bars"
            data={dropdownMenuData}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainHeaderMenu;
