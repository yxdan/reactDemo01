import React, { Component } from 'react';
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
                    {this.props.content}
                </li>
            </div>
        );
    }
    handleClick () {
        this.props.deleteItem(this.props.index)
    }
}
 
export default faireItem;
