import React, { Component, PropTypes } from 'react';
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let visibleTodos = this.props.todos.filter(
            (value) => {
                if (this.props.ifFilter) {
                    return value.status === 'new'
                }
                else {
                    return true;
                }
            }
        )
        return (
            <div className="todo-list">
                <ul>
                    {visibleTodos.map( (value, index)=>{
                        return (
                            <Todo
                                {...value}
                                triggerStatus={this.props.triggerStatus}
                                key={value.todoId}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

TodoList.propTypes = {
    triggerStatus: PropTypes.func.isRequired,
    ifFilter: PropTypes.bool.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                text: PropTypes.string.isRequired,
                status: PropTypes.string.isRequired,
                todoId: PropTypes.string.isRequired,
            }
        ).isRequired
    ).isRequired
}
