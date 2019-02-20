import React, { Component } from 'react';
import styles from './index.css';

const engCharNumberKeys = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const engSpecialCharKeys = [
  ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
  ['_', '\\', '|', '~', '<', '>', '€', '￡', '￥', '·'],
  ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
  ['.', ',', '?', '!', "'"],
];

console.log('engchar_number_keys', engCharNumberKeys);

export default class KeyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpperCase: false,
      isSpecialChar: false, // 是否切换到特殊字符
    };
  }

	switchKeyboardKeys = () => {
	  console.log('xxx');
	  const { isSpecialChar } = this.state;
	  this.setState({
	    isSpecialChar: !isSpecialChar,
	  });
	};

	render() {
	  const { isUpperCase, isSpecialChar } = this.state;
	  const keyboardKeys = isSpecialChar ? engSpecialCharKeys : engCharNumberKeys;
	  return (
			<div className={styles.keyboardContainer}>
				<div className={styles.keyboardTitle}>交通银行安全键盘</div>
				<div>
					<ui className={styles.line10}>
						{keyboardKeys[0].map(item => (
							<li>{item}</li>
						))}
					</ui>
					<ui className={styles.line10}>
						{keyboardKeys[1].map(item => (
							<li>{isUpperCase ? item.toUpperCase() : item}</li>
						))}
					</ui>
					<ui className={styles.line10} style={{ padding: isSpecialChar ? 0 : '0 0.2rem' }}>
						{keyboardKeys[2].map(item => (
							<li>{isUpperCase ? item.toUpperCase() : item}</li>
						))}
					</ui>
					<ui className={styles.line10}>
						<li
  style={{ flex: isSpecialChar ? 1 : 1.5 }}
  className={isSpecialChar ? styles.keyboardShiftDisabled : styles.keyboardShift}
  onClick={() => {
								!isSpecialChar && this.setState({ isUpperCase: !this.state.isUpperCase });
							}}
						>
							{isUpperCase ? 'x' : 'd'}
						</li>
						{keyboardKeys[3].map(item => (
							<li>{isUpperCase ? item.toUpperCase() : item}</li>
						))}
						<li style={{ flex: isSpecialChar ? 1 : 1.5 }} className={styles.keyboardBackspace}>
							◁
						</li>
					</ui>
					<ui className={styles.keyboardBottom}>
						<li
  style={{ width: '0.88rem' }}
  className={styles.keyboardSwitch}
  onClick={this.switchKeyboardKeys}
						>
							{isSpecialChar ? 'ABC' : '@/#'}
						</li>
						<li style={{ width: '1.88rem' }} className={styles.keyboardSpace}>
							空格
						</li>
						<li style={{ width: '0.88rem', background: '#0d6dd6', color: '#fff' }}>确定</li>
					</ui>
				</div>
			</div>
	  );
	}
}
