/**
 * 入口js
 * - 生成store
 * - 设置中间件
 * - 包装App, 与redux连接
 * - render挂在到入口html上
 * @author Meng
 * @date 2016-07-14
 */


import React from 'react' // 不能省略, jsx被babel预处理后会用到这个

import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux' // 中间件

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

import todoApp from './component/AppRedux'
let store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware, // 异步action
        loggerMiddleware // 打印 action 日志
    )
)


// 包装App, 使得App类内部可以访问全局state和dispatch方法
import rawApp from './component/App'
const App = connect((state)=>state)(rawApp)

import "index.scss"

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
