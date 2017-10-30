import React, { Component, PropTypes } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import style from './App.css';

class App extends Component {
  render() {
    return (
            <div className={style.main}>
                <Header />
                <Body />
                <Footer />
            </div>
    );
  }
}

App.propTypes = {

};

export default App;
