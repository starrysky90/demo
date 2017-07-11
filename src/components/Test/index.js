import React, { Component , PropTypes } from 'react';
import {Layout, Menu, Icon} from 'antd';

const {Header, Sider, Content, Footer} = Layout;

export default class Test extends Component{
    render(){
        return(
           <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>
                        <Menu theme="white" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}