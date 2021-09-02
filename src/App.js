import React, { useState } from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import cart from "./cart-shopping.png";
import button from "./button.png";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (newCollapsed) => {
    setCollapsed(newCollapsed);
  };
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: 0, background: "yellow" }} />
        <Content>
          <Sider
            className="site-layout-background"
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <div className="gia-la-em-min-min">
            <Breadcrumb style={{ margin: "16px 0", background: "cyan" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100%" }}
            >
              <div className="box-img-shopping">
                <img src={cart} alt="cart" style={{ height: "100px" }} />
                <div className="box-number-shopping">{count}</div>
              </div>
              <div className="box_choise_1">
                <button onClick={() => setCount(count + 1)}>
                  <img src={button} alt="button" style={{ height: "100px" }} />
                  <div className="box-number-1">+</div>
                </button>
              </div>
              <div className="box_choise_2">
                <button
                  onClick={() => {
                    if (count - 1 >= 0) setCount(count - 1);
                  }}
                >
                  <img src={button} alt="button" style={{ height: "100px" }} />
                  <div className="box-number-2">-</div>
                </button>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "green" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
