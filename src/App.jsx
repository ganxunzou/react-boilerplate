import React, { Component, PropTypes } from 'react'
import Home from './view/Home'
import About from './view/About'
require('./style.less');

class App extends Component {
    render () {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        )
    }
}

App.propTypes = {

}

export default App