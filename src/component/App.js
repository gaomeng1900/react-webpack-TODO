/**
 * 根组件, 容器组件
 * @author Meng
 * @date 2016-07-14
 */

import React from 'react'
import { Component } from 'react'

import TodoInput  from './TodoInput'
import ControlBar from './ControlBar'
import TodoList   from './TodoList'
import Footer     from './Footer'

import { addTodo, finishAll, triggerFilter, triggerStatus, updateTodos } from './AppRedux'

export default class App extends Component {
    constructor(props) {
        console.log('App init...')
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(updateTodos())
    }

    render() {
        return (
            <div className="wrapper">
                <header> Todo List </header>
                <TodoInput
                    addTodo={ text => this.props.dispatch(addTodo(text)) }/>

                <ControlBar
                    finishAll={ () => this.props.dispatch(finishAll()) }
                    triggerFilter={ () => this.props.dispatch(triggerFilter()) }
                    ifFilter={this.props.ifFilter}/>

                <TodoList
                    triggerStatus={ (todoId) => this.props.dispatch(triggerStatus(todoId)) }
                    todos={this.props.todos}
                    ifFilter={this.props.ifFilter}/>

                <Footer
                    todos={this.props.todos}/>

            </div>
        )
    }
}
