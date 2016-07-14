import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                剩余 {
                    this.props.todos.filter(
                        (value) => value.status === 'new'
                    ).length
                } 项未完成
            </footer>
        )
    }
}

Footer.propTypes = {
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
