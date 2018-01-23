import React, { Component } from 'react';
import { DefHref } from 'components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom'
import './scss/Default.scss';
import {increment,decrement,increment_async,unmount,getToken} from '../../redux/actions/home'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

@connect((state) => {
  return {
    home:state.home,
    count:state.home.count,
    token:state.home.token
  }
},{increment,decrement,increment_async,unmount,getToken})
class Default extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  static propTypes = {
    UserList: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentWillMount() {
    this.props.getToken()
    console.log(this.props)
    console.log( this.context.router)
  }
  componentWillUnmount() {
    this.props.unmount()
  }
  render() {
    let dispatch = this.props.dispatch
    return (

      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div>
              <div className={'text'}>
                <Link to='page1'>page1</Link>
                <button onClick={()=>{this.props.getToken()}}>获取TOKEN</button>
                <button onClick={()=>{this.props.increment_async({a:1})}}>增加</button>
                <button onClick={()=>{this.props.decrement()}}>减少</button>
                {this.props.count}
                {this.props.token}
              </div>

            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>

    );
  }
}
export default Default