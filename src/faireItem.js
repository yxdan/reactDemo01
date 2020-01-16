import React, { Component } from 'react';
import PropTypes from 'prop-types'
class faireItem extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    // 子组件接收到父组件传递的参数，父组件render函数重新被执行，这个生命周期就会被执行。
    // .组件第一次存在于dom中，函数是不会被执行
    // .如果存在于dom中，函数才会被执行
    // componentWillReceiveProps () {
    //     console.log('componentWillReceiveProps', 'child-组件将要接受属性')
    // }
    // componentWillUnmount () {
    //     console.log('componentWillUnmount', 'child-组件去除时执行')
    // }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }

    }
    render() { 
        console.log('child-render')
        return (  
            <div>
                <li 
                    key={this.props.index + this.props.content}
                    onClick={this.handleClick}
                >
                    {this.props.name}:为您服务-{this.props.content}
                </li>
            </div>
        );
    }
    handleClick () {
        this.props.deleteItem(this.props.index)
    }
}
faireItem.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
// 默认属性
faireItem.defaultProps = {
    name: '红红'
}
export default faireItem;
