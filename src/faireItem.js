import React, { Component } from 'react';
import PropTypes from 'prop-types'
class faireItem extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
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
