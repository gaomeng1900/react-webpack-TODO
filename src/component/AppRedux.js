/**
 * 按钮栏, 展示组件
 * @author Meng
 * @date 2016-07-14
 */

const ADD_TODO       = 'ADD_TODO' // 新增项
const FINISH_ALL     = 'FINISH_ALL' // 全部标记完成
const TRIGGER_FILTER = 'TRIGGER_FILTER' // 改变显示状态
const TRIGGER_STATUS = 'TRIGGER_STATUS' // 改变完成状态
const UPDATE_TODOS   = 'UPDATE_TODOS' // 从服务器更新列表

import fetch from 'isomorphic-fetch'

// action creater

// 添加项目, 异步action, 完成后从服务器同步状态
export function addTodo(text) {
    return dispatch => fetch('/api/todos', { method: 'POST', body: text })
    .then(response => console.log(response.json()))
    .then(dispatch(updateTodos()))
}

// 全部标记完成, 异步action, 完成后从服务器同步状态
export function finishAll() {
    return dispatch => fetch('/api/todos/all', {method: 'PUT'})
    .then(response => console.log(response.json()))
    .then(dispatch(updateTodos()))
}

// 全部显示/显示未完成, 同步action, 不与服务器交互
export function triggerFilter() {
    return {
        type: TRIGGER_FILTER
    }
}

// 改变完成状态, 异步action, 完成后从服务器同步状态
export function triggerStatus(todoId) {
    console.log('#5', todoId)
    return dispatch => fetch(`/api/todos/${todoId}`, {method: 'PUT'})
    .then(response => console.log(response.json()))
    .then(dispatch(updateTodos()))
}

// 从服务器同步状态, 异步action
export function updateTodos() {
    return dispatch =>
        fetch(`/api/todos`)
        .then(response => response.json())
        .then(json => dispatch({type: UPDATE_TODOS, todos: json.todos}))
}


// reducer
// (preState, action) => newState

const initialState = {
    ifFilter: false,
    todos: []
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {

        case TRIGGER_FILTER:
            console.log(TRIGGER_FILTER)
            return {
                ...state,
                ifFilter: !state.ifFilter
            }

        case UPDATE_TODOS:
            console.log(UPDATE_TODOS)
            return {
                ...state,
                todos: action.todos
            }

        default:
            return state
    }
}
