import React from "react";

import { Select, Row, Col, Menu } from "antd";

const Option = Select.Option;

class SubHeaderMenu extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" className="menu-item-link-mobile">
              Buy
            </Menu.Item>
            <Menu.Item key="2" className="menu-item-link-mobile">
              Sell
            </Menu.Item>
          </Menu>
        </Col>
        <Col>
          <Select
            showSearch
            labelInValue
            style={{ width: 300 }}
            defaultValue={{ key: this.props.default }}
            placeholder="Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {this.props.data.map(item => (
              <Option value={item.value}>{item.value}</Option>
            ))}
          </Select>
        </Col>
      </Row>
    );
  }
}

export default SubHeaderMenu;
