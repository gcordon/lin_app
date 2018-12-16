import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { Provider, } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// component
import Layouts from './routers/Layouts'
import Login from './routers/Login'

import './configs/axios'
import { HashRouter, Route, Switch, BrowserRouter, } from 'react-router-dom'

// import DevTools from 'mobx-react-devtools'


import Test from './test/test.js'
// 引入redux相关文件
import Store from './redux/index'

const store = new createStore(
    Store,
    compose( // 加载中间件
        applyMiddleware(thunk), // thunk 用于异步 dispath && getstate  => https://blog.csdn.net/kuangshp128/article/details/67632683
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


const SliderComponent = () => (

    // <Switch>
    // store={store} 用于传递redux store
    <Provider store={store}>
        {/* <Route exact path='/' component={App} /> */}
        <Route path="/test" component={Test} exact/>   {/*  测试文件 */}
        <Route path="/login" component={Login} exact/>   
        <Route path="/" component={Layouts} />   {/*  后台主题模块 */}
        {/* <Route component={Layouts} />   404 页面直接跳出到后台主页  */}
        {/* <Route path="/about" component={About} /> */}
    </Provider>
    // </Switch>
)

ReactDOM.render((
        <BrowserRouter >
            <div>
                    <SliderComponent />
                    {/* <DevTools /> */}
            </div>
        </BrowserRouter>
), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
