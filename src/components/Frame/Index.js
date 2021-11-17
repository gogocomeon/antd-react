import React from 'react';
import { Layout, Menu,Dropdown,Avatar, message,Badge} from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from './demologo.jpg';
import { adminRoutes  } from '../../routes';
import {withRouter} from 'react-router-dom';
import "./fram.css"
import { DownOutlined,UserOutlined } from '@ant-design/icons';
import { clearToken } from '../../utils/auth';
import {connect} from 'react-redux'

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)

function Index( props) {
  console.log("dddddddd"+props.state)
  const popMenu = (<Menu onClick={
    (p)=>{
      if(p.key==='logout'){
        clearToken()
        props.history.push('/login')
      }else{
        if(p.key==='notice'){
          props.history.push('/admin/notice')
        }
        message.info(p.key)
      }
    }
  }>
    <Menu.Item key="notice">通知中心</Menu.Item>
    <Menu.Item key="settings">设置</Menu.Item>
    <Menu.Item key="logout">退出</Menu.Item>
  </Menu>)

    return (
        <Layout>
    <Header className="header" style={{
        backgroundColor:'#FEFEFE'
    }}>
      <div className="logo">
          <img src={logo} alt="logo" width="70px"></img>
          </div>
          <Dropdown overlay={popMenu}>
            <div>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
             <Badge dot={!props.isAllRead}> <span>
                超级管理员<DownOutlined />
              </span></Badge>
            </div>
          </Dropdown>
      {/*   */}
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            {
                routes.map(route=>{
                    return( 
                    <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>{route.icon}{route.titile}</Menu.Item>
                    )
                })
            }
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}
const mapStateToProps = state =>state;
export default connect(mapStateToProps)(withRouter(Index));