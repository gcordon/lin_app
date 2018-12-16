import React,{ Component } from 'react'
import Zmage from 'react-zmage'

import { ali_scriptUrl } from '@/configs/DEPLOY'

import { connect, } from 'react-redux'
import {get_user_list} from '@/redux/user/action'


import {
    Table, Input, Button, Popconfirm, Form, Avatar, Icon
} from 'antd';



import Drawer from '@/components/Drawer'
import './index.css'
const FormItem = Form.Item;
const EditableContext = React.createContext();

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: ali_scriptUrl,
});


const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);


class EditableCell extends React.Component {
    state = {
        editing: false,
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    }

    save = () => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            console.log(record, values)
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                        <div
                                            className="editable-cell-value-wrap"
                                            style={{ paddingRight: 24 }}
                                            onClick={this.toggleEdit}
                                        >
                                            {restProps.children}
                                        </div>
                                    )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

@connect(
    state => state.user,
    { get_user_list },
)

class EditableTable extends React.Component {
    componentDidMount() {
        this.props.get_user_list()
        this.setState({
            loading: false,
        })
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
    }
    // 有props更新
    componentWillReceiveProps(newProps) {
        console.log('获取到props新数据Component WILL RECEIVE PROPS!')
        this.state.dataSource = newProps.user_list
    }
    constructor(props) {
        super(props);
        
        this.columns = [
            // {
            //     title: 'id',
            //     dataIndex: 'id',
            //     width: '30%',
            //     editable: true,
            // }, {
            //     title: 'name',
            //     dataIndex: 'name',
            //     editable: true,
            // }, {
            //     title: 'operation',
            //     dataIndex: 'operation',
            //     render: (text, record) => (
            //         this.state.dataSource.length >= 1
            //             ? (
            //                 <div>
            //                     <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
            //                         <a href="javascript:;">Delete</a>
            //                     </Popconfirm>
            //                     &emsp;
            //                 </div>
            //             ) : null
            //     ),
            // }
        ];
        let student_key = ['id', 'name', 'username', 'name', 'password', 'defaultpassword', 'sex', 'old_avatar', 'token', 'email']
        for (let i = 0; i < 10; i++) {
            if (student_key[i] == 'old_avatar') {
                this.columns.push({
                    title: 'old_avatar',
                    dataIndex: 'old_avatar',
                    render: (text, record) => (
                        this.state.dataSource.length >= 1
                            ? (
                                <div>
                                    {/* <Avatar size={38} src={text} /> */}
                                    <Zmage src={text} src={text} width={38} height={38} style={{ borderRadius: '50%'}}/>
                                </div>
                            ) : null
                    ),
                })
            } else if (student_key[i] == 'sex') {
                this.columns.push({
                    title: 'sex',
                    dataIndex: 'sex',
                    render: (text, record) => (
                        this.state.dataSource.length >= 1
                            ? (
                                <div>
                                    {/* <Avatar size={38} src={text} /> */}
                                    {text == 1 ? <IconFont type="icon-xingbienan" /> : <IconFont type="icon-xingbienv" />}
                                </div>
                            ) : null
                    ),
                })
            } else {
                this.columns.push({
                    title: student_key[i],
                    // <IconFont type="icon-xingbienan" />
                    dataIndex: student_key[i],
                    editable: (student_key[i] == 'id' || student_key[i] == 'token') ? false : true,
                    width: '10%',
                    key: i,
                })
            }
        }
        this.columns.push({
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => (
                this.state.dataSource.length >= 1
                    ? (
                        <div>
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                                <a href="javascript:;">Delete</a>
                            </Popconfirm>
                            &emsp;
                        </div>
                    ) : null
            ),
        })
        // //at.alicdn.com/t/font_964758_0yj9cpz7t85h.js
        
        // this.props.get_user_list()
        this.state = {
            dataSource: [],
            count: 2,
            loading: true,
        };
    }
    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    handleAdd = () => {
        // const { count, dataSource } = this.state;
        // const newData = {
        //     key: count,
        //     name: `Edward King ${count}`,
        //     age: 32,
        //     address: `London, Park Lane no. ${count}`,
        // };
        // this.setState({
        //     dataSource: [...dataSource, newData],
        //     count: count + 1,
        // });
        return 
    }

    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    }

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                {/* <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
                </Button> */}
                <div style={{ marginBottom: 16 }}>
                    <Drawer />
                </div>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    // bordered={false}
                    dataSource={dataSource}
                    columns={columns}
                    loading={this.state.loading } // 是否加载中
                    Pagination={{ defaultCurrent: 1, defaultPageSize: 2}} 
                    position={'top'}
                />

            </div>
        );
    }
}


export default EditableTable

