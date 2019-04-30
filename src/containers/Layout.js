import React from "react";
import { Layout } from "antd";
import MediaQuery from "react-responsive";

import MainHeaderBox from "../components/MainHeaderBox";
import MainHeaderMenu from "../components/MainHeaderMenu";
import SubHeaderBox from "../components/SubHeaderBox";
import SubHeaderMenu from "../components/SubHeaderMenu";

const { Header, Content, Footer, Sider } = Layout;
const submenuData = [
  { key: 1, value: "Watching" },
  { key: 2, value: "Avaiable" },
  { key: 3, value: "Purchased" },
  { key: 4, value: "Pending Offers" },
  { key: 5, value: "Hidden" }
];

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <MediaQuery query="(min-device-width: 1025px)">
            <MainHeaderBox />
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1024px)">
            <MainHeaderMenu />
          </MediaQuery>
          <MediaQuery query="(min-device-width: 1025px)">
            <SubHeaderBox data={submenuData} />
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1024px)">
            <SubHeaderMenu data={submenuData} default={"Avaiable"} />
          </MediaQuery>
        </Header>
        <Content className="main-content">
          <Layout className="main-body-layout">
            <MediaQuery query="(min-device-width: 1025px)">
              <Sider width={280} className="main-body-sider" />
            </MediaQuery>
            <Content className="main-body-content">&nbsp;</Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2019 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default CustomLayout;
