import React, {Component, Fragment} from 'react'
import './style.css'
import FaireItem from './faireItem'

class Faire extends Component {
    // init初始化阶段 --在某一时刻可以自动执行
    // 定义数据 这个是es的构造方法 不算react的生命周期
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this)
        this.state ={
            inputValue: '',
            list: ['代发短信', '代签收快递']
        }
    }
    // mount 挂载阶段
    // componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，
    // 而render是states和props发生改变就会执行
    componentWillMount () {
        console.log('componentWillMount', '1.组件将要挂载之前')
    }
    componentDidMount () {
        console.log('componentDidMount', '3.组件挂载完成')
    }
    // updation 组件发生改变的阶段 (states和props) 状态和属性发生改变
    // shouldComponentUpdate: 函数在组件更新之前，自动执行。必须返回boolean值
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate', '1-在组件更新之前')
        // 返回true同意组件更新，返回false 反对组件更新
        return true
    }
    componentWillUpdate () {
        console.log('componentWillUpdate', '2-在组件更新之前， 但是在shouldComponentUpdate之后')
    }
    componentDidUpdate () {
        console.log('componentDidUpdate', '4-组件更新之后执行')
    }
    render() {
        // 页面states或者props发生改变时
        console.log('render', '2.或者3-开始挂载渲染')
        return (
            <Fragment>
                {/*Fragment 碎片化 Flex 推荐使用这种注释方法*/}
                {
                    // 或者这种单行的注释
                }
                <div>
                    {/*添加光标: 点击增加服务的时候，聚焦到input框内*/}
                    <label htmlFor="addService">服务名称: </label>
                    <input ref={(input)=> {this.input = input}} id='addService' className="input" type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <p>
                        <button onClick={this.addList.bind(this)}>增加服务</button>
                    </p>
                </div>
                <ul ref={(ul)=> {this.ul =ul}}>
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
            inputValue: this.input.value
        })
    }
    // 增加
    addList () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, ()=>{
            console.log(this.ul.querySelectorAll('li').length)
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