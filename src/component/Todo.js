import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'antd';

export default class Todo extends Component {
    // 初始化
    constructor(props) {
        super(props);
    }

    //视图
    render() {
        return (
            <li>
                <Checkbox
                    checked={this.props.status === 'done'}
                    onChange={ (e) => {
                        console.log('#3 todo item clicked');
                        e.stopPropagation();
                        this.props.triggerStatus(this.props.todoId);
                    }}
                    style={{
                        textDecoration: this.props.status === 'done' ? 'line-through' : 'none',
                    }}
                >
                    {this.props.text}
                </Checkbox>
            </li>
        )
    }
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    todoId: PropTypes.string.isRequired,
    triggerStatus: PropTypes.func.isRequired
}
