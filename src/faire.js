import React, {Component, Fragment} from 'react'
import './style.css'
import FaireItem from './faireItem'

class Faire extends Component {
    // 定义数据
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this)
        this.state ={
            inputValue: '',
            list: ['代发短信', '代签收快递']
        }
    }
    render() {
        return (
            <Fragment>
                {/*Fragment 碎片化 Flex 推荐使用这种注释方法*/}
                {
                    // 或者这种单行的注释
                }
                <div>
                    {/*添加光标: 点击增加服务的时候，聚焦到input框内*/}
                    <label htmlFor="addService">服务名称: </label>
                    <input id='addService' className="input" type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <p>
                        <button onClick={this.addList.bind(this)}>增加服务</button>
                    </p>
                </div>
                <ul>
                    {/*
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                // dangerouslySetInnerHTML 类似于pre 或者 v-html
                                <li
                                    key={item+index}
                                    onClick={this.deleteItem.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                >
                                </li>
                            )
                        })
                    }
                    */}
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                <FaireItem 
                                    name='等等'
                                    key={index}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem}
                                />     
                            )
                        })
                    }               
                </ul>
            </Fragment>
        )
    }
    // 事件
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    // 增加
    addList () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    // 删除列表项
    deleteItem (index) {
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
}
export default Faire