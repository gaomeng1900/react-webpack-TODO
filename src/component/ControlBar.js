/**
 * 按钮栏, 展示组件
 * @author Meng
 * @date 2016-07-14
 */

import React, { Component, PropTypes } from 'react'
import { Button } from 'antd'

export default class ControlBar extends Component {
    // 初始化
    constructor(props) {
        super(props)
        this.state = {} // 初始化state? 该组件是否需要state?
    }

    // 视图
    render() {
        return (
            <div className="control-bar cf">
                <Button
                    className="finish-all"
                    onClick={this.props.finishAll}>
                    全部完成
                </Button>
                <Button
                    className="filter"
                    type={this.props.ifFilter ? "default" : "primary"}
                    onClick={this.props.triggerFilter}>
                    显示全部
                </Button>
            </div>
        )
    }
}

// props类型检查
ControlBar.propTypes = {
    finishAll: PropTypes.func.isRequired,
    triggerFilter: PropTypes.func.isRequired,
    ifFilter: PropTypes.bool.isRequired
}
