import React, { Component } from 'react';
import style from './App.css';
import KeyBoard from './KeyBoard';

class App extends Component {
  render() {
    return (
			<div className={style.main}>
				<KeyBoard />
			</div>
    );
  }
}

export default App;
