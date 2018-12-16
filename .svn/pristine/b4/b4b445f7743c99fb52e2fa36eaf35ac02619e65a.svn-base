import React, { Component } from 'react';
import { Link, } from 'react-router-dom'

import PureRenderMixin from 'react-addons-pure-render-mixin' // 代码性能优化

import { observable, action } from "mobx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'


import { Layout, Menu, Icon, Breadcrumb, } from 'antd';
import menu from '@/configs/menu';
import '../assert/Left.css'
import ContentLoader from '@/components/MyContentLoader/index.js'


import axios from 'axios'
const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class header extends Component {
    componentDidMount() {
    }
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); // 代码性能优化
    }
    render() {
        return (
            <Layout>
                <Sider style={{
                    overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" inlineIndent={30} defaultSelectedKeys={['/home']}>
                        {
                            menu.map((value,key) => {
                                return (
                                    // 是否有下拉多选项
                                    value.list 
                                    ? <SubMenu key={value.key} title={<span><Icon type="mail" /><span>{value.title}</span></span>}>
                                        { // 下拉菜单
                                            value.list.map(v => {
                                                return (
                                                    <Menu.Item key={v.key}>
                                                        <Link to={value.key} style={{ 'color': '#fafafa','display':'block' }}>
                                                                {/* <Icon type={value.icon} /> */}
                                                                <span className="nav-text">
                                                                    {value.title}
                                                                </span>
                                                        </Link>
                                                    </Menu.Item>  
                                            )})
                                        }
                                    </SubMenu> 
                                    : <Menu.Item key={value.key}>
                                        <Link to={value.key} style={{ 'color': '#fafafa', 'display': 'block' }}>
                                            <Icon type={value.icon} />
                                            <span className="nav-text">
                                                {value.title}
                                            </span>
                                        </Link>
                                    </Menu.Item> 
                                )
                            })
                            
                        }
                        
                        {/* 
                        <SubMenu key={value.key} title={<span><Icon type="appstore" /><span>key={value.title}</span></span>}>
                            <Menu.Item key={value.key}>{value.title}</Menu.Item>
                            <SubMenu key="sub1-2" title="Submenu">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">
                                <Link to="/bubblegum" style={{ 'color': '#999' }}>Bubblegum</Link>
                            </span>
                        </Menu.Item>
                        */}
                    </Menu>
                </Sider>
            </Layout>   
        )
    }
}

export default header;