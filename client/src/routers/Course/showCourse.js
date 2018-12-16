import React, { Component } from 'react';
import { Tree, Popover, Button } from 'antd';
import { Link } from 'react-router-dom'


import "./assert/css/showCourse.css"
import c from './course'
import { values } from 'mobx';
const { TreeNode } = Tree;

class Demo extends React.Component {
    constructor(props) {
        super(props)
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        const target = info.node.props
        if (target.type == 'course_child') {
            // alert('yes')
            this.props.history.push(`/catCourse/${target.id}`)
        }
    }
    
    render() {
        return (
            // <Tree
            //     showLine
            //     defaultExpandedKeys={['0-0-0']}
            //     onSelect={this.onSelect}
            // >
            //     <TreeNode title="parent" key="0-0">
            //         {/* <TreeNode title="parent" key="0-0-0">
            //             <TreeNode title="leaf" key="0-0-0-0" />
            //             <TreeNode title="leaf" key="0-0-0-1" />
            //             <TreeNode title="leaf" key="0-0-0-2" />
            //         </TreeNode> */}
            //         <TreeNode title="计算机" key="计算机">
            //             <TreeNode title="计算机1" key="计算机1" value="6666"  onClick={(e) => {
            //                 console.log(e)
            //             }}/>
            //         </TreeNode>
            //         {/* <TreeNode title="parent" key="0-0-2">
            //             <TreeNode title="leaf" key="0-0-2-0" />
            //             <TreeNode title="leaf" key="0-0-2-1" />
            //         </TreeNode> */}
            //     </TreeNode>
            // </Tree>
            <div className="showCourse">

            {
                    c.map(v => {
                        return (
                            <Tree
                                showLine
                                // defaultExpandedKeys={['0-0-0']}
                                defaultExpandAll={true}
                                onSelect={this.onSelect}
                                onRightClick={() => {
                                    alert(1)
                                }}
                            >
                                <TreeNode title={v.title} key={v.class_name} id={v.id}>
                                    {v.children.map(vv => {
                                        return (
                                            <TreeNode title={vv.class_name} key={vv.class_name} id={v.id} >
                                                {/* <TreeNode title="leaf" key="0-0-2-0" /> */}
                                                {vv.children.map(vs => {
                                                    return (
                                                            <TreeNode title={vs.title} key={vs.title} type="course_child" id={vs.id}  />
                                                    )
                                                })}
                                            </TreeNode>
                                        )
                                    })}
                                </TreeNode>
                            </Tree>
                        )
                    })
            }
            </div>
            
        );
    }
}


export default Demo