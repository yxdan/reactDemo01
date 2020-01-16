import React, { Component } from 'react';
import './style.css'
import {CSSTransition} from 'react-transition-group'
class Boss extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isShow: true
        }
        this.toggle = this.toggle.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition in={this.state.isShow} timeout={2000} classNames='boss-content' unmountOnExit>
                    <p>巴啦啦小魔仙</p>
                </CSSTransition>
                <button onClick={this.toggle}>召唤</button>        
            </div>
         );
    }
    toggle () {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}
 
export default Boss;