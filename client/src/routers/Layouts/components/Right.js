import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Icon, Breadcrumb, message, } from 'antd';
import { withRouter, Route } from 'react-router-dom'
import routerConfig from '@/configs/routers'
import { BackTop } from 'antd';

import { ADMIN_COOKIE } from '@/configs/DEPLOY'
import { setCookies, getCookies } from '@/util/util'


const {
    Header, Content, Footer,
} = Layout;


@withRouter
class Slide extends Component {
    componentWillMount() {
        if(!getCookies(ADMIN_COOKIE)) message.warning('非法管理,请先登录', 1, () => { })
        return !getCookies(ADMIN_COOKIE) ? this.props.history.push('/login') : null
    }
    render() {
        return (
            <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: '20   ' }}>
                    <Breadcrumb >
                        <Breadcrumb.Item href="">
                            <Icon type="home" />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <Icon type="user" />
                            <span>Application List</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Application
                            </Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    {/* {routes.map((route, index) => (
                        // You can render a <Route> in as many places
                        // as you want in your app. It will render along
                        // with any other <Route>s that also match the URL.
                        // So, a sidebar or breadcrumbs or anything else
                        // that requires you to render multiple things
                        // in multiple places at the same URL is nothing
                        // more than multiple <Route>s.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))} */}
                    <div style={{ padding: 24, color: 'red', background: '#fff', textAlign: 'center' }}>
                        {/* {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))} */}
                        {routerConfig.map((item, i) =>
                            <Route key={i} path={item.path} component={item.component} exact />
                        )}
                        {/* 回到顶部 */}
                        <BackTop />

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

Slide.propTypes = {

};
export default Slide;