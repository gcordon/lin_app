import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom'

import { editcourse_image } from '@/apis/server'

import {
    Upload, Button, Icon, message,
} from 'antd';
import reqwest from 'reqwest';



@connect(
    state => state.course,
)
@withRouter
class Child extends React.Component {
    state = {
        fileList: [],
        uploading: false,
        course_list: {}
    }
    constructor(props) {
        super(props)
    } 
    
    componentWillReceiveProps(newProps) {
        const arr = []
        let new_cat_course = ''
        var select_ = ["school",'title',"claim","examgear","description,","id",]
        
        for (let [k, v] of Object.entries(newProps.cat_course)) {
            // if (k == 'id') k = 'course_child_id'
            select_.forEach(value => {
                if (k == value) {
                    arr.push(`${k}=${v}`)
                    new_cat_course = arr.join('&')// => a=xx&b=xx
                }
            })
        }
        this.setState({
            cat_course: new_cat_course
        })

    }

    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });
        this.setState({
            uploading: true,
        });


        // You can use any AJAX library you like
        reqwest({
            // url: `http://localhost:7001/api/antd?a=${JSON.stringify(this.state.cat_course)}`,
            url: editcourse_image('?'+this.state.cat_course),
            method: 'post',
            processData: false,
            data: formData,
            success: (e) => {
                this.setState({
                    fileList: [],
                    uploading: false,
                });
                message.success('upload successfully.');
                // 上传完成之后返回上传的图片
                this.props.upload_course_img(e.data.course_image)
            },
            error: () => {
                this.setState({
                    uploading: false,
                });
                message.error('upload failed. 图片不能太大');
            },
        });
    }

    render() {
        const { uploading, fileList } = this.state;
        const props = {
            onRemove: (file) => {
                this.setState((state) => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                
                return false;
            },
            
            fileList,
        };
        
        return (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Select File
            </Button>
                </Upload>
                <Button
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                >
                    {uploading ? 'Uploading' : 'Start Upload'}
                </Button>
            </div>
        );
    }
}

export default Child;