import { Icon, Layout, Menu } from 'antd';
import * as React from 'react'
import { NavLink } from 'react-router-dom'


const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;

class Main extends React.Component {
  public render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <img width='200px' height='60px' src="http://172.16.10.111/exam/resources/images/logoPicture.png" alt="" />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key="sub1"
                  title={
                      <span>
                        <Icon type="user" />
                        试卷管理
                      </span>
                  }
                >
                  <Menu.Item key="1"><NavLink to="/main/addlist">添加试题</NavLink></Menu.Item>
                  <Menu.Item key="2"><NavLink to="/main/textQuestion">试题分类</NavLink></Menu.Item>
                  <Menu.Item key="3"><NavLink to="/main/checkTextQuestion">查看试题</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      用户管理
                    </span>
                  }
                >
                  <Menu.Item key="5">添加用户</Menu.Item>
                  <Menu.Item key="6">用户展示</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      考试管理
                    </span>
                  }
                >
                  <Menu.Item key="9">添加考试</Menu.Item>
                  <Menu.Item key="10">试卷列表</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="cloud-o" />
                      班级管理
                    </span>
                  }
                >
                  <Menu.Item key="11">班级管理</Menu.Item>
                  <Menu.Item key="12">教室管理</Menu.Item>
                  <Menu.Item key="13">学生管理</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="appstore-o" />
                      阅卷管理
                    </span>
                  }
                >
                  <Menu.Item key="14">待批班级</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>{this.props.children}</Content>
          </Layout>
        </Content>
      </Layout>
    )
  }
}


export default Main