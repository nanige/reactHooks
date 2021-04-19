// import { useState } from "react";
import { Layout, Menu } from "antd";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { Switch } from "react-router";
import routerList from "../menu/index.js";
import CampusManage from '../views/systemSet/campusManage'
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function AppLayout() {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  function goRouter(path) {
    console.log(path);
    history.push(path);
  }

  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
              {routerList.map((item) => {
                return (
                  <SubMenu key={item.path} title={item.meta.title}>
                    {item.children.map((childItem) => {
                      return (
                        <Menu.Item
                          key={childItem.path}
                          onClick={() => {
                            goRouter(childItem.path);
                          }}
                        >
                          {childItem.meta.title}
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Sider>
        </Sider>
        <Content>
          <Switch>
            {routerList.map((item) => {
              return item.children.map((childItem) => {
                return (
                  <Route
                    path={childItem.path}
                    exact
                    component={childItem.component}
                    key={childItem.path}
                  ></Route>
                );
              });
            })}
          </Switch>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default AppLayout;
