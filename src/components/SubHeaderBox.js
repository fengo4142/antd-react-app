import React from "react";

import { Button, Row, Col } from "antd";

class SubHeaderMenu extends React.Component {
  render() {
    return (
      <Row>
        <Col span={18} offset={5}>
          <div className="sub-header-menu">
            {this.props.data.map(item => (
              <Button
                size="large"
                key={item.value}
                autoFocus={item.active}
                className="sub-header-menu-button"
              >
                {item.value}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    );
  }
}

export default SubHeaderMenu;
