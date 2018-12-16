import React, { Component } from 'react';
import Axios from 'axios';
import { observable, action, autorun, computed,} from 'mobx'

import { observer} from 'mobx-react'

class store {
    @observable num = 8;
    @observable userlist = [
        { title: "Spoil tea", completed: true },
        { title: "Make coffee", completed: false }
    ];
    
    @action
    async getUserList() {
        const user = await Axios.get('/admin/getUser?page=1&limit=10')
        console.log('===========user=========================');
        console.log('===========user=========================');
        console.log('===========user=========================');
        console.log(user.data.data);
        console.log('===========user=========================');
        console.log('===========user=========================');
        console.log('===========user=========================');
        console.log('====================================');
        
        this.userlist = user.data.data
    }
}

const Store = new store()
// Store.getUserList()
window.Store = Store

@observer
class index extends Component {
    constructor(props) {
        super(props)
        window.props = this
    }
    render() {
        return (
            <div>
                Egg  后台主页
                <div>
                    
                    Scroll down to see the bottom-right
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae placeat libero id. Pariatur sed possimus cupiditate quae. Error, labore dicta sequi ipsum facilis est aliquam sed, vitae ducimus nemo aut!
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae placeat libero id. Pariatur sed possimus cupiditate quae. Error, labore dicta sequi ipsum facilis est aliquam sed, vitae ducimus nemo aut!
                </div>
            </div>
        );
    }
}

export default index;