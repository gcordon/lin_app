import React, { Component } from 'react';
import { Spin } from 'antd';

import axios from 'axios'


class loading extends Component {
    componentDidMount() {
        // 添加请求拦截器
        console.log('====================================');
        console.log(this.setState);
        console.log('====================================');
        let self = this
        axios.interceptors.request.use(function (config) {
            self.setState({
                load: true
            })
            console.log('处理前')
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            setTimeout(() => {
                self.setState({
                    load: false
                })
                return response;
            }, 1000);
            console.log('处理后');
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    constructor(props) {
        super(props)
        this.state = {
            load: true,
        }
        
    }
    render() {
        return (
            <div style={{ minHeight: '700px'}}>
                <Spin tip="Loading..." spinning={this.state.load} style={{marginTop:'350px'}}>
                    {this.props.children}
                </Spin>
            </div>
        );
    }
}

export default loading;

