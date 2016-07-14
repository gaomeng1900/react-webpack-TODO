/**
 * webpackp-dev-server & 服务器端REST接口
 * @author Meng
 * @date 2016-07-14
 */

const express = require('express')
const webpack = require('webpack')
const jade    = require('pug')
const path    = require('path')
const Guid    = require('guid')
const _       = require('lodash')

// create normal express app
const app = express()
const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

// create a webpack conpiter
const config   = require('./webpack.config')
const compiler = webpack(config)

// set dev_option
var devOption = {
    noInfo: true, // ?
    publicPath: config.output.publicPath, // 静态文件位置
    stats: { colors: true }, // 进度输出
    historyApiFallback: true, // ?
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
}

// use webpack middleware with compiter & dev_option
app.use(require('webpack-dev-middleware')(compiler, devOption))
app.use(require('webpack-hot-middleware')(compiler))

// compit jade & route '/'to index.html
app.get('/', (req, res)=>{
    console.log('visiting index')
    var html = jade.renderFile(path.join(__dirname, 'src', 'index.jade'))
    res.writeHead(200,  { 'Content-Type': 'text/html charset=utf-8' })
    res.end(html)
})

// restful server ===============================================

// 初始化的todolist
var TODOS = [
    {text:'吃饭',   status:'new',  todoId:Guid.raw()},
    {text:'睡觉',   status:'new',  todoId:Guid.raw()},
    {text:'打豆豆', status:'done', todoId:Guid.raw()},
]

// get
app.get('/api/todos', (req, res)=>{
    console.log('API: get todo list')
    res.json({
        success: true,
        todos: TODOS
    })
})

// post
app.post('/api/todos', (req, res)=>{
    console.log('API: POST NEW:', req.body)
    TODOS.unshift({text:req.body, status:'new', todoId:Guid.raw()})
    res.json({ success: true })
})

// put
app.put('/api/todos/all', (req, res)=>{
    console.log('API: PUT: ALL')
    _.forEach(TODOS, (value, key)=>{
        value.status = 'done'
    })
    res.json({ success: true})
})

app.put('/api/todos/:todoId', (req, res)=>{
    console.log('API: PUT:', req.params.todoId)
    _.forEach(TODOS, (value, key)=>{
        if (value.todoId === req.params.todoId ) {
            value.status = value.status === 'done' ? 'new' : 'done'
        }
    })
    res.json({ success: true})
})


// listen
app.listen(3444, '0.0.0.0', (err)=>{
    if (err) {
        console.log(err)
        return
    }
    else {
        console.log('Listening @ http://localhost:3444')
    }
})
