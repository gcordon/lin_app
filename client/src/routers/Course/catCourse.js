
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios'
import { connect, } from 'react-redux'
import Zmage from 'react-zmage'

import { ali_scriptUrl } from '@/configs/DEPLOY'


import { get_cat_course, edit_cat_course, } from '@/redux/course/action'
import "./assert/css/catCourse.css"
import Upload_ from './component/upload'

import { Card, Input, Row, Col, Upload, Icon, message, Form, Button, Radio, Skeleton, } from 'antd';


const { TextArea } = Input;
const FormItem = Form.Item;

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: ali_scriptUrl
});




@connect(
    state => state.course,
    { get_cat_course, edit_cat_course, },
)
class catCourse extends Component {
    
    componentWillMount(){
        const a = this.props.get_cat_course(this.props.match.params.id)
        
        setTimeout(() => {
                if (a) this.setState({ loading: false })
        }, 0);
        // if (!this.props.cat_course.id) this.props.history.push({ pathname: '/home', })
        
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            course_list: newProps.cat_course,
            banner_: newProps.cat_course.banner
        }) 
        
    }
    // componentWillMount() {
        // Axios.get('/api/courseOne?course_child_id=40')
        //     .then(e => {
        //         this.setState({
        //             course_list: e.data.data,
        //             banner: e.data.data.banner,
        //             // 因为异步获取数据原因 =》 只能直接获取status
        //             // status: e.data.data.status,
        //         },() => {

        //         })
        //     })
    // }
    

    constructor(props) {
        super(props)
        this.state = {
            course_list : {},
            status: '',
            loading: true,
            banner: '',
        }
        window.props = props
        window.state = this.state
    }
    handleSubmit = (e) => {
        e.preventDefault()
        var myFetchOptions = {
            method: 'GET'
        }
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            // edit_cat_course
            this.props.edit_cat_course(fieldsValue)
            try {
                message.success('修改成功')
            } catch (error) {
                message.error('修改失败')
            }
        });
    }

    handleEmail (event){

    }
    upload_course_img(e) {
        this.setState({
            banner_: e
        })
    }

    render() {
        let { id, title, school, description, claim, examgear, status, } = this.props.cat_course
        let { banner_, course_list } = this.state
        const { getFieldDecorator } = this.props.form;
        return (
            <Skeleton avatar paragraph={{ rows: 20 }} loading={this.state.loading}>
                <div className="catCourse">
                    {/* this.props.match.params.id */}
                    <Row>
                        <Col span={6}>
                            <IconFont type="icon-fanhui1" style={{ fontSize: '26px', color: '#08c' }} onClick={() => {
                                this.props.history.goBack()
                            }}/>
                            <Zmage src={`/${banner_}`} className="catCourse-img" src={`/${banner_}`}   />
                            <FormItem
                                label="上传背景图"
                            >
    
                                <Upload_ upload_course_img={this.upload_course_img.bind(this)}  id={this.props.match.params.id}/>

                            </FormItem>
                            <FormItem
                                label="课程状态"
                            >
                                {getFieldDecorator('status', {
                                    initialValue: status,
                                    rules: [{
                                        required: true,
                                        message: 'Please input your name',
                                    }],
                                })(
                                    <Radio.Group  buttonStyle="solid">
                                        <Radio.Button value="wait">未开始</Radio.Button>
                                        <Radio.Button value="conduct">开始中</Radio.Button>
                                        <Radio.Button value="end">结束</Radio.Button>
                                    </Radio.Group>
                                )} 
                                <div>
                                </div>
                            </FormItem>
                        </Col>
                        <Col span={16} style={{marginLeft:'100px', textAlign:'left'}}>
                            <Form layout={'horizontal'} onSubmit={this.handleSubmit}>
                                
                                
                                <FormItem
                                    label="id："
                                >
                                    {getFieldDecorator('id', {
                                        initialValue: id,
                                        rules: [{
                                            required: true,
                                            message: 'Please input your name',
                                        }],
                                    })(
                                        <Input placeholder="input placeholder" style={{ width: '80%' }}  disabled={true}/>
                                    )}                                
                                </FormItem>
                                <FormItem
                                    label="学校"
                                >
                                    {getFieldDecorator('school', {
                                        initialValue: school,
                                        rules: [{
                                            required: true,
                                            message: 'Please input your name',
                                        }],
                                    })(
                                        <Input placeholder="input placeholder" style={{ width: '80%' }} />
                                    )}     
                                </FormItem>
                                <FormItem
                                    label="班课名"
                                >
                                    {getFieldDecorator('title', {
                                        initialValue: title,
                                        rules: [{
                                            required: true,
                                            message: 'Please input your name',
                                        }],
                                    })(
                                        <Input placeholder="input placeholder" style={{ width: '80%' }} />
                                    )} 
                                </FormItem>
                                <FormItem
                                    label="简介"
                                >
                                    {getFieldDecorator('description', {
                                        initialValue: description,
                                        rules: [{
                                            required: true,
                                            message: 'Please input your name',
                                        }],
                                    })(
                                        // <Input placeholder="input placeholder" style={{ width: '80%' }} defaultValue={description} />
                                        <TextArea placeholder="Autosize height based on content lines" autosize style={{ width: '80%' }}/>
                                    )} 
                                </FormItem>
                                <FormItem
                                    label="学习要求"
                                >
                                    {getFieldDecorator('claim', {
                                        initialValue: claim,
                                        rules: [{
                                            required: true,
                                            message: 'Please input your name',
                                        }],
                                    })(
                                        <Input placeholder="Basic usage" style={{ width: '80%' }} />
                                    )} 
                                </FormItem>
                                <FormItem
                                    label="学习考试安排"
                                >
                                    {getFieldDecorator('examgear', {
                                        initialValue: examgear,
                                        rules: [{
                                            required: true,
                                            message: 'Please input your name',
                                        }],
                                    })(
                                        <Input placeholder="Basic usage" style={{ width: '80%' }} />
                                    )} 
                                    
                                </FormItem>
                                
                                <FormItem
                                    wrapperCol={{
                                        xs: { span: 24, offset: 0 },
                                        sm: { span: 16, offset: 8 },
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">Submit</Button>
                                </FormItem>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Skeleton>
        );
    }
}
catCourse.defaultProps = {
    id: 35,  
}
catCourse.propTypes = {
    id: PropTypes.number,
};

const catCourse_ = Form.create()(catCourse);
export default catCourse_;