import React, { Component } from 'react';
import style from './App.css';
import { showPwd } from './PwdUtils';

class App extends Component {
	showPwdHandle = (e) => {
	  const curElement = document.activeElement;
	  curElement.blur();
	  showPwd(e.target);
	};

	render() {
	  return (
			<div className={style.main}>
				<div>
					<input placeholder="用户名" />
				</div>
				<div>
					<input
  type="password"
  placeholder="密码"
  style={{ imeMode: 'disabled' }}
  readOnly
  onClick={this.showPwdHandle}
					/>
				</div>
				<div>
					<input
  type="password"
  placeholder="密码"
  style={{ imeMode: 'disabled' }}
  readOnly
  onClick={this.showPwdHandle}
					/>
				</div>
				{/* <KeyBoard /> */}
			</div>
	  );
	}
}

export default App;
