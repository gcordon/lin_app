import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// component
import Layouts from './routers/Layouts'
import Login from './routers/Login'

import './configs/axios'
import Test from './test/test.js'
import { HashRouter, Route, Switch, BrowserRouter, } from 'react-router-dom'

import DevTools from 'mobx-react-devtools'



const SliderComponent = () => (
        <Switch>
                {/* <Route exact path='/' component={App} /> */}
                <Route path="/test" component={Test} exact/>   {/*  测试文件 */}
                <Route path="/login" component={Login} exact/>   
                <Route path="/" component={Layouts} />   {/*  后台主题模块 */}
                <Route component={Layouts} />  {/* 404 页面直接跳出到后台主页  */}
                {/* <Route path="/about" component={About} /> */}
                
        </Switch>
)

ReactDOM.render((
        <BrowserRouter >
                <div>
                        <SliderComponent />
                        <DevTools />
                </div>

        </BrowserRouter>
), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
