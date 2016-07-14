import React, { Component, PropTypes } from 'react';
import { Input } from 'antd';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {text:''};

        this.handelKeyUp = (e) => {
            if(e.keyCode === 13) {
                console.log('ENTER PRESSED, will add a new todo');
                props.addTodo(e.target.value);
                this.state.text = '';
            }
            e.stopPropagation();
        }

        this.handleChange = (e) => {
            this.setState({text: e.target.value});
            e.stopPropagation();
        }
    }

    render() {
        return (
            <div className="todo-input">
                <Input
                    type="text"
                    placeholder="新增项目"
                    size="large"
                    onKeyUp={this.handelKeyUp}
                    value={this.state.text}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired
}
