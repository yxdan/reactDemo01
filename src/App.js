import React, {Component} from 'react' // 相当于 import React from 'react';const Component = React.component
class App extends Component{
    render() {
        // 只要使用()就可以换行
        return (
            <ul className='nav-list'>
                <li>hello react</li>
                <li>I love coding</li>
            </ul>
        )
    }
}
export default App
