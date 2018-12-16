import React, { ReactDOM, mountNode  } from 'react'

import "./index.css"
import {
    Form, Icon, Input, Button, Checkbox, message,
} from 'antd';

import { ADMIN_COOKIE } from '@/configs/DEPLOY'

import { Login } from '@/apis/server'
import Ajax from '@/configs/ajax'

import { setCookies, getCookies } from '@/util/util'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    // 检测是否存在cookie =》 admin_login
    componentWillMount() {
        return getCookies(ADMIN_COOKIE) ? this.props.history.push('/home') : null
    }
    constructor(props) {
        super(props)
        this.state = {
            username: 'admin',
            password: 'admin',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        window.props = props
    }
    async handleSubmit (e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const remember = values.remember
                this.setState({
                    username: values.username,
                    password: values.password,
                }, async () => {
                    const login = await Login({
                        username: this.state.username,
                        password: this.state.password
                    })
                    if (login.hasOwnProperty('axios_ajax_error'))  message.error(`账号或密码错误`)
                    console.log(login)
                    // 是否记住当前登录  =》 是=》cookie保存时间为7天 否=》1天
                    message.info(`账号或密码正确`, 2, () => {
                        setCookies(ADMIN_COOKIE, login.username, remember ? 7 : 1)
                        this.props.history.push('/home')
                    })
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {username, password} = this.state
        return (
            <div id="login-form">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('username', {
                            initialValue: `${username}`,
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input size="small" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username " />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            initialValue: `${password}`,
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            // <Checkbox>Remember me</Checkbox>
                            <Checkbox>记住我</Checkbox>
                        )}
                        {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            {/* Log in */}
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm