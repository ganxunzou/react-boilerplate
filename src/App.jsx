import React, { Component, PropTypes } from 'react'
import Header from './view/header'
import Body from './view/body'
import Footer from './view/footer'
import './style.less'

class App extends Component {
    render () {
        return (
            <div className="main">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

App.propTypes = {

}

export default App